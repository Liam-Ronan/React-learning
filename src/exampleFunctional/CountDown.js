import { useState, useEffect } from "react";

const CountDown = (props) => {

    const [count, setCount] = useState(props.startValue);

    let timerID;

    useEffect(() => {

        timerID = setInterval(() => {
            setCount(count - 1);
        }, 1000);

        return () => {
            clearInterval(timerID);
        }

    }, [count]);
    

    if(count > 0) {
        return <h2>Time remaining {count} seconds</h2>
    }
    else {
        clearInterval(timerID)
        return <h2>Time Up!!</h2>
    }

}

export default CountDown;