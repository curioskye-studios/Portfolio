import logoSmall from '../assets/logo-small-variant.png'

export default function Header() {
    return (
        <nav id="header-nav" className="navbar navbar-expand-lg py-4" >
        
            <div className="container-fluid padding-side">

                <a className="navbar-brand" href="index.html"><img id="logo-small" src={ logoSmall } alt="logo"/></a>

                <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">

                    <div className="offcanvas-header">

                        <button type="button" className="btn-close text-reset shadow-none" data-bs-dismiss="offcanvas"
                            aria-label="Close">
                        </button>
                    </div>

                    <div className="offcanvas-body">
                        <ul className="navbar-nav text-center align-items-center justify-content-end flex-grow-1">

                            <li className="nav-item">
                                <a id="current" className="nav-link active pe-lg-5" aria-current="page" href="index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pe-lg-5" href="portfolio.html">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pe-lg-5" href="about.html">About</a>
                            </li>

                        </ul>
                    </div>
                    
                </div>
            </div>
        </nav>
    );
}