#!/bin/bash
set -e

GITHUB_REPO=https://github.com/bncarey42/bncarey42.github.io.git
GITHUB_BRANCH=main:_gh-pages

rm -rf .git

cd dist
git init
git add -A
git commit -am 'New GHP Deploy'
git push -f $GITHUB_REPO $GITHUB_BRANCH --no-verify
cd -