### Create Debian installer

1) install electron-installer-debian globally:

2) run ```npm run package-linux```

3) run ```create-debian-installer```

4) look at the folder ```release-builds/```. If everything goes fine an executable ```.deb``` file will exists there.

For further information about .deb packaging look at this [article](https://www.christianengvall.se/electron-installer-debian-package/).

### Create Windows installer

1) install npm dependencies:

2) run ```npm run package-windows```

4) look at the folder ```release-builds/```. If everything goes fine an executable ```.exe``` file will exists there.

For further information about .deb packaging look at this [page](https://github.com/electron/windows-installer/).
