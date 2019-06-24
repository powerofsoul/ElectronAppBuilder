import { BrowserWindow } from 'electron';
const fs = require("fs");
import config from "../config.js";

export abstract class Window{
    private componentPath: string;

    constructor(componentPath) {
        this.componentPath = componentPath.replace(/\\/g, "\\\\");
    }

    public abstract getProps(): {[key: string]: ()=> void};

    public show(){    
        let win:any =  new BrowserWindow({
            webPreferences: {
                nodeIntegration: true
            }
        });

        win.loadURL('data:text/html;charset=UTF-8,' + encodeURIComponent("<html><body><div id='view'></body></html>"), {
            baseURLForDataURL: `file://${__dirname}/app/`
        })

        win.componentProps = this.getProps();

        win.webContents.executeJavaScript(`
            const React = require('react');
            const ReactDom = require('react-dom');
            const Component = require('${this.componentPath}').default;
            const electron = require('electron');

            const componentProps = electron.remote.getCurrentWindow().componentProps;

            ReactDom.render(React.createElement(Component, {events: componentProps}, null), document.getElementById('view'));
        `);

        win.webContents.on('did-finish-load', function() {
            config.styles.forEach(css => {
                console.log(`${__dirname}/${css}`);
                fs.readFile(`${__dirname}/${css}`, "utf-8", function(error, data) {
                    win.webContents.insertCSS(data)
                })
            })
        });
    }
}

export interface WindowProps {
    events: { [key: string]: () => void }
}
