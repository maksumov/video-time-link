#!/usr/bin/env bash
set -euo pipefail

PROJECT_NAME="video-time-link"
DIST_DIR="dist"
BUILD_DIR="$DIST_DIR/$PROJECT_NAME"

# Read version from manifest.json
VERSION=$(grep '"version"' manifest.json | sed -E 's/.*"version": *"([^"]+)".*/\1/')

if [[ -z "$VERSION" ]]; then
  echo "Failed to read version from manifest.json"
  exit 1
fi

ZIP_NAME="$PROJECT_NAME-$VERSION.zip"

echo "Building $ZIP_NAME"

# Clean previous build
rm -rf "$BUILD_DIR"
mkdir -p "$BUILD_DIR"

# Copy required files
cp manifest.json background.js "$BUILD_DIR/"
cp -r icons "$BUILD_DIR/"

# Create zip
cd "$DIST_DIR"
zip -r "$ZIP_NAME" "$PROJECT_NAME"
cd - > /dev/null

echo "Build complete: $DIST_DIR/$ZIP_NAME"
