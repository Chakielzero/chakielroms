// Lista de juegos
const juegos = [
    {
        id: "007 Legends",
        imgSrc: "assets/img/007legends.jpg",
        altText: "007 Legends",
        title: "007™ Legends (EU).wua",
        downloadLink2: "https://cuty.io/T4bzUh" // Segundo enlace de descarga
    },       
    {
        id: "ZombiU",
        imgSrc: "assets/img/zombiu.jpg",
        altText: "ZombiU",
        title: "ZombiU (USA) (v32).wua",
        downloadLink2: "https://cuty.io/kKSR088P" // Segundo enlace de descarga
    }
];

// Agregar todos los juegos al DOM
juegos.forEach(juego => {
    addGameToGallery(juego);
});
