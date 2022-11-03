#!/bin/bash
set -e

GITHUB_REPO=git@github.com:bncarey42/bncarey42.github.io.git
GITHUB_BRANCH=main:_gh-pages

mv ./dist $runner.temp/ghp-build

rm -rf ./*

mv $runner.temp/ghp-build/* .

ls -lFsgh

git commit -am 'New GHP Deploy'
git push -f $GITHUB_REPO $GITHUB_BRANCH --no-verify
cd -