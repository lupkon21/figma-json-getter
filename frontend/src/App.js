import "./App.css";
import React from "react";
import Axios from "axios";
import Logo from "./graphics/figma_logo.png";
import Button from "./components/Button";
import InputTextField from "./components/InputTextField";
import { createFile, createConfig } from "./components/Functions";
import ErrorIcon from "./graphics/error.svg";

function App() {
    const [errorMessage, setErrorMessage] = React.useState("");
    return (
        <div className="App">
            <form onSubmit={getJSON} className="Form-JSON">
                <div className="Form-left">
                    <img className="Form-logo" src={Logo} alt="figma_logo" />
                </div>

                <div className="Form-right">
                    <h1 className="Form-heading">FIGMA JSON GETTER</h1>
                    <InputTextField type="figmaUserToken" label="Your Figma Token:" />
                    <InputTextField type="figmaFileID" label="Your Figma File ID:" />
                    <Button type="reset" />
                    <Button type="submit" />
                    {errorMessage && (
                        <div className="Form-request-status">
                            <img src={ErrorIcon} alt="error"></img>
                            <span>{errorMessage}</span>
                        </div>
                    )}
                    <br />
                </div>
            </form>
        </div>
    );

    function getJSON(e) {
        e.preventDefault();
        let figmaUserToken = document.querySelector("#figmaUserToken").value.trim();
        let figmaFileID = document.querySelector("#figmaFileID").value.trim();

        if (!(figmaUserToken && figmaFileID)) {
            setErrorMessage("Invalid Token or File ID");
            return;
        }

        setErrorMessage(null);
        Axios(createConfig(figmaUserToken, figmaFileID))
            .then(function (response) {
                setErrorMessage(null);
                createFile(JSON.stringify(response.data));
            })

            .catch((error) => {
                if (error.response) {
                    if (error.response.status === 404) setErrorMessage("404 - File not found in Figma API");
                    else setErrorMessage("Something went wrong");
                } else {
                    setErrorMessage("Newtork error");
                }
            });
    }
}

export default App;
