_#!/bin/bash_


export PM2_HOME=/home/ubuntu/.pm2
pm2 delete helloworld
cd /var/www/html/helloworld
pm2 start --name helloworld npm -- start