/* Snack 1
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. 
*/

const bike = [
    {
        name: 'Mountain Bike',
        weight: 12
    },
    {
        name: 'BMX',
        weight: 10
    },
    {
        name: 'Touring',
        weight: 14
    },
    {
        name: 'Tandem',
        weight: 20
    }
];

console.log(bike)

let lightBike = bike[0]

for (let i = 0; i < bike.length; i++) {
    const weightBike = bike[i].weight;

    if(weightBike < lightBike.weight){
        lightBike = bike[i]
        console.log(lightBike)
    }

}

console.log(`La bici più leggera è la ${lightBike.name} con un peso di ${lightBike.weight}Kg`)
