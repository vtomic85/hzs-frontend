const Greeting = (props) => {
    return (
        <div>
            <p>Hello, {props.firstName} {props.lastName}, nice to meet you!</p>
            <p>You are {props.age} years old.</p>
            <button onClick={props.onAgeIncremented}>Click here to age up</button>
        </div>
    );
}

export default Greeting;