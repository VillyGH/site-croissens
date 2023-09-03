#!/usr/bin/env sh

set -e

npm run build

cd dist

git add -A

git push -f git@github.com:VillyGH/site-croissens.git master:gh-pages
