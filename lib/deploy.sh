#!/usr/bin/env bash

set -e

npm run build

cd dist

git init
git add *
git commit -am 'New GHP Deployment'
git push -f "git@github.com:bncarey42/bncarey42.github.io.git main:gh-pages"

cd -