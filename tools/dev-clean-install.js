#!/usr/bin/node

var shell = require('shelljs')
var fs = require('fs')
var program = require('commander')

class DevCleanInstall {

  setup(user, gitUser, gitEmail, gitPassword) {
    let home = process.env['HOME']

    shell.exec('apt-get install -y curl')
    shell.exec('apt-get install -y git')
    shell.exec('apt-get install -y vim')
    shell.exec('apt-get install -y vim-gtk')
    shell.exec('apt-get install -y terminator')
    shell.exec('apt-get install -y chromium-browser')
    shell.exec('apt-get install -y gimp')
    shell.exec('apt-get install -y gedit')
    shell.exec('apt-get install -y build-essential')
    shell.exec('apt-get install -y cmake')
    shell.exec('timedatectl set-timezone America/New_York')
    shell.exec('apt-get install -y ntp')
    shell.exec('git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim')

let vimrc = `
set nocompatible              " be iMproved, required
filetype off                  " required

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
" alternatively, pass a path where Vundle should install plugins
"call vundle#begin('~/some/path/here')

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'
Plugin 'scrooloose/nerdtree'
Plugin 'jistr/vim-nerdtree-tabs'

" All of your Plugins must be added before the following line
call vundle#end()            " required
filetype plugin indent on    " required
"
:set expandtab
:set shiftwidth=2
:set softtabstop=2
:set directory=/tmp
:noh
:syntax on
:set wildmode=list:longest
:set hidden
:set wildmenu
:set showcmd
:set smartcase
:set backspace=indent,eol,start
:set autoindent
:set ruler
:set laststatus=2
:set mouse=a
:set number
let mapleader = "-"
:map Y y$
:map <Leader>n <plug>NERDTreeTabsToggle<CR>
:map <Leader>no  <plug>NERDTreeTabsOpen
:map <Leader>nc  <plug>NERDTreeTabsClose
:map <Leader>ntoggle  <plug>NERDTreeTabsToggle
:map <Leader>nf  <plug>NERDTreeTabsFind
:map <Leader>mir  <plug>NERDTreeMirrorOpen
:map <Leader>mirt  <plug>NERDTreeMirrorToggle
:map <Leader>ntopen  <plug>NERDTreeSteppedOpen
:map <Leader>ntclose  <plug>NERDTreeSteppedClose
:set clipboard=unnamed
nnoremap <C-J> <C-W><C-J>
nnoremap <C-K> <C-W><C-K>
nnoremap <C-L> <C-W><C-L>
nnoremap <C-H> <C-W><C-H>
filetype plugin indent on
autocmd StdinReadPre * let s:std_in=1
autocmd VimEnter * if argc() == 0 && !exists("s:std_in") | NERDTree | endif
autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTree") && b:NERDTree.isTabTree()) | q | endif
`
    fs.writeFileSync(`${home}/.vimrc`, vimrc)
    shell.exec('vi -c "PluginInstall" .vimrc -c "qa"')

let bashrc = `
# Set up vi options
set -o vi
export EDITOR=vi
export VISUAL=vi

# Set prompt
export PS1='
$HOSTNAME:$PWD
$> '

export NPM_GLOBAL="$HOME/.npm-global"
`
    fs.appendFileSync(`${home}/.bashrc`, bashrc)

    shell.exec(`git config --global user.name ${gitUser}`)
    shell.exec(`git config --global user.email ${gitEmail}`)
    shell.exec('git config --global core.fileMode false')
    shell.exec('git config --global push.default simple')
    shell.exec('git config core.fileMode false')

let netrc = `
machine github.com login ${gitUser} password ${gitPassword}
machine bitbucket.org login ${gitUser} password ${gitPassword}
`

    fs.writeFileSync(`${home}/.netrc`, netrc)

let npmrc = `
prefix=~/.npm-global
`

    fs.writeFileSync(`${home}/.npmrc`, npmrc)

    shell.cd(`${home}`)
    shell.mkdir('.npm-global')

    shell.exec(`chmod -R 775 ${home}`)
    shell.exec(`chown -R ${user}:${user} ${home}`)


  }

  mongoSetup() {
    //----------------------------
    // Install MongoDB
    //----------------------------
    shell.exec('apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6')
    shell.exec('echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list')
    shell.exec('apt-get update')
    shell.exec('apt-get install -y mongodb-org')
let mongodbService = `
[Unit]
Description=High-performance, schema-free document-oriented database
After=network.target

[Service]
User=mongodb
ExecStart=/usr/bin/mongod --quiet --config /etc/mongod.conf

[Install]
WantedBy=multi-user.target
`

    fs.writeFileSync('/etc/systemd/system/mongodb.service', mongodbService)

    shell.exec('systemctl start mongodb')
    shell.exec('systemctl enable mongodb')
  }

}

var devCleanInstall = new DevCleanInstall()

program
  .command('setup <user> <gitUser> <gitEmail> <gitPassword>')
  .action((user, gitUser, gitEmail, gitPassword) => {
    devCleanInstall.setup(user, gitUser, gitEmail, gitPassword)
  });

program
  .command('mongoSetup')
  .action(() => {
    devCleanInstall.mongoSetup()
  });

program.parse(process.argv);

if(!program.args.length) program.help()
