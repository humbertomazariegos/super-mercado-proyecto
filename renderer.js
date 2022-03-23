var btn_submit = document.getElementById('btn_submit');
btn_submit.addEventListener("click", validar);


//[REGISTROS DE EJEMPLO]
var data = [
    {
        'code': 1,
        'name': 'Desinfectante',
        'description': 'Desinfectante azul',
        'category': 'Limpieza',
        'quantity': 20,
    },
    {
        'code': 2,
        'name': 'Pañales',
        'description': 'Pañales Huggies',
        'category': 'Accesorios bebe',
        'quantity': 150,
    },
    {
        'code': 3,
        'name': 'Cereal de frutas',
        'description': 'Cereal de frutas 100grm',
        'category': 'Abarrotes',
        'quantity': 48,
    },
    {
        'code': 4,
        'name': 'Galón de leche entera',
        'description': 'Galón de leche entera Pino',
        'category': 'Lacteos',
        'quantity': 1122,
    },
    {
        'code': 5,
        'name': 'Servilletas',
        'description': 'Servilletas cuadradas',
        'category': 'Limpieza',
        'quantity': 2321,
    }
];

function validar(){
    window.comunication.registroValido(data);
}