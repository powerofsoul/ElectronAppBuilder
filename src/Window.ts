import { BrowserWindow } from 'electron';
const fs = require("fs");
import config from "./config.js";
import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

export class Window{
    private component: string;
    private _model;

    constructor(component: React.Component) {
        this.component = component;
    }

    public show(){    
        let win:any =  new BrowserWindow({
            webPreferences: {
                nodeIntegration: true
            }
        });

        const renderedComponent = ReactDOMServer.renderToString(React.createElement(this.component, {}, null));

        win.loadURL('data:text/html;charset=UTF-8,' + encodeURIComponent(renderedComponent));
        
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