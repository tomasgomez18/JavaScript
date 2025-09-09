


const productos =
[ { id: 1, nombre: "Laptop", precio: 1200, categoria: "tecnologia", stock: 15 },
{ id: 2, nombre: "Mouse", precio: 25, categoria: "tecnologia", stock: 0 },
{ id: 3, nombre: "Silla", precio: 150, categoria: "muebles", stock: 8 },
{ id: 4, nombre: "Monitor", precio: 300, categoria: "tecnologia", stock: 12 },
{ id: 5, nombre: "Teclado", precio: 45, categoria: "tecnologia", stock: 0 } ]
    
// Mostrar todos los productos que tienen stock disponible
const conStock = productos.filter(item => item.stock > 0);
console.log("Productos con stock:", conStock);

// Crear un array solo con los nombres y precios de los productos
const nombresYprecios = productos.map(item => ({ nombre: item.nombre, precio: item.precio }));
console.log("Nombres y precios:", nombresYprecios);

//Filtrar los productos de tecnología que tienen stock
const stockProduc = productos.filter (item => item.categoria ==='tecnologia' && item.stock > 0);
console.log("productos con stock de tecnologia:" , stockProduc);


/* Encontrar el producto llamado "Monitor" */ 

const monitor = productos.filter (item => item.nombre === "Monitor")
console.log(monitor)