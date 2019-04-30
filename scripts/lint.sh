#!/usr/bin/env bash
set -ex

eslint --fix "src/**/*.{vue,js}"
stylelint --fix "src/**/*.{vue,scss}"
prettier --write "**/*.{vue,js,html,scss,json,yml,md}"
