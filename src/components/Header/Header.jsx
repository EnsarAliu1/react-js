import React from "react";
import "./Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <header>
            <div className="container text-center">
                <div className="row d-flex felx-row align-items-center">
                    <div className="col">
                        <h1>Header</h1>
                    </div>
                    <div className="col">
                        <nav>
                            <ul className="d-flex flex-row justify-content-center gap-4 list-unstyled mt-3">
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col">
                        <button>Login</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;