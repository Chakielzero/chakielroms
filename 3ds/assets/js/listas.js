// Lista de juegos
const juegos = [
    {
        id: "Adventure Time - The Secret of the Nameless Kingdom",
        imgSrc: "assets/img/another.jpg",
        altText: "Adventure Time - The Secret of the Nameless Kingdom",
        title: "Adventure Time - The Secret of the Nameless Kingdom (Europe) (En).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Amazing Spider-Man, The",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Amazing Spider-Man, The",
        title: "Amazing Spider-Man, The (USA) (En,Fr,Es).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Amazing Spider-Man 2, The",
        imgSrc: "assets/img/another.jpg",
        altText: "Amazing Spider-Man 2, The",
        title: "Amazing Spider-Man 2, The (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        

    },       
    {
        id: "Angry Birds Trilogy",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Angry Birds Trilogy",
        title: "Angry Birds Trilogy (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KK" // Segundo enlace de descarga

    },       
    {
        id: "Animal Crossing - New Leaf",
        imgSrc: "assets/img/another.jpg",
        altText: "Animal Crossing - New Leaf",
        title: "Animal Crossing - New Leaf (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Asphalt 3D",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Asphalt 3D",
        title: "Asphalt 3D (USA) (En,Fr,Es).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Batman - Arkham Origins Blackgate",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Batman - Arkham Origins Blackgate",
        title: "Batman - Arkham Origins Blackgate (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Captain America - Super Soldier",
        imgSrc: "assets/img/another.jpg",
        altText: "Captain America - Super Soldier",
        title: "Captain America - Super Soldier (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Cars 2",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Cars 2",
        title: "Cars 2 (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Detective Pikachu",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Detective Pikachu",
        title: "Detective Pikachu (Europe) (En,Ja,Fr,De,Es,It,Zh).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Disney Epic Mickey - Power of Illusion",
        imgSrc: "assets/img/another.jpg",
        altText: "Disney Epic Mickey - Power of Illusion",
        title: "Disney Epic Mickey - Power of Illusion (USA) (En,Fr,Es,Pt).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Disney Planes",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Disney Planes",
        title: "Disney Planes (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Donkey Kong Country Returns 3D",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Donkey Kong Country Returns 3D",
        title: "Donkey Kong Country Returns 3D (USA) (En,Fr,Es).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Fusions",
        imgSrc: "assets/img/another.jpg",
        altText: "Dragon Ball Fusions",
        title: "Dragon Ball Fusions (USA).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Dragon Ball Z - Extreme Butoden",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Dragon Ball Z - Extreme Butoden",
        title: "Dragon Ball Z - Extreme Butoden.3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Quest VIII - Journey of the Cursed King",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Dragon Quest VIII - Journey of the Cursed King",
        title: "Dragon Quest VIII - Journey of the Cursed King (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Dream Trigger 3D",
        imgSrc: "assets/img/another.jpg",
        altText: "Dream Trigger 3D",
        title: "Dream Trigger 3D (Europe) (En,Fr,Es).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Driver - Renegade 3D",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Driver - Renegade 3D",
        title: "Driver - Renegade 3D (Europe) (En,Fr,De,Es,It,Nl,Pt,Sv,No,Da).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "F1 2011",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "F1 2011",
        title: "F1 2011 (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Farming Simulator 18",
        imgSrc: "assets/img/another.jpg",
        altText: "Farming Simulator 18",
        title: "Farming Simulator 18 (Europe) (En,Fr,De,Es,It,Pt,Pl,Ru).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Fast & Furious - Showdown",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Fast & Furious - Showdown",
        title: "Fast & Furious - Showdown (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "FIFA Soccer 12",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "FIFA Soccer 12.3ds",
        title: "FIFA Soccer 12 (USA) (En,Fr,Es).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "FIFA Soccer 13",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "FIFA Soccer 13",
        title: "FIFA Soccer 13 (USA) (En,Fr,Es).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "FIFA 14 - Legacy Edition",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "FIFA 14 - Legacy Edition",
        title: "FIFA 14 - Legacy Edition (Europe) (De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "FIFA 15 - Legacy Edition",
        imgSrc: "assets/img/another.jpg",
        altText: "FIFA 15 - Legacy Edition",
        title: "FIFA 15 - Legacy Edition (Europe) (De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Fire Emblem - Awakening",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Fire Emblem - Awakening",
        title: "Fire Emblem - Awakening (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Fire Emblem Echoes - Shadows of Valentia",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Fire Emblem Echoes - Shadows of Valentia",
        title: "Fire Emblem Echoes - Shadows of Valentia (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Fire Emblem Fates - Limited Edition",
        imgSrc: "assets/img/another.jpg",
        altText: "Fire Emblem Fates - Limited Edition",
        title: "Fire Emblem Fates - Limited Edition (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Gravity Falls - Legend of the Gnome Gemulets",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Gravity Falls - Legend of the Gnome Gemulets",
        title: "Gravity Falls - Legend of the Gnome Gemulets (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Green Lantern - Rise of the Manhunters",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Green Lantern - Rise of the Manhunters",
        title: "Green Lantern - Rise of the Manhunters (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Hey! Pikmin",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Hey! Pikmin",
        title: "Hey! Pikmin (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Hot Wheels - World's Best Driver",
        imgSrc: "assets/img/another.jpg",
        altText: "Hot Wheels - World's Best Driver",
        title: "Hot Wheels - World's Best Driver (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Hyrule Warriors Legends",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Hyrule Warriors Legends",
        title: "Hyrule Warriors Legends (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Kid Icarus - Uprising.3ds",
        imgSrc: "assets/img/another.jpg",
        altText: "Kid Icarus - Uprising.3ds",
        title: "Kid Icarus - Uprising.3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        

    },       
    {
        id: "Kingdom Hearts 3D - Dream Drop Distance",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Kingdom Hearts 3D - Dream Drop Distance",
        title: "Kingdom Hearts 3D - Dream Drop Distance (USA) (En,Fr).3ds",
        downloadLink2: "KK" // Segundo enlace de descarga

    },       
    {
        id: "Kirby - Planet Robobot",
        imgSrc: "assets/img/another.jpg",
        altText: "Kirby - Planet Robobot",
        title: "Kirby - Planet Robobot (Europe).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Kirby - Triple Deluxe",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Kirby - Triple Deluxe",
        title: "Kirby - Triple Deluxe (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Kirby Battle Royale",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Kirby Battle Royale",
        title: "Kirby Battle Royale (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Kirby's Extra Epic Yarn",
        imgSrc: "assets/img/another.jpg",
        altText: "Kirby's Extra Epic Yarn",
        title: "Kirby's Extra Epic Yarn (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Kung Fu Panda - Showdown of Legendary Legends",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Kung Fu Panda - Showdown of Legendary Legends",
        title: "Kung Fu Panda - Showdown of Legendary Legends (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Legend of Zelda, The - A Link Between Worlds",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Legend of Zelda, The - A Link Between Worlds",
        title: "Legend of Zelda, The - A Link Between Worlds (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Legend of Zelda, The - Tri Force Heroes",
        imgSrc: "assets/img/another.jpg",
        altText: "Legend of Zelda, The - Tri Force Heroes",
        title: "Legend of Zelda, The - Tri Force Heroes (USA) (En,Fr,Es).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "LEGO Batman 3 - Beyond Gotham",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "LEGO Batman 3 - Beyond Gotham",
        title: "LEGO Batman 3 - Beyond Gotham (Europe) (En,Fr,De,Es,It,Nl,Da).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "LEGO City Undercover - The Chase Begins",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "LEGO City Undercover - The Chase Begins",
        title: "LEGO City Undercover - The Chase Begins (Europe) (En,Fr,De,Es,It,Nl,Pt,Da,Ru).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "LEGO Jurassic World.3ds",
        imgSrc: "assets/img/another.jpg",
        altText: "LEGO Jurassic World.3ds",
        title: "LEGO Jurassic World (Spain).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "LEGO Legends of Chima - Laval's Journey",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "LEGO Legends of Chima - Laval's Journey",
        title: "LEGO Legends of Chima - Laval's Journey (Europe) (En,Fr,De,Es,It,Nl,Da).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "LEGO Marvel Super Heroes - Universe in Peril",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "LEGO Marvel Super Heroes - Universe in Peril",
        title: "LEGO Marvel Super Heroes - Universe in Peril (Europe) (En,Fr,De,Es,It,Nl,Da).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "LEGO Movie Videogame, The",
        imgSrc: "assets/img/another.jpg",
        altText: "LEGO Movie Videogame, The",
        title: "LEGO Movie Videogame, The (Europe) (En,Fr,Es,It,Nl,Da).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "LEGO Ninjago - Nindroids.3ds",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "LEGO Ninjago - Nindroids.3ds",
        title: "LEGO Ninjago - Nindroids (Europe) (En,Fr,De,Es,It,Nl,Da).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "LEGO Ninjago - Shadow of Ronin.3ds",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "LEGO Ninjago - Shadow of Ronin.3ds",
        title: "LEGO Ninjago - Shadow of Ronin (Europe) (En,Fr,De,Es,It,Nl,Da).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "LEGO Pirates of the Caribbean - The Video Game.3ds",
        imgSrc: "assets/img/another.jpg",
        altText: "LEGO Pirates of the Caribbean - The Video Game",
        title: "LEGO Pirates of the Caribbean - The Video Game (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "LEGO Star Wars - The Force Awakens",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "LEGO Star Wars - The Force Awakens",
        title: "LEGO Star Wars - The Force Awakens (Europe) (En,Fr,De,Es,It,Nl,Da).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "LEGO Star Wars III - The Clone Wars",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "LEGO Star Wars III - The Clone Wars",
        title: "LEGO Star Wars III - The Clone Wars (Europe) (En,Fr,De,Es,It,Da).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Luigi's Mansion - Dark Moon",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Luigi's Mansion - Dark Moon",
        title: "Luigi's Mansion - Dark Moon (USA) (En,Fr,Es).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Mario & Luigi - Bowser's Inside Story + Bowser Jr.'s Journey",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Mario & Luigi - Bowser's Inside Story + Bowser Jr.'s Journey",
        title: "Mario & Luigi - Bowser's Inside Story + Bowser Jr.'s Journey (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Mario & Luigi - Dream Team Bros",
        imgSrc: "assets/img/another.jpg",
        altText: "Mario & Luigi - Dream Team Bros",
        title: "Mario & Luigi - Dream Team Bros. (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Mario & Luigi - Paper Jam Bros",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Mario & Luigi - Paper Jam Bros",
        title: "Mario & Luigi - Paper Jam Bros. (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Mario & Sonic at the London 2012 Olympic Games",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Mario & Sonic at the London 2012 Olympic Games",
        title: "Mario & Sonic at the London 2012 Olympic Games (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Mario and Donkey Kong - Minis on the Move",
        imgSrc: "assets/img/another.jpg",
        altText: "Mario and Donkey Kong - Minis on the Move",
        title: "Mario and Donkey Kong - Minis on the Move (Europe) (En,Fr,De,Es,It) (eShop).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Mario Kart 7.3ds",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Mario Kart 7.3ds",
        title: "Mario Kart 7.3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Mario Party - Island Tour",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Mario Party - Island Tour",
        title: "Mario Party - Island Tour (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Mario Tennis Open",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Mario Tennis Open",
        title: "Mario Tennis Open (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Mega Man Legacy Collection.3ds",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Mega Man Legacy Collection.3ds",
        title: "Mega Man Legacy Collection (USA).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Metal Gear Solid 3D - Snake Eater",
        imgSrc: "assets/img/another.jpg",
        altText: "Metal Gear Solid 3D - Snake Eater",
        title: "Metal Gear Solid 3D - Snake Eater (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Metroid - Samus Returns",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Metroid - Samus Returns",
        title: "Metroid - Samus Returns (USA) (En,Fr,Es).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Metroid Prime - Federation Force",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Metroid Prime - Federation Force",
        title: "Metroid Prime - Federation Force (USA) (En,Fr,Es).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Minecraft - New Nintendo 3DS Edition",
        imgSrc: "assets/img/another.jpg",
        altText: "Minecraft - New Nintendo 3DS Edition",
        title: "Minecraft - New Nintendo 3DS Edition (USA).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Monster Hunter 4 Ultimate",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Monster Hunter 4 Ultimate",
        title: "Monster Hunter 4 Ultimate (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Naruto Powerful Shippuden",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Naruto Powerful Shippuden",
        title: "Naruto Powerful Shippuden (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Naruto Shippuden 3D - The New Era",
        imgSrc: "assets/img/another.jpg",
        altText: "Naruto Shippuden 3D - The New Era",
        title: "Naruto Shippuden 3D - The New Era (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "NASCAR Unleashed.3ds",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "NASCAR Unleashed.3ds",
        title: "NASCAR Unleashed (USA).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Need for Speed - The Run",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Need for Speed - The Run",
        title: "Need for Speed - The Run (USA) (En,Fr,Es).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "New Super Mario Bros. 2",
        imgSrc: "assets/img/another.jpg",
        altText: "New Super Mario Bros. 2",
        title: "New Super Mario Bros. 2 (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "One Piece - Unlimited Cruise SP",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "One Piece - Unlimited Cruise SP",
        title: "One Piece - Unlimited Cruise SP (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "One Piece - Unlimited Cruise SP2",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "One Piece - Unlimited Cruise SP2",
        title: "One Piece - Unlimited Cruise SP2 (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "One Piece - Unlimited World Red",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "One Piece - Unlimited World Red",
        title: "One Piece - Unlimited World Red (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Pac-Man & Galaga Dimensions",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Pac-Man & Galaga Dimensions",
        title: "Pac-Man & Galaga Dimensions (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Pac-Man and the Ghostly Adventures",
        imgSrc: "assets/img/another.jpg",
        altText: "Pac-Man and the Ghostly Adventures",
        title: "Pac-Man and the Ghostly Adventures (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Pac-Man and the Ghostly Adventures 2",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Pac-Man and the Ghostly Adventures 2",
        title: "Pac-Man and the Ghostly Adventures 2 (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Pac-Man Party 3D",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Pac-Man Party 3D",
        title: "Pac-Man Party 3D (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Paper Mario - Sticker Star",
        imgSrc: "assets/img/another.jpg",
        altText: "Paper Mario - Sticker Star",
        title: "Paper Mario - Sticker Star (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Pokemon Alpha Sapphire",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Pokemon Alpha Sapphire",
        title: "Pokemon Alpha Sapphire (Europe) (En,Ja,Fr,De,Es,It,Ko) (Rev 2).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Pokemon Moon",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Pokemon Moon",
        title: "Pokemon Moon (Europe) (En,Ja,Fr,De,Es,It,Zh,Ko).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Pokemon Omega Ruby",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Pokemon Omega Ruby",
        title: "Pokemon Omega Ruby (Europe) (En,Ja,Fr,De,Es,It,Ko) (Rev 2).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Pokemon Rumble World",
        imgSrc: "assets/img/another.jpg",
        altText: "Pokemon Rumble World",
        title: "Pokemon Rumble World (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Pokemon Sun",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Pokemon Sun",
        title: "Pokemon Sun (Europe) (En,Ja,Fr,De,Es,It,Zh,Ko).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Pokemon Super Mystery Dungeon",
        imgSrc: "assets/img/another.jpg",
        altText: "Pokemon Super Mystery Dungeon",
        title: "Pokemon Super Mystery Dungeon (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        

    },       
    {
        id: "Pokemon Ultra Moon",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Pokemon Ultra Moon",
        title: "Pokemon Ultra Moon (Europe) (En,Ja,Fr,De,Es,It,Zh,Ko).3ds",
        downloadLink2: "KK" // Segundo enlace de descarga

    },       
    {
        id: "Pokemon Ultra Sun",
        imgSrc: "assets/img/another.jpg",
        altText: "Pokemon Ultra Sun",
        title: "Pokemon Ultra Sun (Europe) (En,Ja,Fr,De,Es,It,Zh,Ko).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Pokemon X",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Pokemon X",
        title: "Pokemon X (USA) (En,Ja,Fr,De,Es,It,Ko).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Pokemon Y",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Pokemon Y",
        title: "Pokemon Y (Europe) (En,Ja,Fr,De,Es,It,Ko).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Poochy & Yoshi's Woolly World",
        imgSrc: "assets/img/another.jpg",
        altText: "Poochy & Yoshi's Woolly World",
        title: "Poochy & Yoshi's Woolly World (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Power Rangers - Megaforce",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Power Rangers - Megaforce",
        title: "Power Rangers - Megaforce (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Pro Evolution Soccer 2011 3D",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Pro Evolution Soccer 2011 3D",
        title: "Pro Evolution Soccer 2011 3D (Europe) (Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Pro Evolution Soccer 2012 3D",
        imgSrc: "assets/img/another.jpg",
        altText: "Pro Evolution Soccer 2012 3D",
        title: "Pro Evolution Soccer 2012 3D (Europe) (Es,It,Pt,El).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Pro Evolution Soccer 2013 3D",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Pro Evolution Soccer 2013 3D",
        title: "Pro Evolution Soccer 2013 3D (Europe) (Es,It,Pt,El).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Project X Zone (Europe).3ds",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Project X Zone (Europe).3ds",
        title: "Project X Zone (Europe).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Project X Zone 2",
        imgSrc: "assets/img/another.jpg",
        altText: "Project X Zone 2",
        title: "Project X Zone 2 (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Rabbids Rumble",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Rabbids Rumble",
        title: "Rabbids Rumble (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Rayman 3D",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Rayman 3D",
        title: "Rayman 3D (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Rayman Origins",
        imgSrc: "assets/img/another.jpg",
        altText: "Rayman Origins",
        title: "Rayman Origins (Europe) (En,Fr,De,Es,It,Nl).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Regular Show - Mordecai and Rigby in 8-bit Land",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Regular Show - Mordecai and Rigby in 8-bit Land",
        title: "Regular Show - Mordecai and Rigby in 8-bit Land (Europe).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil - Revelations",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Resident Evil - Revelations",
        title: "Resident Evil - Revelations (USA) (En,Ja,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil - The Mercenaries 3D",
        imgSrc: "assets/img/another.jpg",
        altText: "Resident Evil - The Mercenaries 3D",
        title: "Resident Evil - The Mercenaries 3D (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Ridge Racer 3D",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Ridge Racer 3D",
        title: "Ridge Racer 3D (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Shantae and the Pirate's Curse",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Shantae and the Pirate's Curse",
        title: "Shantae and the Pirate's Curse (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Shinobi",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Shinobi",
        title: "Shinobi (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Shovel Knight.3ds",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Shovel Knight.3ds",
        title: "Shovel Knight (USA).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Sonic & All-Stars Racing Transformed",
        imgSrc: "assets/img/another.jpg",
        altText: "Sonic & All-Stars Racing Transformed",
        title: "Sonic & All-Stars Racing Transformed (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Sonic Boom - Fire & Ice",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Sonic Boom - Fire & Ice",
        title: "Sonic Boom - Fire & Ice (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Sonic Boom - Shattered Crystal",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Sonic Boom - Shattered Crystal",
        title: "Sonic Boom - Shattered Crystal (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Sonic Generations",
        imgSrc: "assets/img/another.jpg",
        altText: "Sonic Generations",
        title: "Sonic Generations (USA) (En,Fr,Es).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Spider-Man - Edge of Time",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Spider-Man - Edge of Time",
        title: "Spider-Man - Edge of Time (Europe) (En,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "SpongeBob SquarePants - Plankton's Robotic Revenge",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "SpongeBob SquarePants - Plankton's Robotic Revenge",
        title: "SpongeBob SquarePants - Plankton's Robotic Revenge (Europe) (En,Fr,De,Es,It,Nl,Sv).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Star Fox 64 3D",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Star Fox 64 3D",
        title: "Star Fox 64 3D (Europe) (En,Fr,De,Es,It) (Rev 3).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Super Mario 3D Land",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Super Mario 3D Land",
        title: "Super Mario 3D Land (USA) (En,Fr,Es).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Super Mario Maker for Nintendo 3DS",
        imgSrc: "assets/img/another.jpg",
        altText: "Super Mario Maker for Nintendo 3DS",
        title: "Super Mario Maker for Nintendo 3DS (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "SUPER SMASH BROS EUR.3ds",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "SUPER SMASH BROS EUR.3ds",
        title: "SUPER SMASH BROS EUR.3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Super Street Fighter IV - 3D Edition",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Super Street Fighter IV - 3D Edition",
        title: "Super Street Fighter IV - 3D Edition (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Teenage Mutant Ninja Turtles - Danger of the Ooze",
        imgSrc: "assets/img/another.jpg",
        altText: "Teenage Mutant Ninja Turtles - Danger of the Ooze",
        title: "Teenage Mutant Ninja Turtles - Danger of the Ooze (Europe) (En,Fr,De,Es,It,Nl,Sv).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Tekken 3D - Prime Edition",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Tekken 3D - Prime Edition",
        title: "Tekken 3D - Prime Edition (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Terraria",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Terraria",
        title: "Terraria (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Tetris Ultimate,
        imgSrc: "assets/img/another.jpg",
        altText: "Tetris Ultimate",
        title: "Tetris Ultimate (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "The Legend of Zelda - Ocarina of Time 3D",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "The Legend of Zelda - Ocarina of Time 3D",
        title: "The Legend of Zelda - Ocarina of Time 3D.3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "The Legend of Zelda - Twilight Princess",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "The Legend of Zelda - Twilight Princess",
        title: "The Legend of Zelda - Twilight Princess (World) (En,Ja,Fr,De,Es,It) (eShop).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Tom Clancy's Ghost Recon - Shadow Wars",
        imgSrc: "assets/img/another.jpg",
        altText: "Tom Clancy's Ghost Recon - Shadow Wars",
        title: "Tom Clancy's Ghost Recon - Shadow Wars (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "Transformers - Dark of the Moon - Stealth Force Edition",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "Transformers - Dark of the Moon - Stealth Force Edition",
        title: "Transformers - Dark of the Moon - Stealth Force Edition (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "Transformers Prime - The Game",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Transformers Prime - The Game",
        title: "Transformers Prime - The Game (Europe) (En,Fr,De,Es,It,Nl,Sv).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Turbo - Super Stunt Squad",
        imgSrc: "assets/img/another.jpg",
        altText: "Turbo - Super Stunt Squad",
        title: "Turbo - Super Stunt Squad (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "WarioWare Gold",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "WarioWare Gold",
        title: "WarioWare Gold (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    },       
    {
        id: "WWE All Stars",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "WWE All Stars",
        title: "WWE All Stars (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Xenoblade Chronicles 3D",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Xenoblade Chronicles 3D",
        title: "Xenoblade Chronicles 3D (Europe) (En,Fr,De,Es,It).3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Yo-Kai Watch.3ds",
        imgSrc: "assets/img/bayonettaorigins.jpg",
        altText: "Yo-Kai Watch.3ds",
        title: "Yo-Kai Watch.3ds",
        downloadLink2: "hHH" // Segundo enlace de descarga

    },       
    {
        id: "Yoshi's New Island",
        imgSrc: "assets/img/another.jpg",
        altText: "Yoshi's New Island",
        title: "Yoshi's New Island (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru).3ds",
        downloadLink2: "JJJ" // Segundo enlace de descarga
        
    },       
    {
        id: "ZELDA Majoras Maks.3ds",
        imgSrc: "assets/img/bayonetta3.jpg",
        altText: "ZELDA Majoras Maks.3ds",
        title: "ZELDA Majoras Maks.3ds",
        downloadLink2: "KKK" // Segundo enlace de descarga

    }
];

// Agregar todos los juegos al DOM
juegos.forEach(juego => {
    addGameToGallery(juego);
});
