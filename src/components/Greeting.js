import { useState } from "react";

const Greeting = (props) => {
    const [delta, setDelta] = useState(0);
    return (
        <div>
            <p>Hello, {props.firstName} {props.lastName}, nice to meet you!</p>
            <p>You are {props.age} years old.</p>
            <input
                type="number"
                value={delta}
                onChange={(e) => setDelta(e.target.value)}
            />
            <button onClick={() => props.onAgeUp(delta)}>Age up</button>
        </div>
    );
}

export default Greeting;