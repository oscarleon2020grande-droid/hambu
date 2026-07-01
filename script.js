// ==================== PRODUCTOS ==================== 
const productos = [
    // HAMBURGUESAS
    {
        id: 1,
        nombre: "Hamburguesa Clásica",
        categoria: "hamburguesas",
        precio: 8.99,
        descripcion: "Pan, carne, lechuga, tomate y queso",
        icono: "🍔"
    },
    {
        id: 2,
        nombre: "Hamburguesa Doble",
        categoria: "hamburguesas",
        precio: 12.99,
        descripcion: "Dos carnes, queso, lechuga y tomate",
        icono: "🍔"
    },
    {
        id: 3,
        nombre: "Hamburguesa Bacon",
        categoria: "hamburguesas",
        precio: 10.99,
        descripcion: "Carne, bacon crujiente, queso y cebolla",
        icono: "🥓"
    },
    {
        id: 4,
        nombre: "Hamburguesa Picante",
        categoria: "hamburguesas",
        precio: 9.99,
        descripcion: "Carne, jalapeños, queso y salsa picante",
        icono: "🌶️"
    },
    {
        id: 5,
        nombre: "Hamburguesa Gourmet",
        categoria: "hamburguesas",
        precio: 14.99,
        descripcion: "Carne premium, queso azul, cebolla caramelizada",
        icono: "👑"
    },
    {
        id: 6,
        nombre: "Hamburguesa Vegetariana",
        categoria: "hamburguesas",
        precio: 8.99,
        descripcion: "Medallón vegetal, lechuga, tomate y aguacate",
        icono: "🥬"
    },
    {
        id: 7,
        nombre: "Hamburguesa BBQ",
        categoria: "hamburguesas",
        precio: 11.99,
        descripcion: "Carne, salsa BBQ, cebolla y queso cheddar",
        icono: "🔥"
    },
    {
        id: 8,
        nombre: "Hamburguesa Champiñones",
        categoria: "hamburguesas",
        precio: 10.99,
        descripcion: "Carne, champiñones salteados y queso suizo",
        icono: "🍄"
    },

    // ACOMPAÑAMIENTOS
    {
        id: 9,
        nombre: "Papas Fritas",
        categoria: "acompañamientos",
        precio: 3.99,
        descripcion: "Papas crujientes y doradas",
        icono: "🍟"
    },
    {
        id: 10,
        nombre: "Papas Cheddar",
        categoria: "acompañamientos",
        precio: 5.99,
        descripcion: "Papas con salsa de queso cheddar",
        icono: "🧀"
    },
    {
        id: 11,
        nombre: "Aros de Cebolla",
        categoria: "acompañamientos",
        precio: 4.99,
        descripcion: "Aros de cebolla rebozados y fritos",
        icono: "🧅"
    },
    {
        id: 12,
        nombre: "Alitas de Pollo",
        categoria: "acompañamientos",
        precio: 6.99,
        descripcion: "6 alitas de pollo con salsa BBQ",
        icono: "🍗"
    },
    {
        id: 13,
        nombre: "Papas Picantes",
        categoria: "acompañamientos",
        precio: 4.99,
        descripcion: "Papas con especias picantes",
        icono: "🌶️"
    },
    {
        id: 14,
        nombre: "Nuggets de Pollo",
        categoria: "acompañamientos",
        precio: 5.99,
        descripcion: "8 nuggets crujientes de pollo",
        icono: "🍗"
    },

    // BEBIDAS
    {
        id: 15,
        nombre: "Refresco Pequeño",
        categoria: "bebidas",
        precio: 2.49,
        descripcion: "Coca-Cola, Sprite o Fanta (350ml)",
        icono: "🥤"
    },
    {
        id: 16,
        nombre: "Refresco Grande",
        categoria: "bebidas",
        precio: 3.49,
        descripcion: "Coca-Cola, Sprite o Fanta (600ml)",
        icono: "🥤"
    },
    {
        id: 17,
        nombre: "Jugo Natural",
        categoria: "bebidas",
        precio: 3.99,
        descripcion: "Naranja, manzana o piña recién exprimido",
        icono: "🧃"
    },
    {
        id: 18,
        nombre: "Batido de Chocolate",
        categoria: "bebidas",
        precio: 4.99,
        descripcion: "Batido cremoso de chocolate con leche",
        icono: "🥛"
    },
    {
        id: 19,
        nombre: "Cerveza Artesanal",
        categoria: "bebidas",
        precio: 5.99,
        descripcion: "Selección de cervezas artesanales",
        icono: "🍺"
    },
    {
        id: 20,
        nombre: "Agua Mineral",
        categoria: "bebidas",
        precio: 1.99,
        descripcion: "Agua mineral con o sin gas",
        icono: "💧"
    },

    // POSTRES
    {
        id: 21,
        nombre: "Helado Sundae",
        categoria: "postres",
        precio: 4.99,
        descripcion: "Helado con chocolate, frutos secos y crema",
        icono: "🍨"
    },
    {
        id: 22,
        nombre: "Brownie",
        categoria: "postres",
        precio: 3.99,
        descripcion: "Brownie de chocolate casero",
        icono: "🍫"
    },
    {
        id: 23,
        nombre: "Cheesecake",
        categoria: "postres",
        precio: 5.99,
        descripcion: "Delicioso cheesecake con frutos rojos",
        icono: "🍰"
    },
    {
        id: 24,
        nombre: "Donas",
        categoria: "postres",
        precio: 4.49,
        descripcion: "3 donas variadas con glaseado",
        icono: "🍩"
    },
    {
        id: 25,
        nombre: "Flan Casero",
        categoria: "postres",
        precio: 3.99,
        descripcion: "Flan tradicional con caramelo",
        icono: "🍮"
    },
    {
        id: 26,
        nombre: "Tiramisú",
        categoria: "postres",
        precio: 5.99,
        descripcion: "Tiramisú italiano auténtico",
        icono: "🎂"
    }
];

