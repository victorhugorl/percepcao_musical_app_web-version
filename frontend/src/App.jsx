import { useState, useEffect } from "react";

export default () => {
    useEffect(() => {
        async function fetchData() {
            console.log(import.meta.env.VITE_API_URL);
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const result = await response.json();
                console.log(result);
            } catch (e) {
                console.error("Error fetching data", e);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <h1>Vo deixar na main pra testar kk</h1>
        </>
    );
};
