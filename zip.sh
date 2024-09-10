#!/usr/bin/env bash
set -eu

version=$(jq -r .version <./public/manifest.json) # | sed 's/\./-/g')
echo $version
set -x

rm -f dist*.zip
zip -r dist-"${version}".zip public
