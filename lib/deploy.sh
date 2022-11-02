#!/bin/bash
set -e

GITHUB_REPO=https://github.com/bncarey42/bncarey42.github.io.git
GITHUB_BRANCH=main:_gh-pages

npm run build
cd dist
rm -rf .git
git init
git add -A
git status
git commit -am 'New GHP Deploy'
git status
git push -f $GITHUB_REPO $GITHUB_BRANCH --no-verify
cd -