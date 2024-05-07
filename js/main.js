const labels = [
    'Ford',
    'Toyota',
    'Chevrolet',
    'Honda',
    'Nissan',
];

const data = {
    labels: labels,
    datasets: [
        {
            label: "Most cars sold in the us",
            data: [1904038, 1888941, 1702700, 1156591, 834091],
            backgroundColor: ['blue', 'red', 'yellow', 'purple', 'green']
        }
    ]
}

const config = {
    type: 'doughnut',
    data: data,
}


const config3 = {
    type: 'line',
    data: data,
}

const config4 = {
    type: 'polarArea',
    data: data,
}


new Chart(document.getElementById("js--chart--1"), config);

new Chart(document.getElementById("js--chart--3"), config3);
new Chart(document.getElementById("js--chart--4"), config4);



function getPokemon() {

    let normal = 0, fighting = 0, flying = 0, poison = 0, ground = 0, rock = 0, bug = 0, ghost = 0,
        steel = 0, fire = 0, water = 0, grass = 0, electric = 0, psychic = 0, ice = 0, dragon = 0,
        fairy = 0, unkown = 0, shadow = 0;

    const labels = ['normal', 'fighting', 'flying', 'poison', 'ground',
        'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric',
        'psychic', 'ice', 'dragon', 'fairy', 'unkown', 'shadow'];

    for (i = 0; i < 10; i++) {
        let random = Math.floor(Math.random() * 500 + 1);
        let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + random)
            .then(function (response) {
                return response.json();
            })
            .then(function (pokemon) {
                switch (pokemon.types[0].type.name) {
                    case 'normal':
                        normal = normal + 1;
                        break;
                    case 'fighting':
                        fighting = fighting + 1;
                        break;
                    case 'flying':
                        flying = flying + 1;
                        break;
                    case 'poison':
                        poison = poison + 1;
                        break;
                    case 'ground':
                        ground = ground + 1;
                        break;
                    case 'rock':
                        rock = rock + 1;
                        break;
                    case 'bug':
                        bug = bug + 1;
                        break;
                    case 'ghost':
                        ghost = ghost + 1;
                        break;
                    case 'steel':
                        steel = steel + 1;
                        break;
                    case 'fire':
                        fire = fire + 1;
                        break;
                    case 'water':
                        water = water + 1;
                        break;
                    case 'grass':
                        grass = grass + 1;
                        break;
                    case 'electric':
                        electric = electric + 1;
                        break;
                    case 'psychic':
                        psychic = psychic + 1;
                        break;
                    case 'ice':
                        ice = ice + 1;
                        break;
                    case 'dragon':
                        dragon = dragon + 1;
                        break;
                    case 'fairy':
                        fairy = fairy + 1;
                        break;
                    case 'unknown':
                        unkown = unkown + 1;
                        break;
                    case 'shadow':
                        shadow = shadow + 1;
                        break;

                }

            }).then(function(){
                dataPokemon.datasets[0].data = [normal, fighting, flying, poison, ground,
                    rock, bug, ghost, steel, fire, water, grass, electric,
                    psychic, ice, dragon, fairy, unkown, shadow]; 
                graph.update();
            });
    }

    const dataPokemon = {
        labels: labels,
        datasets: [
            {
                label: "Pokemon Types",
                data:[normal, fighting, flying, poison, ground,
                rock, bug, ghost, steel, fire, water, grass, electric,
                psychic, ice, dragon, fairy, unkown, shadow],
                backgroundColor: ['#FFEBB2', '#E59BE9', '#D862BC', '#8644A2', '#DBAFA0'],
            }
        ]
    }

    const configPokemon1 = {
        type: 'bar',
        data: dataPokemon,
    }
    
    
   const graph = new Chart(document.getElementById("js--chart--2"), configPokemon1);
    
}

getPokemon();