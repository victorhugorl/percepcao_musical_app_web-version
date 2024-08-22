import { useState } from "react";

export default () => {
    const [message, setMessage] = useState("Clique no botão");

    const fetchHelloWorld = () => {
        fetch("http://127.0.0.1:8000/api/hello/")
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                setMessage(result.message);
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
