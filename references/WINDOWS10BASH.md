## Setup

### Clone this repo
Open a bash terminal

```
cd ~
git clone https://github.com/acceleratefoundation/web-development-bootcamp.git
```

### Update operating system
```
sudo apt-get update
sudo apt-get -y upgrade
```

### Install Node JS
```
cd web-development-bootcamp/tools
cat ubuntu-node-install | sudo -E bash -
```

### Dev Install

```
npm install
sudo ./dev-clean-install.js setup $USER <gitUser> <gitEmail> <gitPassword>
```

(Note: Please replace with actual github info)

Example:

```
sudo ./dev-clean-install.js setup $USER iamgroot groot@gmail.com 'guardian' 
```

### Mongo Install

Install MongoDB using the msi from this link:

https://www.mongodb.com/download-center#community
