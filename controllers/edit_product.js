var guardar = document.getElementById('guardar');
var cancelar = document.getElementById('cancelar');

guardar.addEventListener('click', cerrar);
cancelar.addEventListener('click', cerrar);

function cerrar(){
    window.comunication.cerrarEditar();
}

window.comunication.recibirItem(function(event, args){
    document.querySelectorAll('.form-control').forEach(item => {
        if(item.id == 'code'){
            item.value = args.code;
        }else if(item.id == 'name'){
            item.value = args.name;
        }else if(item.id == 'description'){
            item.value = args.description;
        }else if(item.id == 'category'){
            item.value = args.category;
        }else if(item.id == 'quantity'){
            item.value = args.quantity;
        }
    })
});

