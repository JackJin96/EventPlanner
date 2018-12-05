#! /bin/bash

fuser -k 4200/tcp
fuser -k 8000/tcp

cd ./client
npm start &

cd ../server
npm start &

echo '======================================='
read -p "PRESS [ENTER] to terminate processes." PRESSKEY

fuser -k 4200/tcp
fuser -k 8000/tcp
