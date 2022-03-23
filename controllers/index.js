var data_items = document.getElementById('data-items');
window.comunication.inicioCorrecto(function(event, args){
    var items = '';
    args.forEach(element => {
        items += '<tr>\
        <td>'+element.code+'</td>\
        <td>'+element.name+'</td>\
        <td>'+element.description+'</td>\
        <td>'+element.category+'</td>\
        <td>'+element.quantity+'</td>\
        <td>\
            <button class="btn btn-warning text-white btn-edit" id="'+ element.code +'">Actualizar</button>\
            <button class="btn btn-primary btn-order" id="'+ element.code +'">Pedido</button>\
        </td>\
        </tr>';
    });
    data_items.innerHTML = items;

    document.querySelectorAll('.btn-edit').forEach(item => {
        item.addEventListener('click', event => {
            var id = event.target.id;
            var it = args.filter(item => item.code == id)[0];
            window.comunication.editarItem(it);
        })
    })

    document.querySelectorAll('.btn-order').forEach(item => {
        item.addEventListener('click', event => {
            var id = event.target.id;
            var it = args.filter(item => item.code == id)[0];
            window.comunication.pedidoItem(it);
        })
    })
});