// ==================== CARRITO ==================== 
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// ==================== ELEMENTOS DEL DOM ==================== 
const cartIcon = document.getElementById('cartIcon');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const overlay = document.getElementById('overlay');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const productosGrid = document.getElementById('productosGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const notification = document.getElementById('notification');
const checkoutBtn = document.getElementById('checkoutBtn');
const verMenuBtn = document.getElementById('verMenuBtn');
const llamarBtn = document.getElementById('llamarBtn');
const paymentModal = document.getElementById('paymentModal');
const successModal = document.getElementById('successModal');
const paymentForm = document.getElementById('paymentForm');
const closeModal = document.getElementById('closeModal');
const closeSuccessBtn = document.getElementById('closeSuccessBtn');
const paymentMethodInputs = document.querySelectorAll('input[name="paymentMethod"]');
const cardSection = document.getElementById('cardSection');
const formularioContacto = document.getElementById('formularioContacto');

// ==================== FUNCIONES CARRITO ==================== 
function abrirCarrito() {
    cartSidebar.classList.add('active');
    overlay.classList.add('active');
}

function cerrarCarrito() {
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
}

function actualizarCarrito() {
    // Actualizar contador
    cartCount.textContent = carrito.reduce((total, item) => total + item.cantidad, 0);

    // Actualizar items
    if (carrito.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Tu carrito está vacío</p>';
    } else {
        cartItems.innerHTML = carrito.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">${item.icono}</div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.nombre}</div>
                    <div class="cart-item-price">$${(item.precio * item.cantidad).toFixed(2)}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="cambiarCantidad(${item.id}, -1)">-</button>
                        <span>${item.cantidad}</span>
                        <button class="quantity-btn" onclick="cambiarCantidad(${item.id}, 1)">+</button>
                        <button class="remove-item" onclick="eliminarDelCarrito(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Actualizar total
    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;

    // Guardar en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    const itemExistente = carrito.find(item => item.id === id);

    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        carrito.push({
            ...producto,
            cantidad: 1
        });
    }

    actualizarCarrito();
    mostrarNotificacion(`${producto.nombre} agregado al carrito`);
}

function cambiarCantidad(id, cambio) {
    const item = carrito.find(item => item.id === id);
    if (item) {
        item.cantidad += cambio;
        if (item.cantidad <= 0) {
            eliminarDelCarrito(id);
        } else {
            actualizarCarrito();
        }
    }
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    actualizarCarrito();
}

function mostrarNotificacion(mensaje) {
    const notificationText = document.getElementById('notificationText');
    notificationText.textContent = mensaje;
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// ==================== RENDERIZAR PRODUCTOS ==================== 
function renderizarProductos(productosAMostrar = productos) {
    productosGrid.innerHTML = productosAMostrar.map(producto => `
        <div class="producto-card">
            <div class="producto-imagen">
                ${producto.icono}
            </div>
            <div class="producto-info">
                <div class="producto-categoria">${producto.categoria}</div>
                <h3 class="producto-nombre">${producto.nombre}</h3>
                <p class="producto-descripcion">${producto.descripcion}</p>
                <div class="producto-precio">$${producto.precio.toFixed(2)}</div>
                <button class="btn-agregar" onclick="agregarAlCarrito(${producto.id})">
                    <i class="fas fa-shopping-cart"></i> Agregar
                </button>
            </div>
        </div>
    `).join('');
}

// ==================== FILTROS ==================== 
function filtrarProductos() {
    const filtroActivo = document.querySelector('.filter-btn.active').dataset.filter;

    let productosFiltrados = productos;

    if (filtroActivo !== 'todos') {
        productosFiltrados = productosFiltrados.filter(p => p.categoria === filtroActivo);
    }

    renderizarProductos(productosFiltrados);
}

// Event listeners para filtros
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filtrarProductos();
    });
});

