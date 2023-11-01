import {useEffect, useState} from "react";

function Button({text}) {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        if (count === 5) {
            window.localStorage.setItem('count', count)
        }
    }, [count])

    return (
        <>
            <button onClick={handleClick}>Click !</button>
            <h1>{`Ini adalah angka ${count}`}</h1>
        </>
    )
}

export default Button