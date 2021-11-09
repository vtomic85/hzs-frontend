const Greeting = (props) => {
    return (
        <div>
            Hello, {props.firstName} {props.lastName}, nice to meet you!
        </div>
    );
}

export default Greeting;