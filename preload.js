const {ipcRenderer, contextBridge} = require('electron');

contextBridge.exposeInMainWorld(
  'comunication',
  {
    registroValido: (datos) => ipcRenderer.send('registroValido', datos),
    inicioCorrecto: (callback) => ipcRenderer.on('inicioCorrecto', callback),

    editarItem: (datos) => ipcRenderer.send('editarItem', datos),
    recibirItem: (callback) => ipcRenderer.on('recibirItem', callback),
    cerrarEditar: () => ipcRenderer.send('cerrarEditar'),

    pedidoItem: (datos) => ipcRenderer.send('pedidoItem', datos),
    recibirItemPedido: (callback) => ipcRenderer.on('recibirItemPedido', callback),
    cerrarPedido: () => ipcRenderer.send('cerrarPedido'),
  }
)

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})
