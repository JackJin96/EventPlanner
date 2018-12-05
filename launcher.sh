#! /bin/bash

# You can kill process at port 4200 just to make sure
# that the dev server is not running

# fuser -k 4200/tcp
fuser -k 8000/tcp

cd ./client
npm install
ng build --prod

cd ../server
npm install
npm start &

echo '======================================='
read -p "PRESS [ENTER] to terminate processes." PRESSKEY

# fuser -k 4200/tcp
fuser -k 8000/tcp
