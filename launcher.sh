#!/bin/sh
# launcher.sh
# navigate to home directory, then to this dir and execute script

cd /home/pepoc/server/
flask run --host=0.0.0.0
cd /
