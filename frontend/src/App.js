import "./App.css";
import React from "react";
import Axios from "axios";
import Logo from "./graphics/figma_logo.png";

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
            <form className="Form-JSON">
                <div className="Form-left">
                    <img className="Form-logo" src={Logo} alt="figma_logo" />
                    {/*<input type="button" value="GET JSON" onClick={getJson} />*/}
                </div>

                <div className="Form-right">
                    <h1 className="Form-heading">FIGMA JSON GETTER</h1>
                    <input
                        type="text"
                        name="figma_token"
                        placeholder="xxxxx-xxxxx-xxxxx"
                        className="Form-input-field"
                    />
                    <br />
                    <input
                        type="text"
                        name="file_id"
                        placeholder="xxxx"
                        className="Form-input-field"
                    />
                    <br />
                    <input
                        type="reset"
                        name="reset"
                        value="RESET"
                        className="Form-input-reset Form-input-btn"
                    />
                    <input
                        type="button"
                        name="submit"
                        value="SUBMIT"
                        className="Form-input-submit Form-input-btn"
                        onClick={getJson}
                    />
                </div>
            </form>
        </div>
    );
}

export default App;
