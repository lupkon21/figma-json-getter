import "./App.css";
import React from "react";
import Axios from "axios";

function App() {
    const getJson = () =>
        Axios.get("http://localhost:8080/json")
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    return (
        <div className="App">
            <input type="button" value="GET JSON" onClick={getJson} />
        </div>
    );
}

export default App;
