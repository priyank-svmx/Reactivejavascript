/**
 * Observables can model
 * - Events
 * - Async Server Requests
 * - Animations
 */

/**
 * Adapt push api's to Observables
 * - DOM events
 * - Websockets
 * - Server-Sent Events
 * - Node Streams
 * - Service Workers
 * - XHR
 * - setInterval
 */

/** Obervable API surface area and shape
 *
 *
 */

const mouseMoves = {}; // some init code to setup the observable
let subscription = mouseMoves.forEach(console.log);
subscription.dispose();

mouseMoves.forEach(
  event => console.log(event),
  error => console.error(error),
  () => console.log('done')
);

mouseMoves.forEach({
  onNext: event => console.log(event),
  onError: error => console.log(error),
  onCompleted: () => console.log('done')
});

/**
 * from event to observable
 */
var mouseMoves = Observable.fromEvent(element, 'mousemove');
