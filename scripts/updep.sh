#!/usr/bin/env bash
set -eu

LAST_VERSION=$(<depversion)

if [ ! -f .depversion ]; then
  touch .depversion
  echo $LAST_VERSION > .depversion
  npm i
  exit 0
fi

LOCAL_VERSION=$(<.depversion)

if [ $LAST_VERSION -gt $LOCAL_VERSION ]; then
  echo $LAST_VERSION > .depversion
  npm i
  exit 0
fi
