import "./App.css";
import React from "react";
import Axios from "axios";
import Logo from "./graphics/figma_logo.png";
import Button from "./components/Button";
import InputTextField from "./components/InputTextField";
import ErrorIcon from "./graphics/error.svg";

function App() {
    const [errorMessage, setErrorMessage] = React.useState("");
    return (
        <div className="App">
            <form onSubmit={getJson} className="Form-JSON">
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
    function getJson(e) {
        e.preventDefault();

        let figmaUserToken = document.querySelector("#figmaUserToken").value;
        let figmaFileID = document.querySelector("#figmaFileID").value;

        let data = JSON.stringify({
            "figmaUserToken": figmaUserToken,
            "figmaFileID": figmaFileID,
        });

        let config = {
            method: "post",
            url: "http://localhost:8080/json",
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        Axios(config)
            .then(function (response) {
                let dataJSON = JSON.stringify(response.data);
                let a = document.createElement("a");
                let file = new Blob([dataJSON], {
                    type: "application/json",
                });
                a.href = URL.createObjectURL(file);
                a.download = "my-figma.json";
                a.click();
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
