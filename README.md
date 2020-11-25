# Y.E.S-HW2

## Members
	ArshiA Akhavan			97110422
	Mohamadreza Abdi		97110285
	Bahar Khodabakhshian		97105906

### Get Started

on your server machine:

clone this repo anywhere you want (other than /root directory)
```cd``` to the repo directory and run ```install.sh``` script as root

or

just simply run the following commands on your desire directory (not /root)!

```
git clone https://github.com/shrif-web/Y.E.S-HW2.git
cd Y.E.S-HW1
chmod +x install.sh
sudo ./install.sh
```

there you go!

your server is up and running on your server, and you can communicate it using the http://yes.io domain

### setting up your local DNS
if you are deploying our server on a machine, you need to configure your local DNS, in a way that it returns your machine IP address 
whenever you are using the http://yes.io domain

on your local machine, run:

    sudo echo "<your server ip address>   yes.io" >> /etc/hosts
  
there, you are good to go!

 just open any browser and start browsing our website or just simply click on http://yes.io