// ==================== MENÚ HAMBURGUESA ==================== 
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Cerrar menú al hacer click en un link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// ==================== CARRITO ==================== 
cartIcon.addEventListener('click', abrirCarrito);
closeCart.addEventListener('click', cerrarCarrito);
overlay.addEventListener('click', cerrarCarrito);

// ==================== BOTONES HERO ==================== 
verMenuBtn.addEventListener('click', () => {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
});

llamarBtn.addEventListener('click', () => {
    window.location.href = 'tel:+15551234567';
});

// ==================== MODAL DE PAGO ==================== 
checkoutBtn.addEventListener('click', () => {
    if (carrito.length === 0) {
        mostrarNotificacion('Tu carrito está vacío');
        return;
    }

    // Mostrar resumen del pedido
    const orderItems = document.getElementById('orderItems');
    orderItems.innerHTML = carrito.map(item => `
        <div class="summary-item">
            <span>${item.nombre} x${item.cantidad}</span>
            <span>$${(item.precio * item.cantidad).toFixed(2)}</span>
        </div>
    `).join('');

    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    document.getElementById('totalPagar').textContent = `$${total.toFixed(2)}`;

    paymentModal.classList.add('active');
    cerrarCarrito();
});

closeModal.addEventListener('click', () => {
    paymentModal.classList.remove('active');
});

// ==================== MÉTODOS DE PAGO ==================== 
paymentMethodInputs.forEach(input => {
    input.addEventListener('change', () => {
        if (input.value === 'tarjeta') {
            cardSection.style.display = 'block';
        } else {
            cardSection.style.display = 'none';
        }
    });
});

// ==================== VALIDACIÓN FORMULARIO ==================== 
function validarFormulario() {
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const telefono = document.getElementById('telefono');
    const direccion = document.getElementById('direccion');
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

    let esValido = true;

    // Validar nombre
    if (nombre.value.trim().length < 3) {
        mostrarError('nombre', 'El nombre debe tener al menos 3 caracteres');
        esValido = false;
    } else {
        limpiarError('nombre');
    }

    // Validar email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email.value)) {
        mostrarError('email', 'Por favor ingresa un email válido');
        esValido = false;
    } else {
        limpiarError('email');
    }

    // Validar teléfono
    if (!/^\d{7,}$/.test(telefono.value.replace(/\D/g, ''))) {
        mostrarError('telefono', 'Por favor ingresa un teléfono válido');
        esValido = false;
    } else {
        limpiarError('telefono');
    }

    // Validar dirección
    if (direccion.value.trim().length < 5) {
        mostrarError('direccion', 'Por favor ingresa una dirección válida');
        esValido = false;
    } else {
        limpiarError('direccion');
    }

    // Validar tarjeta si es necesario
    if (paymentMethod === 'tarjeta') {
        if (!validarTarjeta()) {
            esValido = false;
        }
    }

    return esValido;
}

function validarTarjeta() {
    const cardNumber = document.getElementById('cardNumber');
    const cardExpiry = document.getElementById('cardExpiry');
    const cardCVC = document.getElementById('cardCVC');

    let esValido = true;

    // Validar número de tarjeta
    const numeroLimpio = cardNumber.value.replace(/\s/g, '');
    if (!/^\d{16}$/.test(numeroLimpio)) {
        mostrarError('cardNumber', 'Ingresa un número de tarjeta válido (16 dígitos)');
        esValido = false;
    } else {
        limpiarError('cardNumber');
    }

    // Validar vencimiento
    if (!/^\d{2}\/\d{2}$/.test(cardExpiry.value)) {
        mostrarError('cardExpiry', 'Formato: MM/YY');
        esValido = false;
    } else {
        limpiarError('cardExpiry');
    }

    // Validar CVC
    if (!/^\d{3}$/.test(cardCVC.value)) {
        mostrarError('cardCVC', 'Ingresa un CVC válido (3 dígitos)');
        esValido = false;
    } else {
        limpiarError('cardCVC');
    }

    return esValido;
}

