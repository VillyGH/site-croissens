#!/usr/bin/env sh

set -e

npm run build

git add -A dist && git commit -m 'adding dist subtree'

git subtree push --prefix dist origin gh-pages
