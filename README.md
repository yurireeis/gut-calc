# GUT Calculator

This is a simple GUT matrix calculator created with HTML, CSS and Javascript (ES6). Feel free to use at you purpose.

### Objective

As shown, the GUT matrix consists of three elements: **Gravity**, **Urgency** and **Tendency**. If you want to know more about the tecnique click [here](https://getbootstrap.com/).

### Built With

* [Bootstrap4](https://getbootstrap.com/) - Open source toolkit for developing with HTML, CSS, and JS.
* [Electron](https://electronjs.org/) - Build cross platform desktop apps with JavaScript, HTML, and CSS

### Prerequisites

You need to have the following libs installed globally before you go:

- nodejs (v10 or above)
- electron

### Getting Started

You can use embedded at your HTML, or you can create binaries to use at your desktop. You just need to do the following instructions.

### Deployment

#### Development

0) run ```npm install``` 

1) run ```npm start``` (to view desktop application appearance)

#### Create Debian installer

0) run ```npm install``` 

1) install ```electron-installer-debian``` globally:

2) run ```npm run package-linux```

3) run ```create-debian-installer```

4) look at the folder ```release-builds/```. If everything goes fine an executable ```.deb``` file will exists there.

For further information about .deb packaging look at this [article](https://www.christianengvall.se/electron-installer-debian-package/).

#### Create Windows installer

0) run ```npm install```

1) install npm dependencies:

2) run ```npm run package-windows```

4) look at the folder ```release-builds/```. If everything goes fine an executable ```.exe``` file will exists there.

For further information about .deb packaging look at this [page](https://github.com/electron/windows-installer/).

### Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

### Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

### Authors

* **Yuri Reis** [[yurireeis](https://github.com/yurireeis)]

### Acknowledgments

* The GUT matrix technique appeared in 1981, thanks to the work done by two problem-solving experts: Charles H. Kepner and Benjamin B. Tregoe. They put the matrix into practice due to the need for a more detailed guideline regarding complex problems.