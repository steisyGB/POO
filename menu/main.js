class Menu {
    constructor(comida, bebida) {
        this.comida = comida;
        this.bebida = bebida;
    }
}

class Pedido {
    constructor(menu, cantidad) {
        this.menu = menu;
        this.cantidad = cantidad;
        this.estado = 'su pedido se esta cocinando';
    }
}

    const menu = new Menu(['Hamburguesas con papas ', 'Tacos de Birria', 'Nachos'], ['Jugo del Valle', 'Power', 'Coca-Cola']);

    let pedidoRealizado = false;
    let pedido;

    document.getElementById('ordenar').addEventListener('click', () => {
    if (!pedidoRealizado) {
        
        const comidaS = document.getElementById('opcionesC').value;

        const cantidadComida = document.getElementById('cantidadC').value;

        const bebidaS = document.getElementById('opcionesB').value;

        const cantidadBebida = document.getElementById('cantidadB').value;

        const menuS = new Menu(comidaS, bebidaS);

        pedido = new Pedido(menuS, `Cantidad: ${cantidadComida} ${comidaS}, ${cantidadBebida} ${bebidaS}`);

        pedidoRealizado = true;

        const pedidoDiv = document.createElement('div');

        pedidoDiv.innerHTML = `<p>${pedido.menu.comida}</p>
                            <p>${pedido.menu.bebida}</p>
                            <p>${pedido.cantidad}</p>
                            <p>Estado: ${pedido.estado}</p>`;
        document.querySelector('.cocina').appendChild(pedidoDiv);
    
    } else {
        alert('no se pueden realizar dos pedidos a la vez.');
    }
});

    document.getElementById('Listo').addEventListener('click', () => {
    if (pedidoRealizado) {
        pedido.estado = 'Su orden esta lista';
        const pedidoDiv = document.createElement('div');
        pedidoDiv.innerHTML = `<p>${pedido.menu.comida}</p>
                            <p>${pedido.menu.bebida}</p>
                            <p>${pedido.cantidad}</p>
                            <p>Estado: ${pedido.estado}</p>`;
        document.querySelector('.estado').appendChild(pedidoDiv);
    } else {
        alert('por favor realice el pedido.');
    }
});
