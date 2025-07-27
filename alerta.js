let cart = []; //Aquí estamos creando una variable llamada cart (carrito en inglés). Es un arreglo (array) vacío al principio, donde vamos a ir guardando los productos que el usuario agregue cuando haga clic en un botón.

function addToCart(productName) {
  cart.push(productName); // Guardamos el nombre del producto
  updateCartCount();      // Actualizamos el número en el ícono
}


//Esta función se llama addToCart (agregar al carrito) y se activa cuando el usuario hace clic en el botón "Agregar al carrito".

//📦 Parámetro: productName

//Es el nombre del producto que estamos agregando (por ejemplo, "Producto 1").

//🛠 Dentro de la función:

//cart.push(productName);
//Esto agrega ese producto al final del arreglo cart.
//Ejemplo: si antes cart estaba vacío ([]), después de esto puede quedar así: ["Producto 1"].
//updateCartCount();
//Esta línea llama a otra función para actualizar el número del carrito visualmente.

function updateCartCount() {
  const countSpan = document.getElementById('cart-count');
  countSpan.textContent = cart.length;
}

// Cada vez que se agrega un producto, esta función actualiza el número que se muestra en el ícono del carrito.

// 🧩 Explicación línea por línea:

// const countSpan = document.getElementById('cart-count');
// Estamos buscando en el HTML el elemento que tiene el id="cart-count" (donde se muestra el número del carrito).
// Este es el span que contiene el número visible al usuario.
// countSpan.textContent = cart.length;
// Estamos cambiando el contenido del span para que muestre la cantidad de productos en el arreglo cart.
// cart.length te da el número total de productos guardados.