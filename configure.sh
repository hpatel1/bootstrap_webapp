#!/bin/bash

echo $1
mv skeleton $1
mv "$1/static/javascripts/skeleton.js" "$1/static/javascripts/$1.js"
mv "$1/static/javascripts/skeleton.routes.js" "$1/static/javascripts/$1.routes.js"
mv "$1/static/javascripts/skeleton.config.js" "$1/static/javascripts/$1.config.js"
find ./ -type f -not -path "./.git*" -exec sed -i -e "s/skeleton/$1/g" {} \;
