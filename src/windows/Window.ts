import { BrowserWindow } from 'electron';
const fs = require("fs");
import config from "../config.js";

export class Window{
    private componentPath: string;
    protected win:any = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });;

    constructor(componentPath) {
        this.componentPath = componentPath.replace(/\\/g, "\\\\");  
    }

    public hide = () => {
        this.win.close();
    }

    public show = () => {    
        this.win.loadURL('data:text/html;charset=UTF-8,' + encodeURIComponent("<html><body><div id='view'></body></html>"), {
            baseURLForDataURL: `file://${__dirname}/app/`
        })

        this.win.viewModel = this;

        this.win.webContents.executeJavaScript(`
            const React = require('react');
            const ReactDom = require('react-dom');
            const Component = require('${this.componentPath}').default;
            const electron = require('electron');

            const viewModel = electron.remote.getCurrentWindow().viewModel;

            ReactDom.render(React.createElement(Component, {viewModel: viewModel}, null), document.getElementById('view'));
        `);

        var that = this;
        this.win.webContents.on('did-finish-load', function() {
            config.styles.forEach(css => {
                fs.readFile(css, "utf-8", function(error, data) {
                    that.win.webContents.insertCSS(data)
                })
            })
        });
    }
}

export interface WindowProps {
    viewModel: any;
}
