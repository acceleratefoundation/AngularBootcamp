## Setup (host operating system)

(Note: The following steps are to be performed on the host operating system)


### Download Ubuntu MATE
Download Ubuntu MATE 64-bit 16.04.3 LTS Xenial

https://ubuntu-mate.org/download/

  - Click "64-bit"
  - Click "16.04.3 LTS (Xenial)" (Note: remember the download location)

### Install Virtual Box
https://www.virtualbox.org/

  - Launch the Virtual Box application

## Setup (guest operating system)

(Note: The following steps are to be performed on the guest operating system after all previous processes are complete.)

### Create VM with Virtual Box

  - Click the "New" button
  - Enter these parameters
    - Name: Ubuntu Dev Box
    - Type: Linux
    - Version: Ubuntu (64 bit)
  - Click "Continue"
  - Set the Memory Size
    - 1024 MB
  - Select hard disk
    - Create a virutal hard disk now
  - Click "Create"
  - Select hard disk type
    - VDI (VirtualBox Disk Image)
  - Click "Continue"
  - Select Storage type
    - Dynamically allocated
  - Click "Continue"
  - Select File location and size
    - Ubuntu Dev Box
    - 10.00 GB
  - Click "Create"
  - Select the newly created dev box and then Click "Start"
  - Select optical disk file (Navigate to the previously downloaded Ubuntu MATE 16.04.3 iso file
    - ubuntu-mate-16.04.3-desktop-amd64.iso
  - Click "Start"

### Install Ubuntu MATE

  - Select "English"
  - Click "Install Ubuntu MATE"
  - Select the following:
    - Download updates while installing Ubuntu MATE
    - Install third-party software for graphics and Wi-Fi hardware, Flash, MP3 and other media.
  - Click "Continue"
  - Select "Erase disk and install Ubuntu MATE" (Note, this will only affect the virtual disk you created, not your PC's hard drive)
  - Click "Install Now"
  - When the "Write the changes to disk?" dialog appears, click "Continue"
  - When the "Where are you?" dialog appears, select your region and then click "Continue"
  - When the "Keyboard Layout" dialog appears, click "Continue"
  - When the "Who are you?" dialog appears, fill out the details and then click "Continue"
  - Ubuntu MATE will now install
  - When the installation is complete, click "Restart Now"
  - When the "Please remove the installation medium" screen appears, hit the "Enter" key


### Update operating system
```
sudo apt-get update
sudo apt-get -y upgrade
sudo apt-get -y install virtualbox-guest-x11-hwe
sudo apt-get -y install git
```

### Configure VirtualBox

  - Shut down Ubuntu MATE by select the power off button
  - In VirtualBox, select the powered off "Ubuntu Dev Box" machine
  - Click "Settings"
  - On the "General" tab, select "Advanced"
  - Under "Shared Clipboard", select "Bidirectional"
  - Click the "Display" tab
  - Increase the Video Memory to 128 MB
  - Click OK

### Development Environment Setup

  - Start the "Ubuntu Dev Box"
  - Open MATE Terminal

```
git clone https://github.com/acceleratefoundation/web-development-bootcamp.git
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

### MongoDB Install

```
sudo ./dev-clean-install.js mongoSetup
```

