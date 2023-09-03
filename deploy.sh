#!/usr/bin/env sh

set -e

npm run build

cd dist

git add . -f

git push -f origin master:gh-pages
