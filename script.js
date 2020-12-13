const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

// grandparent.addEventListener('click', (e) => {
//     console.log('grandparent 1');
// })

/*
grandparent.addEventListener('click', (e) => {
        console.log('grandparent Capture');
 }, {capture: true}) // on capture set to true (as default is false) first elem will be this and after the buble efect and capture efect

parent.addEventListener('click', (e) => {
   
    console.log('parent buble');
})

child.addEventListener('click', (e) => {
    console.log('child buble');
})

document.addEventListener('click', (e) => {
    console.log('document buble');
})

parent.addEventListener('click', (e) => {
    e.stopPropagation(); // this will stop the rest of the propagation, bubling or cature
    console.log('parent capture');
}, {capture: true})

child.addEventListener('click', (e) => {
    console.log('child capture');
}, {capture: true})

document.addEventListener('click', (e) => {
    console.log('document capture');
}, {capture: true})
*/

grandparent.addEventListener('click', (e) => {
    console.log('grandparent buble');
}, {once: true}) // this will only run the event Listener only once 

parent.addEventListener('click', (e) => {
    console.log('parent buble');
})

child.addEventListener('click', printHi)

setTimeout(() => {
    child.removeEventListener('click', printHi) // this function will remove  my event listener after a set amount of time and to work must be set like this as a function

},2000)

function printHi() {
    console.log('Hi');
}