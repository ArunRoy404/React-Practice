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
// ReactDOM.createRoot(document.getElementById('root')).render(parentElement)


// console.log(childElement)
// console.log(parentElement)


//Browsers don't recognize this format
// this is not jsx Format 
// so need parser to convert it to jsx
// use bable
const newElement = (
    <div>
        <p>This is from jsx type</p>
    </div>
)

// can see in console that the element has been converted into jsx format 
console.log(newElement)
// ReactDOM.createRoot(document.getElementById('root')).render(newElement)

const NewElementFN = () =>{
    return (
        <div>
            <p>This element is from non jsx function</p>
        </div>
    )
}

// console.log(newElementFN())
// ReactDOM.createRoot(document.getElementById('root')).render(NewElementFN())


// should use capital at first for component 
console.log(<NewElementFN></NewElementFN>)
// ReactDOM.createRoot(document.getElementById('root')).render(<NewElementFN></NewElementFN>)



// nested component 

const ChildFn = ({name}) =>{
    return (
        <p>Hi i am {name}</p>
    )
}

const ParentFn = (props) =>{
    console.log(props)
    return (
        <div>
            <h2>Hi i am: {props.name}</h2>
            {
                props.children
            }
        </div>
    )
}


// React.useState()
const Counter = ({name})=>{
    // use React.useState()  which react will change the children dynaimcally 
    const [count, setCount] = React.useState(0)

    const handleCounter = ()=>{

        // this is not dynamic for every childElement
        // since it needs different child id 
        
        // const countElement = document.getElementById('counter')
        // const count = parseInt(countElement.innerText)
        // countElement.innerText = count+1
        setCount(count+1)    
    }

    return(
        <div>
            <h3>{name}: <span id="counter">{count}</span></h3>
            <button onClick={handleCounter}>Count {name}</button>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root'))
.render(
    <ParentFn name={'x'}>
        <ChildFn name={'y'}></ChildFn>
        <ChildFn name={'z'}></ChildFn>
        <ChildFn name={'a'}></ChildFn>
        <ChildFn/>

        <Counter name={'A'}/>
        <Counter name={'B'}/>
        <Counter name={'C'}/>
    </ParentFn>
)
