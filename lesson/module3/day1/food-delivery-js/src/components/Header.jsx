import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../css/header.css';

const Header = () => {
    return (
        <header className="header d-flex justify-content-center">
            <nav className="nav-header-custom pt-3   pb-3 navbar navbar-expand-lg">
                <div className="container-fluid  d-flex justify-content-between">
                    <a className="navbar-brand" href="#">
                        <img
                            src="https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/foodDelivery/logo-dark.e4df4459f508ae9796fa8db9a5a723f6.png"
                            alt="Agency"
                            className="logo-img"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Restaurants</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Testimonials</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Download</a>
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Login Now</a>
                            </li>
                            <li className="nav-item">
                                <a className=" btn btn-success" href="#">Join Free</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;