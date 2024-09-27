import { createContext, useState } from "react";

export let CounterContext = createContext(0)

export default function CounterContextProvider(props){

    const [count, setCount] = useState(0);
    const [userName, setUserName] = useState('ahmed ali');


    return <CounterContext.Provider value={ {count , setCount , userName , setUserName} } >

        {props.children}

    </CounterContext.Provider>
}