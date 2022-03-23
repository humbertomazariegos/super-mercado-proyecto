var guardar = document.getElementById('guardar');
var cancelar = document.getElementById('cancelar');

guardar.addEventListener('click', cerrar);
cancelar.addEventListener('click', cerrar);

function cerrar(){
    window.comunication.cerrarPedido();
}

window.comunication.recibirItemPedido(function(event, args){
    document.querySelectorAll('.form-control').forEach(item => {
        if(item.id == 'code'){
            item.value = args.code;
        }else if(item.id == 'name'){
            item.value = args.name;
        }
    })
});