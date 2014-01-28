# Installation Instructions

These instructions were modelled after a [meteor tutorial blog post](http://sebastiandahlgren.se/2013/07/17/tutorial-writing-your-first-metor-application/
).

## Pre-requisites

These instructions assume MacOS >= 10.9.1 with homebrew installed.

## Steps

1. Install or Upgrade Node

```shell
∴ brew install node
∴ brew upgrade node
==> Upgrading 1 outdated package, with result:
node 0.10.22
==> Upgrading node
==> Downloading http://nodejs.org/dist/v0.10.22/node-v0.10.22.tar.gz
######################################################################## 100.0%
==> Patching
patching file tools/gyp/pylib/gyp/xcode_emulation.py
==> ./configure --prefix=/usr/local/Cellar/node/0.10.22
==> make install
🍺  /usr/local/Cellar/node/0.10.22: 1096 files, 16M, built in 72 seconds
```
2. Install Meteor

```
∴ curl https://install.meteor.com | /bin/sh
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  4223    0  4223    0     0    593      0 --:--:--  0:00:07 --:--:--   593
Downloading Meteor distribution
######################################################################## 100.0%

Meteor 0.7.0.1 has been installed in your home directory (~/.meteor).
Writing a launcher script to /usr/local/bin/meteor for your convenience.

To get started fast:

  $ meteor create ~/my_cool_app
  $ cd ~/my_cool_app
  $ meteor

Or see the docs at:

  docs.meteor.com
```
3. Install Meteorite

```bash
∴ sudo npm install -g meteorite
Password:
npm http GET https://registry.npmjs.org/meteorite
npm http 200 https://registry.npmjs.org/meteorite
# ...
/usr/local/bin/mrt -> /usr/local/lib/node_modules/meteorite/bin/mrt.js

> meteorite@0.7.1 postinstall /usr/local/lib/node_modules/meteorite
> sh ./completions/postinstall.sh

meteorite@0.7.1 /usr/local/lib/node_modules/meteorite
├── colors@0.6.0-1
├── async@0.2.9
├── wrench@1.5.6
├── underscore@1.3.3
├── optimist@0.6.0 (wordwrap@0.0.2, minimist@0.0.5)
├── ddp@0.4.3 (meteor-ejson@0.6.3, faye-websocket@0.7.2, node-srp@0.0.1)
├── fstream@0.1.25 (inherits@2.0.1, graceful-fs@2.0.1, rimraf@2.2.6, mkdirp@0.3.5)
└── prompt@0.2.11 (revalidator@0.1.6, pkginfo@0.3.0, read@1.0.5, utile@0.2.1, winston@0.6.2)
```
