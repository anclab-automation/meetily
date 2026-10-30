#!/usr/bin/env bash
# Build Meetily (Anclab edition) on Arch / Omarchy and install it for the current user.
#
#   scripts/omarchy-install.sh                         # CPU build
#   MEETILY_GPU_FEATURE=vulkan scripts/omarchy-install.sh   # needs: pacman -S vulkan-headers shaderc
#   MEETILY_GPU_FEATURE=cuda   scripts/omarchy-install.sh   # needs: pacman -S cuda
#
# Requires rust, node, pnpm and cmake (mise use -g cmake works).
set -euo pipefail

ROOT=$(cd "$(dirname "$0")/.." && pwd)
FEATURE="${MEETILY_GPU_FEATURE:-}"
PREFIX="${PREFIX:-$HOME/.local/opt/meetily}"
TRIPLE=$(rustc -vV | awk '/^host:/ {print $2}')

# cmake 4 rejects the cmake_minimum_required() of the vendored whisper.cpp / llama.cpp.
export CMAKE_POLICY_VERSION_MINIMUM=3.5
# bindgen 0.69 with the system libclang (23) emits opaque whisper structs; use the crate's bundled bindings.
export WHISPER_DONT_GENERATE_BINDINGS=1
if [ "$FEATURE" = "cuda" ]; then
  export CUDA_PATH="${CUDA_PATH:-/opt/cuda}" PATH="/opt/cuda/bin:$PATH"
  export CMAKE_CUDA_ARCHITECTURES="${CMAKE_CUDA_ARCHITECTURES:-native}" CMAKE_CUDA_STANDARD=17 CMAKE_POSITION_INDEPENDENT_CODE=ON
fi

cd "$ROOT"
echo "==> llama-helper sidecar (${FEATURE:-cpu})"
cargo build --release -p llama-helper ${FEATURE:+--features "$FEATURE"}
mkdir -p frontend/src-tauri/binaries
cp target/release/llama-helper "frontend/src-tauri/binaries/llama-helper-$TRIPLE"

echo "==> frontend"
(cd frontend && pnpm install --frozen-lockfile && pnpm build)

echo "==> meetily (${FEATURE:-cpu})"
cargo build --release -p meetily --features "tauri/custom-protocol${FEATURE:+,$FEATURE}"

echo "==> install to $PREFIX"
install -d "$PREFIX" "$HOME/.local/bin" "$HOME/.local/share/applications"
install -m755 target/release/meetily target/release/llama-helper target/release/ffmpeg "$PREFIX/"
rm -rf "$PREFIX/templates" && cp -r target/release/templates "$PREFIX/"
install -m644 frontend/src-tauri/icons/anclab-app-icon-teal.svg "$PREFIX/meetily.svg"

cat > "$HOME/.local/bin/meetily" <<EOF
#!/bin/sh
# WebKitGTK's DMA-BUF renderer can leave the window blank with NVIDIA on Wayland.
export WEBKIT_DISABLE_DMABUF_RENDERER=1
exec "$PREFIX/meetily" "\$@"
EOF
chmod 755 "$HOME/.local/bin/meetily"

cat > "$HOME/.local/share/applications/meetily.desktop" <<EOF
[Desktop Entry]
Type=Application
Name=Meetily
Comment=Local meeting transcription and notes
Exec=$HOME/.local/bin/meetily
Icon=$PREFIX/meetily.svg
Terminal=false
Categories=Office;AudioVideo;
StartupWMClass=meetily
EOF

echo "Installed. Start it with 'meetily' or from the app launcher."
