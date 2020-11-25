#!/bin/bash

########################## nginx ####################################
yum update -y
yum install epel-release -y
yum install nginx -y
sed "s@<path_to_front>@$(pwd)\/front@gm" nginx/www.yes.io.conf > /etc/nginx/conf.d/www.yes.io.conf

########################## firewall #################################
firewall-cmd --permanent --zone=public --add-service=http
firewall-cmd --permanent --zone=public --add-service=https
firewall-cmd --reload

######################### selinux ###################################
setenforce 0
sed 's/SELINUX=\(.*\)/SELINUX=disabled/g' -i /etc/selinux/config

######################## sysctl #####################################
cp OS/sysctl.conf /etc/sysctl.conf
sysctl -p

######################## running ####################################
systemctl daemon-reload
systemctl enable nginx
systemctl restart nginx

nginx -s reload
