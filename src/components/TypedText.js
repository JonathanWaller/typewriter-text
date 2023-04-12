import { useState, useEffect, useRef } from "react";

const TypedText = ({str, delay}) => {
    const [revealedLetters, setRevealedLetters] = useState(0);
    const interval = useRef(null);

    useEffect( () => {
        if(str) {
            // creates interval to add to the number of revealed strings allowed
            interval.current = setInterval( () => {
                setRevealedLetters( l => l + 1)
            }, delay)
        }
    },[str, delay])

    useEffect( () => {
        if( revealedLetters === str.length ) clearInterval( interval.current) // clears interval at end of the string to prevent continuous interval
    }, [str, interval, revealedLetters])

    useEffect( () => {
        return( () => clearInterval( interval.current )) // clean up
    }, [interval])


    return<>{str.substring(0, revealedLetters)}</>

    // for unordered list display
    // return(
    //     <ul>
    //         {
    //             // converting the string to an array, mapping, and only displaying letters according to revealedLetters 
    //             // adding an empty string to the front of the array to satisfy the directions of nothing showing initially
    //             ['', ...str.split('')].map((str, ind) => (
    //                 str && ind <= revealedLetters
    //                 ? <li key={ind}>{str}</li>
    //                 : null
    //             ))
    //         }
    //     </ul>
    // )
}

export default TypedText;