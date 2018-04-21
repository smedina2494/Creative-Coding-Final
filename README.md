# Demo

## How to run

### start a Serial Server 
You might choose either with an GUI App or from cmd

#### GUI
run: https://github.com/vanevery/p5.serialcontrol/releases

#### Cmd Line
see https://github.com/vanevery/p5.serialport#p5serial-nodejs 

### run web server
either via serve.js or Python
#### serve.js way (Prefered)
Make sure you have node.js installed to have it run, if you don't have it:

##### install `node.js`
```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
$ brew install node
```

##### install `serve.js`
```bash
$ npm install -g serve
```

##### run
``` bash
$ serve .
```

#### Python way
``` bash
$ python -m SimpleHTTPServer
```
