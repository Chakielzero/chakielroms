// Lista de juegos
const juegos = [
    {
        id: "Adventure Time Explore the Dungeon Because I Don't Know!",
        imgSrc: "assets/img/horadeaventura.jpg",
        altText: "Adventure Time Explore the Dungeon Because I Don't Know!",
        title: "Adventure Time Explore the Dungeon Because I Don't Know! (EU) (v16).wua",
        downloadLink: "https://ouo.io/p4yHLO",
        downloadLink2: "https://ouo.io/qX2N5V" // Segundo enlace de descarga

    },
    {
        id: "Adventure Time Finn and Jake Investigations",
        imgSrc: "assets/img/horadeaventurainvestigations.jpg",
        altText: "Adventure Time Finn and Jake Investigations",
        title: "Adventure Time Finn and Jake Investigations (USA) (DLC) (v16).wua",
        downloadLink: "https://ouo.io/3jgvcs",
        downloadLink2: "https://ouo.io/5fAgSwt" // Segundo enlace de descarga


    },
    {
        id: "BAYONETTA 2",
        imgSrc: "assets/img/bayonetta2.jpg",
        altText: "BAYONETTA 2",
        title: "BAYONETTA 2 (EU).wua",
        downloadLink: "https://ouo.io/Lo6jEmX",
        downloadLink2: "OTRO ENLACE AQUI" // Segundo enlace de descarga

    },
    {
        id: "BEN 10 OMNIVERSE 2",
        imgSrc: "assets/img/ben10omniverse2.jpg",
        altText: "BEN 10 OMNIVERSE 2",
        title: "BEN 10 OMNIVERSE 2 (USA).wua",
        downloadLink: "https://ouo.io/xOvkjP",
        downloadLink2: "https://ouo.io/sAfC0fr" // Segundo enlace de descarga

    },
    {
        id: "Call of Duty Black Ops II",
        imgSrc: "assets/img/codblackops2.jpg",
        altText: "Call of Duty Black Ops II",
        title: "Call of Duty Black Ops II (EU).wua",
        downloadLink: "https://www.ejemplo.com",
        downloadLink2: "https://ouo.io/NIsdKs" // Segundo enlace de descarga

    },
    {
        id: "Captain Toad Treasure Tracker",
        imgSrc: "assets/img/capitaintoad.jpg",
        altText: "Captain Toad Treasure Tracker",
        title: "Captain Toad Treasure Tracker (EE.UU.) (v16).wua",
        downloadLink: "https://ouo.io/4TeKNJa",
        downloadLink2: "OTRO ENLACE AQUI" // Segundo enlace de descarga

    },
    {
        id: "Cars 3 Driven to Win",
        imgSrc: "assets/img/cars3.jpg",
        altText: "Cars 3 Driven to Win",
        title: "Cars 3 Driven to Win (USA) (v16).wua",
        downloadLink: "https://ouo.io/tMrfVM",
        downloadLink2: "OTRO ENLACE AQUI" // Segundo enlace de descarga

    },
    {
        id: "Darksiders",
        imgSrc: "assets/img/darksiders.jpg",
        altText: "Darksiders",
        title: "Darksiders (US).wua",
        downloadLink: "https://ouo.io/bd1fDkS",
        downloadLink2: "OTRO ENLACE AQUI" // Segundo enlace de descarga

    },
    {
        id: "Darksiders II",
        imgSrc: "assets/img/darksiders2.jpg",
        altText: "Darksiders II",
        title: "Darksiders II (US).wua",
        downloadLink: "https://ouo.io/Ykv9yo",
        downloadLink2: "OTRO ENLACE AQUI" // Segundo enlace de descarga

    },
    {
        id: "Disney Epic Mickey 2",
        imgSrc: "assets/img/disneyepicmickey2.jpg",
        altText: "Disney Epic Mickey 2",
        title: "Disney Epic Mickey 2 (USA).wua",
        downloadLink: "https://ouo.io/WvOk3a",
        downloadLink2: "OTRO ENLACE AQUI" // Segundo enlace de descarga

    },
    {
        id: "Donkey kong tropical freeze",
        imgSrc: "assets/img/donkeykongtf.jpg",
        altText: "Donkey Kong Tropical Freeze",
        title: "DKC Tropical Freeze (US).wua",
        downloadLink: "https://ouo.io/1lFwT1",
        downloadLink2: "OTRO ENLACE AQUI" // Segundo enlace de descarga

    },
    {
        id: "Ducktales Remastered",
        imgSrc: "assets/img/ducktales.jpg",
        altText: "Ducktales Remastered",
        title: "DuckTales Remastered (US) (v32).wua",
        downloadLink: "https://ouo.io/a6Fuixy",
        downloadLink2: "https://ouo.io/IZ9QlD0" // Segundo enlace de descarga

    },
    {
        id: "F1 race stars powered up edition",
        imgSrc: "assets/img/f1racestars.jpg",
        altText: "F1 RACE STARS - POWERED UP EDITION",
        title: "F1 RACE STARS - POWERED UP EDITION (USA).wua",
        downloadLink: "https://ouo.io/3tAWiO",
        downloadLink2: "OTRO ENLACE AQUI" // Segundo enlace de descarga

    },
    {
        id: "Fast racing neo",
        imgSrc: "assets/img/fastracing.jpg",
        altText: "Fast Racing Neo",
        title: "FAST Racing NEO (USA) (DLC) (v65).wua",
        downloadLink: "https://ouo.io/L6N9XA",
        downloadLink2: "OTRO ENLACE AQUI" // Segundo enlace de descarga

    },
    {
        id: "Injustice Gods Among Us",
        imgSrc: "assets/img/injustice.jpg",
        altText: "Injustice Gods Among Us",
        title: "Injustice Gods Among Us (EU) (v16).wua",
        downloadLink: "https://ouo.io/i8Slsm",
        downloadLink2: "OTRO ENLACE AQUI" // Segundo enlace de descarga

    },
    {
        id: "Lego Marvels Avengers",
        imgSrc: "assets/img/legoavengers.jpg",
        altText: "Lego Marvels Avengers",
        title: "LEGO MARVEL's Avengers (USA) (DLC) (v64).wua",
        downloadLink: "https://www.ejemplo.com",
        downloadLink2: "OTRO ENLACE AQUI" // Segundo enlace de descarga

    },
    {
        id: "Mario y sonic sochi 2014",
        imgSrc: "assets/img/marioysonicsochi2014.jpg",
        altText: "Mario y sonic sochi 2014",
        title: "MARIO & SONIC SOCHI 2014 (EU) (v32).wua",
        downloadLink: "https://www.ejemplo.com",
        downloadLink2: "OTRO ENLACE AQUI" // Segundo enlace de descarga

    },
    {
        id: "Mario Kart 8",
        imgSrc: "assets/img/mariokart8.jpg",
        altText: "Mario Kart 8",
        title: "MARIO KART 8 (US) (v64).wua",
        downloadLink: "https://ouo.io/bq6qnC",
        downloadLink2: "https://ouo.io/tlKhrl" // Segundo enlace de descarga

    },
    {
        id: "Mario Party 10",
        imgSrc: "assets/img/marioparty10.jpg",
        altText: "Mario Party 10",
        title: "Mario Party 10 (USA) (v16).wua",
        downloadLink: "jj",
        downloadLink2: "https://ouo.io/I2WZFR2" // Segundo enlace de descarga

    },
    {
        id: "Mario Tennis Ultra Smash",
        imgSrc: "assets/img/mariotennisultrasmash.jpg",
        altText: "Mario Tennis Ultra Smash",
        title: "Mario Tennis - Ultra Smash (USA) (En,Fr,Es).wux",
        downloadLink: "https://ouo.io/AxswF7",
        downloadLink2: "https://ouo.io/w9KfdcZ" // Segundo enlace de descarga

    },
    {
        id: "Need for Speed Most Wanted U",
        imgSrc: "assets/img/nfsmw2012.jpg",
        altText: "Need for Speed Most Wanted U",
        title: "Need for Speed Most Wanted U (USA) (v32).wua",
        downloadLink: "https://ouo.io/j8JguJ",
        downloadLink2: "https://ouo.io/ys5S3u" // Segundo enlace de descarga

    },
    {
        id: "New Super Mario Bros U",
        imgSrc: "assets/img/nsmbu.jpg",
        altText: "New Super Mario Bros U",
        title: "New SUPER MARIO BROS. U (USA) (DLC) (v64).wua",
        downloadLink: "https://ouo.io/fO8BMS",
        downloadLink2: "https://ouo.io/pvzk9b" // Segundo enlace de descarga

    },
    {
        id: "Ninja Gaiden 3",
        imgSrc: "assets/img/ninjagaiden3.jpg",
        altText: "Ninja Gaiden 3",
        title: "NINJA GAIDEN 3 Razor's Edge (US) (v80).wua",
        downloadLink: "jjj",
        downloadLink2: "OTRO ENLACE AQUI" // Segundo enlace de descarga

    },
    {
        id: "ONE PIECE Unlimited World Red",
        imgSrc: "assets/img/onepieceworldred.jpg",
        altText: "ONE PIECE Unlimited World Red",
        title: "ONE PIECE Unlimited World Red (US).wua",
        downloadLink: "https://www.ejemplo.com",
        downloadLink2: "OTRO ENLACE AQUI" // Segundo enlace de descarga

    },
    {
        id: "PAPER MARIO Color Splash",
        imgSrc: "assets/img/papercolorsplash.jpg",
        altText: "PAPER MARIO Color Splash",
        title: "PAPER MARIO Color Splash (USA).wua",
        downloadLink: "jjj",
        downloadLink2: "OTRO ENLACE AQUI" // Segundo enlace de descarga

    },
    {
        id: "Penguins of Madagascar",
        imgSrc: "assets/img/pinguinosmadagascar.jpg",
        altText: "Penguins of Madagascar",
        title: "Penguins of Madagascar (USA).wua",
        downloadLink: "https://ouo.io/H0UZ9M",
        downloadLink2: "OTRO ENLACE AQUI" // Segundo enlace de descarga

    },
    {
        id: "PIKMIN 3",
        imgSrc: "assets/img/pikmin3.jpg",
        altText: "PIKMIN 3",
        title: "PIKMIN 3 (USA) (DLC) (v96).wua",
        downloadLink: "jjj",
        downloadLink2: "OTRO ENLACE AQUI" // Segundo enlace de descarga

    },
    {
        id: "Pokémon Rumble U",
        imgSrc: "assets/img/pokemonrumbleu.jpg",
        altText: "Pokémon Rumble Ur",
        title: "Pokémon Rumble U (World).wua",
        downloadLink: "https://ouo.io/cJXdae3",
        downloadLink2: "OTRO ENLACE AQUI" // Segundo enlace de descarga

    },
    {
        id: "Pokemon Tournament",
        imgSrc: "assets/img/pokemontournament.jpg",
        altText: "Pokemon Tournament",
        title: "POKKÉN TOURNAMENT (USA) (v64).wua",
        downloadLink: "jjj",
        downloadLink2: "OTRO ENLACE AQUI" // Segundo enlace de descarga

    },
    {
        id: "Rayman Legends",
        imgSrc: "assets/img/raymanlegends.jpg",
        altText: "Rayman Legends",
        title: "Rayman Legends (USA).wua",
        downloadLink: "jjj",
        downloadLink2: "OTRO ENLACE AQUI" // Segundo enlace de descarga

    },
    {
        id: "SONIC LOST WORLD",
        imgSrc: "assets/img/soniclostworld.jpg",
        altText: "SONIC LOST WORLD",
        title: "SONIC LOST WORLD (USA) (DLC) (v48).wua",
        downloadLink: "jjj",
        downloadLink2: "OTRO ENLACE AQUI" // Segundo enlace de descarga

    },
    {
        id: "SpongeBob SquarePants Plankton's Robotic Revenge",
        imgSrc: "assets/img/SBRR.jpg",
        altText: "SpongeBob SquarePants: Plankton's Robotic Revenge",
        title: "SB Robotic Revenge (EU).wua",
        downloadLink: "https://ouo.io/EacDa9",
        downloadLink2: "https://ouo.io/0M81FDI" // Segundo enlace de descarga

    },
    {
        id: "SUPER MARIO 3D WORLD",
        imgSrc: "assets/img/sm3dworld.jpg",
        altText: "SUPER MARIO 3D WORLD",
        title: "SUPER MARIO 3D WORLD (US).wua",
        downloadLink: "https://ouo.io/fCuAEY",
        downloadLink2: "OTRO ENLACE AQUI" // Segundo enlace de descarga

    },
    {
        id: "Super Mario Maker",
        imgSrc: "assets/img/supermariomaker.jpg",
        altText: "Super Mario Maker",
        title: "Super Mario Maker (US) (v272).wua",
        downloadLink: "https://ouo.io/O35O5S",
        downloadLink2: "OTRO ENLACE AQUI" // Segundo enlace de descarga

    },
    {
        id: "TEKKEN TAG 2 Wii U EDITION",
        imgSrc: "assets/img/tekkentag2.jpg",
        altText: "TEKKEN TAG 2 Wii U EDITION",
        title: "TEKKEN TAG 2 Wii U EDITION (US) (v32).wua",
        downloadLink: "jjj",
        downloadLink2: "https://ouo.io/t25lhr" // Segundo enlace de descarga

    },
    {
        id: "The Binding of Isaac Rebirth",
        imgSrc: "assets/img/theboisaac.jpg",
        altText: "The Binding of Isaac Rebirth",
        title: "The Binding of Isaac Rebirth (US).wua",
        downloadLink: "https://ouo.io/eoCyDo",
        downloadLink2: "OTRO ENLACE AQUI" // Segundo enlace de descarga

    },
    {
        id: "The Legend of Zelda Breath of the Wild",
        imgSrc: "assets/img/thezeldabreathwild.jpg",
        altText: "The Legend of Zelda Breath of the Wild",
        title: "The Legend of Zelda - Breath of the Wild (US) (v208).wua",
        downloadLink: "https://ouo.io/ayYJTi",
        downloadLink2: "OTRO ENLACE AQUI" // Segundo enlace de descarga

    },
    {
        id: "The Legend of Zelda Hyrule Historia",
        imgSrc: "assets/img/thehyrulehistoria.jpg",
        altText: "The Legend of Zelda Hyrule Historia",
        title: "The Legend of Zelda - Hyrule Historia (USA).wua",
        downloadLink: "https://ouo.io/ioSTDm",
        downloadLink2: "https://ouo.io/X1e5jc" // Segundo enlace de descarga

    },
    {
        id: "The Legend of Zelda The Wind Waker HD",
        imgSrc: "assets/img/thewindwaker.jpg",
        altText: "The Legend of Zelda The Wind Waker HD",
        title: "The Legend of Zelda - The Wind Waker HD (USA).wua",
        downloadLink: "https://ouo.io/PPav1G",
        downloadLink2: "OTRO ENLACE AQUI" // Segundo enlace de descarga

    },
    {
        id: "Turbo Super Stunt Squad",
        imgSrc: "assets/img/turbo.jpg",
        altText: "Turbo Super Stunt Squad",
        title: "Turbo Super Stunt Squad (USA).wua",
        downloadLink: "https://ouo.io/BfPCZuj",
        downloadLink2: "https://ouo.io/b40ZYB" // Segundo enlace de descarga

    },
    {
        id: "Yoshi's Woolly World",
        imgSrc: "assets/img/yoshi.jpg",
        altText: "Yoshi's Woolly World",
        title: "Yoshi's Woolly World (USA) (v32).wua",
        downloadLink: "h",
        downloadLink2: "https://ouo.io/N5z4so" // Segundo enlace de descarga
    }
];

// Agregar todos los juegos al DOM
juegos.forEach(juego => {
    addGameToGallery(juego);
});
