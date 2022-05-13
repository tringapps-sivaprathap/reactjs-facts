import ReactLogo from '../assets/react-logo.png';

const Navbar = () => {
    return (
        <nav>
            <img src={ReactLogo} alt='react-logo' className="nav-icon" />
            <h3 className="nav-logo_text">ReactFacts</h3>
        </nav>
    );
}

export default Navbar;