import {Board} from './Arduino.js';
import {Keybaord} from './Keyboard.js';

// uncomment  and changge to import devices
import {Button, ThresholdedSensor} from './Device.js';



let touch = new ThresholdedSensor(500);
let bend = new ThresholdedSensor(600);
let piezo = new ThresholdedSensor(50);
window.touch = touch
window.bend = bend
window.piezo = piezo
console.warn('index hit')
let board = new Board([touch, bend, piezo]);
board.connect({baudrate: 9600});


let keyboard = new Keyboard();

//touch.on(`tick`, console.log);
// 
// board.on('line', line => {
//     console.log(`line`, String.fromCharCode(...line))
// });

// only works if device is set: `let board = new Board([button1]);`
//board.on('point', point => {
//    console.log(`point`, point)
//});



// uncomment if keyboard wanted
// keyboard.on('press', (e) =>{
//     console.log(e);
// });
// keyboard.on('release', (e) =>{
//     console.log(e);
// });
