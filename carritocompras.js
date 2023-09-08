
class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    get_datos() {
        console.log("PRODUCTO");
        console.log("Nombre: ", this.nombre);
        console.log("Precio: ", this.precio);
        console.log("Stock: ", this.stock);
        console.log("");
    }

    get_stock() {
        return this.stock > 0;
    }

    update_stock(unidades) {
        if (this.stock >= unidades) {
            this.stock -= unidades; // Restar las unidades compradas del stock
            return true;
        } else {
            console.log("No hay suficiente stock");
            console.log("Stock disponible: ", this.stock);
            return false;
        }
    }
}

// Alta de productos desde el cliente
let listaProductos = [];

listaProductos.push(new Producto("Base de maquillaje en crema", 5000, 100));
listaProductos.push(new Producto("Rímel", 8000, 100));
listaProductos.push(new Producto("Base de maquillaje en polvo", 4000, 100));
listaProductos.push(new Producto("Delineador de ojos lápiz", 3000, 100));
listaProductos.push(new Producto("Labial mate", 2000, 100));

console.log("Lista de productos");

// Inicia el render de productos para mostrar los productos
for (let producto of listaProductos) {
    producto.get_datos();
}
// Fin del render de productos

// Simular compras de usuario
function buscarProducto(producto) {
    return producto.nombre === compraUsuario;
}
let compraUsuario = "";

while (compraUsuario !== "FIN") {
    compraUsuario = prompt("Ingresa el nombre del producto que deseas comprar");

    if (compraUsuario !== "FIN") {
        let resultado_find = listaProductos.find(buscarProducto);

        if (resultado_find !== undefined) {
            if (resultado_find.get_stock()) {
                // Tiene stock
                let unidades = parseInt(prompt("¿Cuántas unidades deseas comprar?"));

                if (resultado_find.update_stock(unidades)) {
                    console.log("Revista Agatha te agradece por tu compra");

                    for (let producto of listaProductos) {
                        if (producto.stock > 0) {
                            producto.get_datos();
                        }
                    }
                }
            } else {
                console.log("El producto no tiene stock disponible.");
            }
        } else {
            console.log("Producto no encontrado en la lista.");
        }
    }
}

