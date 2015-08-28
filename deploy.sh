#!/bin/sh
surge --domain orange.surge.sh
git add -A 
git commit -m "update"
git push origin master