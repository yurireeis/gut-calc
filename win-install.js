const electronInstaller = require('electron-winstaller');

const generateWindowsInstaller = async () => {
    try {
        await electronInstaller.createWindowsInstaller({
          appDirectory: 'release-builds/gut-calc-win-x64',
          outputDirectory: 'release-builds/',
          authors: 'Yuri Reis',
          exe: 'gui-calculator.exe'
        });
        console.log('It worked!');
      } catch (e) {
        console.log(`No dice: ${e.message}`);
      };
}

generateWindowsInstaller()
