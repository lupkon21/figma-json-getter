import "./App.css";
import React from "react";
import axios from "axios";
import Logo from "./graphics/figma_logo.png";
import Button from "./components/Button";
import InputTextField from "./components/InputTextField";

function App() {
    return (
        <div className="App">
            <form onSubmit={getJson} className="Form-JSON">
                <div className="Form-left">
                    <img className="Form-logo" src={Logo} alt="figma_logo" />
                </div>

                <div className="Form-right">
                    <h1 className="Form-heading">FIGMA JSON GETTER</h1>
                    <InputTextField type="figmaUserToken" />

                    <InputTextField type="figmaFileID" />

                    <Button type="reset" />
                    <Button type="submit" />
                </div>
            </form>
        </div>
    );
}

export default App;

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

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}
