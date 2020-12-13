const divs = document.querySelectorAll('div');

//this will not work!!

// divs.forEach(div => {
//     div.addEventListener('click', () => {
//         console.log('Hi');
//     })
// }) 

/*
document.addEventListener('click', e => {  // with this when we click a div will be having 'hi' in console
    if (e.target.matches('div')) {
        console.log('hi');
    }
})  */

// will turn the above EventListener in to a function

function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e)
    })
}

addGlobalEventListener('click', 'div', e => {  // this is transformed now
    if (e.target.matches('div')) {
        console.log('hi');
    }
})


const newDiv = document.createElement('div');
newDiv.style.width = '240px'
newDiv.style.height = '240px'
newDiv.style.backgroundColor = 'purple'
document.body.append(newDiv) // Event Listener must be put after we creatred the new div or create a function but for the document to be global
