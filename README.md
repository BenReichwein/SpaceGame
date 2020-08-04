**Setup**
All you need to do set up the development environment for this repository is host a local webserver. This can be done very easily through the Browser-Sync node package.

Before you install Browser-Sync, you should clone this repository onto your computer.

**How to install Browser-Sync**
First, you need to make sure that you have NodeJS installed. You can download NodeJS here. To test that you have installed Node correctly, type `node -v` into the command line (CMD on windows and Terminal on mac) to display the version of Node that you have installed.

Once you have done that, you can globally install the Browser-Sync package by typing npm install browser-sync -g into your command line environment. This should install the package globally, meaning it is accessible anywhere on your machine.

**How to use Browser-Sync**
For this case, you only need to run one command to start up the web server.

First you should navigate (in your command line) to the directory that contains this repository, and then run this command:

`browser-sync start --server -f -w`

This command will start a web server, and it will also refresh the webpage whenever a file is changed, so you don't have to manually refresh the page to see every change.
