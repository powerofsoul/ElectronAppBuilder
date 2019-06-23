import { BrowserWindow } from 'electron';
const fs = require("fs");

import config from "./config.js";

export class Window{
    private _viewPath: string;
    private _model;
    constructor(viewPath: string, model) {
        this._viewPath = `file://${__dirname}/${viewPath}`;
        this._model = model;
    }

    loadViewModel = `
        let $ = require('jquery')
        var electron = require('electron');
        const viewModel = electron.remote.getCurrentWindow().viewModel;

        //Make each field update viewmodel variables
        $('[bind]').each(function(){
            let attr = $(this).attr('bind');
            
            if($(this).is('input')){
                $(this).val(viewModel[attr]);
                $(this).on('change', ()=>{
                    let value = $(this).val();
                    if(!isNaN(value)){
                        value = parseInt(value);
                    }

                    viewModel[attr] = value;
                }); 

                viewModel.registerListener(attr, ()=>{
                    $(this).val(viewModel[attr]);
                })
            }
            else if($(this).is("span") || $(this).is("p")){
                $(this).text(viewModel[attr]);
            }else{
                $(this).html(viewModel[attr]);
            }
        })
   `

    public show(){    
        let win:any =  new BrowserWindow({
            webPreferences: {
                nodeIntegration: true
            }
        });

        win.viewModel = this._model;
        win.loadURL(this._viewPath);
        

        win.webContents.on('did-finish-load', function() {
            config.styles.forEach(css => {
                console.log(`${__dirname}/${css}`);
                fs.readFile(`${__dirname}/${css}`, "utf-8", function(error, data) {
                    win.webContents.insertCSS(data)
                })
            })
        });
       
        //Injecting ViewModel into current view
        win.webContents.executeJavaScript(this.loadViewModel);
    }
}