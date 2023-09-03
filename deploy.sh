#!/usr/bin/env sh

set -e

npm run build

cd dist

git add . -f

git push -f git@github.com:VillyGH/site-croissens.git master:gh-pages
