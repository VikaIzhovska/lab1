const Spacestation = require('./spacestation.js');
const Planet = require('./planet.js');
const Shipment = require('./shipment.js');
const Delivered_shipment = require('./delivered_shipment.js');
//------------------------------------------------------------------------
let Planet1 = new Planet('Mars',12, 11, 12, 200);
let Planet2 = new Planet('Jupiter',19, 18, 18, 2000);
let Planet3 = new Planet('Saturn',15, 14, 17, 1000);
let Planet4 = new Planet('Mercury',10, 16, 7, 500);
//------------------------------------------------------------------------
let Station1 = new Spacestation('TheBigOne', 1, Planet1.name);
let Station2 = new Spacestation('TheSmallOne', 2, Planet2.name);
let Station3 = new Spacestation('TheOldestOne', 3, Planet3.name);
let Station4 = new Spacestation('TheNewestOne', 4, Planet2.name);
//------------------------------------------------------------------------
let Shipmnt1 = new Shipment(1,10,15,4,19,Planet1.name, Station1.name,'2021-03-10');
let Shipmnt2 = new Shipment(2,20,12,8,23,Planet2.name, Station2.name,'2021-03-02');
let Shipmnt3 = new Shipment(3,5,9,3,16,Planet3.name, Station3.name,'2021-02-28');
let DelShipmnt3 = new Delivered_shipment(3,5,9,3,16,Planet3.name, Station3.name,'2021-02-28','2021-03-03');
//створення колекцій у вигляді масивів
let planets = [];
let stations = [];
let shipments =[];
//-------------------------------------------------------------------------
//Додавання нової станції в колекцію
stations.push(Station1,Station2,Station3,Station4);
//console.dir(stations);
//Редагування станції в колекції
stations[0].name = 'BigOne';
stations[0].planet = 'Saturn';

//Видалення станції з колекції(станції 2)
stations.splice(1,1);

//Пошук однієї станції в колекції
let i = 0;
stations.forEach(function(el) {
    if(el.name == 'BigOne'){
        console.log('Станція: ');
        console.dir(el.name);
        i++;
    }
}
);
if(i==0)  console.log('Такої станції нема в колекції.');
//------------------------------------------------------------------------
//Додавання планети в колекцію
planets.push(Planet1,Planet2,Planet3,Planet4);
console.dir(planets);
//Редагування планети в колекції
planets[1].size = 1500;

//Видалення планети з колекції(планети Марс)
planets.splice(0,1);

//Пошук планети в колекції
let j = 0;
planets.forEach(function(el) {
    if(el.name == 'Jupiter'){
        console.log('Планета: ');
        console.dir(el);
        j++;
    }
}
);
if(j==0)  console.log('Такої планети нема в колекції.');
//------------------------------------------------------------------------
//Додавання вантажу в колекцію
shipments.push(Shipmnt1,Shipmnt2,Shipmnt3);
//console.dir(shipments);
//Редагування вантажу в колекції
shipments[2].departpoint = Planet3.name;

//Видалення вантажу з колекції
shipments.splice(2,1);
//------------------------------------------------------------------------
//Пошук усіх станцій планети
let k = 0;
console.log('Станції планети '+ `${Planet3.name}`+ ': ');
stations.forEach(function(el) {
    if(el.planet == Planet3.name){
        console.dir(el.name);
        k++;
    }
}
);
if(k==0)  console.log('У вказаної планети немає станцій');
//------------------------------------------------------------------------
console.log('\nСтанції в колекції: ');
//console.dir(stations);
console.log('\nПланети в колекції: ');
console.dir(planets);
console.log('\nВантажі в колекції: ');
//console.dir(shipments);
//console.dir(DelShipmnt3);
