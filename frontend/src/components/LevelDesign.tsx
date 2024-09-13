import { useEffect, useState } from "react";

export default () => {
    const [topRenderLevels, setTopRenderLevels] = useState([
        "20px",
        "40px",
        "25px",
        "-30px",
        "60px"
    ]);
    const [elementSet, setElementerSet] = useState(
        "d-flex justify-content-between my-2"
    );
    const [widthWindow, setWidthWindow] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidthWindow(window.innerWidth);
            if (widthWindow <= 760.98) {
                setElementerSet("row flex-column align-items-center my-2");
                setTopRenderLevels(["20px", "40px", "60px", "80px", "100px"]);
            } else {
                setElementerSet("d-flex justify-content-between my-2");
                setTopRenderLevels(["20px", "40px", "25px", "-30px", "60px"]);
            }
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    return (
        <>
            <main
                className="d-flex align-items-center"
                style={{ height: "500px" }}
            >
                <aside className={elementSet} style={{ width: "100%" }}>
                    <div className="level"></div>
                    <div
                        className="level level-disabled"
                        style={{ top: topRenderLevels[0] }}
                    ></div>
                    <div
                        className="level level-disabled"
                        style={{ top: topRenderLevels[1] }}
                    ></div>
                    <div
                        className="level level-disabled"
                        style={{ top: topRenderLevels[2] }}
                    ></div>
                    <div
                        className="level level-disabled"
                        style={{ top: topRenderLevels[3] }}
                    ></div>
                    <div
                        className="level level-disabled"
                        style={{ top: topRenderLevels[4] }}
                    ></div>
                </aside>
            </main>
        </>
    );
};
