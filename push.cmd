@echo off
rmdir /s /q dist
mkdir dist
cd dist && git init
git remote add origin https://github.com/mikelneonedwin/SEN211-GROUP9.git && git pull origin master && cd .. && npm run build && git add . && git commit -m %1 && git push origin dev && cd dist && git add . && git commit -m %1 && git push origin master
cd .. 