function mostrarError(campo, mensaje) {
    const input = document.getElementById(campo);
    const errorElement = document.getElementById(`error${campo.charAt(0).toUpperCase() + campo.slice(1)}`);
    input.classList.add('error');
    errorElement.textContent = mensaje;
}

function limpiarError(campo) {
    const input = document.getElementById(campo);
    const errorElement = document.getElementById(`error${campo.charAt(0).toUpperCase() + campo.slice(1)}`);
    input.classList.remove('error');
    errorElement.textContent = '';
}

// ==================== ENVÍO DEL FORMULARIO DE PAGO ==================== 
paymentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validarFormulario()) {
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const direccion = document.getElementById('direccion').value;
        const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

        // Crear objeto del pedido
        const pedido = {
            id: Math.random().toString(36).substr(2, 9),
            nombre,
            email,
            telefono,
            direccion,
            metodo: paymentMethod,
            items: carrito,
            total: carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0),
            fecha: new Date().toLocaleString('es-ES')
        };

        // Guardar pedido en localStorage
        let pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
        pedidos.push(pedido);
        localStorage.setItem('pedidos', JSON.stringify(pedidos));

        // Mostrar modal de éxito
        mostrarExito(pedido);

        // Limpiar carrito
        carrito = [];
        actualizarCarrito();
        paymentForm.reset();
        paymentModal.classList.remove('active');
    }
});

function mostrarExito(pedido) {
    const successMessage = document.getElementById('successMessage');
    const successDetails = document.getElementById('successDetails');

    successMessage.textContent = `Tu pedido #${pedido.id} ha sido confirmado. Te contactaremos pronto.`;

    successDetails.innerHTML = `
        <p><strong>Nombre:</strong> ${pedido.nombre}</p>
        <p><strong>Email:</strong> ${pedido.email}</p>
        <p><strong>Teléfono:</strong> ${pedido.telefono}</p>
        <p><strong>Dirección:</strong> ${pedido.direccion}</p>
        <p><strong>Método de Pago:</strong> ${pedido.metodo}</p>
        <p><strong>Total:</strong> $${pedido.total.toFixed(2)}</p>
        <p><strong>Fecha:</strong> ${pedido.fecha}</p>
    `;

    successModal.classList.add('active');
}

closeSuccessBtn.addEventListener('click', () => {
    successModal.classList.remove('active');
    window.scrollTo(0, 0);
});

// ==================== FORMATEO DE TARJETA ==================== 
document.getElementById('cardNumber').addEventListener('input', (e) => {
    let value = e.target.value.replace(/\s/g, '');
    let formattedValue = value.replace(/(\d{4})/g, '$1 ').trim();
    e.target.value = formattedValue;
});

document.getElementById('cardExpiry').addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    e.target.value = value;
});

document.getElementById('cardCVC').addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 3);
});

// ==================== FORMULARIO DE CONTACTO ==================== 
function validarFormularioContacto() {
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const telefono = document.getElementById('telefono');
    const mensaje = document.getElementById('mensaje');

    let esValido = true;

    // Validar nombre
    if (nombre.value.trim().length < 3) {
        mostrarError('nombre', 'El nombre debe tener al menos 3 caracteres');
        esValido = false;
    } else {
        limpiarError('nombre');
    }

    // Validar email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email.value)) {
        mostrarError('email', 'Por favor ingresa un email válido');
        esValido = false;
    } else {
        limpiarError('email');
    }

    // Validar teléfono
    if (telefono.value && !/^\d{7,}$/.test(telefono.value.replace(/\D/g, ''))) {
        mostrarError('telefono', 'Por favor ingresa un teléfono válido');
        esValido = false;
    } else {
        limpiarError('telefono');
    }

    // Validar mensaje
    if (mensaje.value.trim().length < 10) {
        mostrarError('mensaje', 'El mensaje debe tener al menos 10 caracteres');
        esValido = false;
    } else {
        limpiarError('mensaje');
    }

    return esValido;
}

formularioContacto.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validarFormularioContacto()) {
        const nombre = document.getElementById('nombre').value;
        mostrarNotificacion(`¡Gracias ${nombre}! Tu mensaje ha sido enviado.`);
        formularioContacto.reset();
    }
});

// ==================== INICIALIZACIÓN ==================== 
document.addEventListener('DOMContentLoaded', () => {
    renderizarProductos();
    actualizarCarrito();
});

// Agregar animación fadeInUp al CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
