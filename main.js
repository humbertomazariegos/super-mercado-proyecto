// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')

//[DECLARACION DE LAS VENTANAS A UTILIZAR]
let ventana;
let index;
let edit_product;
let order_product;

function initWindow(){
  ventana = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });
  ventana.loadFile('index.html')
}

function secondWindow(){
  index = new BrowserWindow({
    parent: ventana,
    modal: true,
    show: true,
    width: 1000,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });
  index.loadFile('views/index.html')
}

function thirdWindow(){
  edit_product = new BrowserWindow({
    parent: ventana,
    modal: true,
    show: true,
    width: 400,
    height: 650,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });
  edit_product.loadFile('views/edit_product.html')
}

function fourWindow(){
  order_product = new BrowserWindow({
    parent: ventana,
    modal: true,
    show: true,
    width: 400,
    height: 650,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });
  order_product.loadFile('views/order.html')
}

//[COMUNICACION DE LOGIN PARA INDEX DE PRODUCTOS]
ipcMain.on('registroValido', function(event,args){
  secondWindow();
  index.webContents.on('did-finish-load', function(){
    index.webContents.send('inicioCorrecto', args);
  })
});

//[COMUNICACION PARA EDITAR PRODUCTO]
ipcMain.on('editarItem', function(event,args){
  thirdWindow();
  edit_product.webContents.on('did-finish-load', function(){
    edit_product.webContents.send('recibirItem', args);
  })
});
ipcMain.on('cerrarEditar', function(){
  edit_product.hide();
});


//[COMUNICACION PARA EDITAR PRODUCTO]
ipcMain.on('pedidoItem', function(event,args){
  fourWindow();
  order_product.webContents.on('did-finish-load', function(){
    order_product.webContents.send('recibirItemPedido', args);
  })
});
ipcMain.on('cerrarPedido', function(){
  order_product.hide();
});

app.whenReady().then(() => {
  initWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) initWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})