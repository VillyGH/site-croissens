#!/usr/bin/env sh

set -e

npm run build

cd dist

git push -f git@github.com:VillyGH/site-croissens.git main:gh-pages

cd ..

