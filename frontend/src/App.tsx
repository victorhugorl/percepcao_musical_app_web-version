import { useState } from "react";

import "./assets/css/Index.css";

export default () => {
    const [message, setMessage] = useState("Clique no botão");

    const fetchHelloWorld = () => {
        fetch("http://127.0.0.1:8000/api/hello/")
            .then((response) => {
                console.log(response.json());
            })
            .catch((error) => {
                setMessage(`Error ${error}`);
            });
    };

    return (
        <>
            <h1>First GET</h1>
            <div>
                <p>{message}</p>
                <div>
                    <button onClick={fetchHelloWorld}>Fazer GET</button>
                </div>
            </div>
        </>
    );
};
