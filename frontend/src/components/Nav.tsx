import { useState } from "react";

export default () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <nav className="nav bg-light ">
                <a href="#">
                    <h3>PMAPP</h3>
                </a>
                <ul className="nav nav-list">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Lorem</a>
                    </li>
                    <li>
                        <a href="#">Lorem</a>
                    </li>
                    <li>
                        <a href="#">Lorem</a>
                    </li>
                </ul>
                <a href="#" className="burger-block" onClick={toggleMenu}>
                    {isOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            fill="currentColor"
                            className="bi bi-x"
                            viewBox="0 0 16 16"
                        >
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            fill="currentColor"
                            className="bi bi-list"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                            />
                        </svg>
                    )}
                </a>
            </nav>
            {isOpen && (
                <nav className="dropdown-menu">
                    <ul className="nav-list">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Lorem</a>
                        </li>
                        <li>
                            <a href="#">Lorem</a>
                        </li>
                        <li>
                            <a href="#">Lorem</a>
                        </li>
                    </ul>
                </nav>
            )}
        </>
    );
};
