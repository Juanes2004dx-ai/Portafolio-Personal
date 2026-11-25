const botonMenu = document.getElementById("boton-menu");
const menu = document.getElementById("mi-lista");
// Abrir y cerrar el menú
botonMenu.addEventListener("click", function() {
    menu.classList.toggle("is-open");
    const estaAbierto = menu.classList.contains("is-open");
    botonMenu.setAttribute("aria-expanded", estaAbierto);
    botonMenu.setAttribute(
        "aria-label",
        estaAbierto ? "Cerrar menú" : "Abrir menú"
    );
});
// Cerrar el menú al seleccionar una opción
const enlaces = menu.querySelectorAll("a");
enlaces.forEach(function(enlace) {
    enlace.addEventListener("click", function() {
        menu.classList.remove("is-open");
        botonMenu.setAttribute("aria-expanded", "false");
        botonMenu.setAttribute("aria-label", "Abrir menú");
    });

});
const spa_mascotas = [
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHVkYjZtNHFsYnNieG53NW5wcW5oaXpmbXlsNXJxbm13aDhrbDMwNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Xeu98yGdKIKoo/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3Y2aHBwaHQ1YWoxNXV1ZTR2Y2dtdnFmaHQ0cGJpcG52OHNkb2M2aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/12flfdsNIb1QLSGqUG/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjNsc2IzajYzb2p4bzNpY2Jrd3ZzNno0cXdzZjRjY2ZucTk0NWhyeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iZuHIRDY6orDIcVnSq/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHUxa2Rza2w3YjhrMmxwMnZnYWx6cGFjZ2tucDEzMzdkZHIxeWsycSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cbAKfbbcC7D20/giphy.gif"
];
let img_1 = document.getElementById("imagenes_spa");
setInterval(()=>{
    let aleatorias_1 = Math.floor(Math.random() * spa_mascotas.length);
    img_1.src = spa_mascotas[aleatorias_1];
}, 6000);

const matematicas = [
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExczJwNjdldGpsbWI0cWcwbmdsOTh2dWE4bmo3dmlvcmJndGZ5bDJ5cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/u7NBX4OnKEPfCAtuGw/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTgwYnM2ZnQ5YW1vdHVnOXYweXhhbWk3endzb3htbGVka2dhbzNnNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cRHgphdnVZMtRLZlT1/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGdvbG94d2J5dWZheGFvcTBoaXRpZzhibG10NHJmd2phM2ozdjhoMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3fZLMbuCOqJ82gec/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGVtdXEzMjBnaHY5ZGwyMHdsenl0emQ1b3NqNmd4aDd1emNtYm93ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/limLsx6LAdBWgvf6fF/giphy.gif"
];
let img_2 = document.getElementById("imagenes_mate");
setInterval(()=>{
    let aleatorias_2 = Math.floor(Math.random() * matematicas.length);
    img_2.src = matematicas[aleatorias_2];
}, 6000);

const temas_dominados = [
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2pvaGVqdXYxbjZnenF2NGExMWp4ZHN1M2toZWJrdjA2aDN4bW1nYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KAq5w47R9rmTuvWOWa/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHd1MWllYWFyZ2t1aTc3YjM5bHQ1emdpNTFlMXdlMjNienQ1dmk1byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vISmwpBJUNYzukTnVx/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExazFpd3ZmN2JkZHlpMGxmdXdqMzlqZ3Myeng4eDJhNWV6YmtlbTdyOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UcK7JalnjCz0k/giphy.gif"
];
let img_3 = document.getElementById("dominadas");
setInterval(()=>{
    let aleatorias_3 = Math.floor(Math.random() * temas_dominados.length);
    img_3.src = temas_dominados[aleatorias_3];
}, 6000);

const temas_proceso = [
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWNxNmdraXFiMmJoamJ6cjY4a2Uzd3lkaWJ0c2pwY2JyODQwamF3bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SvFocn0wNMx0iv2rYz/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGtzcXN5b2JsbmFnejgwYTR6YzF0cTczYjVlMzZlN2VxaWU3NHEwcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3vRfNA1p0rvhMSvS/giphy.gif",
    "https://cdn-icons-gif.flaticon.com/17122/17122617.gif"
];
let img_4 = document.getElementById("proceso");
setInterval(()=>{
    let aleatorias_4 = Math.floor(Math.random() * temas_proceso.length);
    img_4.src = temas_proceso[aleatorias_4];
}, 6000);
