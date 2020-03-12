# ElectronJS_VideoAnalyser

This is from the Udemy course Electron for Desktop Apps: The Complete Developers Guide by Stephen Grider.
More details about the project will appear in this README file as I progress through this course.

```
$ mkdir projectName
$ cd projectName
$ npm init      (creates package.json)
$ npm install --save electron
$ code .        (open current directory in VS Code)
```

**index.js** - handles all the electron side of our program.

In **package.json**:
```
"main": "index.js",
"scripts": {
   "electron": "electron ."
}
```
Runs electron based on the present working directory.
The "main' property tells electron where it should start.

```
$ npm run electron
```

Html pages are used to create windows users can interact with.

Opening up developer tools helps us inspect our code.

*debugger* - placing inside our event handlers will cause the browser window to pause when the form is submitted.