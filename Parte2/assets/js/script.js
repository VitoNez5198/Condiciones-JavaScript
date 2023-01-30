const verificar = () => {
    const cant1 = document.querySelector('#cantidad_1').value ;
    const cant2 = document.querySelector('#cantidad_2').value ;
    const cant3 = document.querySelector('#cantidad_3').value ;

    const total = parseInt(cant1) + parseInt(cant2) + parseInt(cant3);
    const respuesta = document.querySelector('#respuesta')

    if(total <= 10){
        respuesta.innerHTML = 'Llevas ' + total + ' stickers.';
    } else {
        respuesta.innerHTML = 'Llevas demasiados stickers.';
    }
}