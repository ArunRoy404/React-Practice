// react and react dom 
// console.log(React)
// console.log(ReactDOM)


// react element 
//jsx element
// const myElement = React.createElement(
//     'div', //type
//     null,  //props
//     "Hello React" //children
// )

// jsx element 
const childElement = React.createElement(
    'div',
    {name: 'y'}, //'y' props should bt object
    'Hello React'
)

const parentElement = React.createElement(
    'div', //type
    {name: 'x'}, //props
    childElement
)

// console.log(myElement)

// render the element 
// ReactDOM.createRoot(document.getElementById('root')).render(myElement)
ReactDOM.createRoot(document.getElementById('root')).render(parentElement)


console.log(childElement)
console.log(parentElement)