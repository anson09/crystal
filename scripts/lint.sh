#!/usr/bin/env bash
set -ex

eslint --fix "src/**/*.{vue,js}"
stylelint --fix "src/**/*.{vue,css}"
prettier --write "**/*.{vue,js,html,css,json,yml,md}"
