import React, { useEffect } from 'react';

const Child = ({setIsUnmount}) => {

    

    useEffect(()=>{
        setIsUnmount(false)
        console.log("hello, i am useEffect");
        const intervalID = setInterval(() => {
            console.log("hello");
        }, 1000);

        return ()=>{
            console.log("component unmounted");
            clearInterval(intervalID)
            console.log("ok");
            setIsUnmount(true)
        }
    },[])

    console.log("hello, i am after useEffect, i am executing first cause useEffect runs after the render of the component");

    return (
        <div>
            <h1>hello, i am child component</h1>
            
        </div>
    );
};

export default Child;