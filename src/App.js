import "./css/App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";

function App() {
    return (
        <div className="container">
            <Header/>
            <Todos/>
        </div>
    );
}

export default App;