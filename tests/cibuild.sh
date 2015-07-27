#!/usr/bin/env bash
set -e # halt script on error

#Site builds
bundle exec "jekyll build --safe"

#These tests check if your image references,
#alt tags, internal links...
#bundle exec htmlproof ./_site --only-4xx  --check-html --href-ignore "#"
