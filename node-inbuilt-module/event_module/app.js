const EventEmitter = require("events");

const emitter = new EventEmitter();

// // register a listener

// emitter.on('event',()=>{
//     console.log('an event occured');
// });

// // emit an event
// emitter.emit('event');
// emitter.emit('event');






// 2 passing argument and this to listerners
// --> this keyword internally set to reference the EVentEmitter instance


// emitter.on('event', function(a, b) {
//   console.log(a, b, this, this === emitter);
//   // Prints:
//   //   a b MyEmitter {
//   //     _events: [Object: null prototype] { event: [Function (anonymous)] },
//   //     _eventsCount: 1,
//   //     _maxListeners: undefined,
//   //     [Symbol(kCapture)]: false
//   //   } true
// });
// emitter.emit('event', 'a', 'b');

// but if callback is an arrow function this will no longer refernce to eventEmitter instanceof










// 3
// When a listener is registered using the eventEmitter.on() method, that listener is invoked every time the named event is emitted./

let m = 0;
emitter.on('event', () => {
  console.log(++m);
});
emitter.emit('event');
// Prints: 1
emitter.emit('event');
// Prints: 2



