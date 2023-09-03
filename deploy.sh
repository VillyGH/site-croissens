#!/usr/bin/env sh

set -e

npm run build

cd dist

git add .

git push -f origin master:gh-pages
