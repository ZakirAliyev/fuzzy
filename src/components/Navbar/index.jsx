import "./index.scss";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <section id="navbar">
            <div className="navbar-left">
                <h1>FUZZY</h1>
            </div>
            <div className="navbar-right">
                <Link to={`/`}>Kəsişmə</Link>
                <Link to={`/birlesme`}>Birləşmə</Link>
                <Link to={`/inkar`}>İnkar</Link>
                <Link to={`/maxmin`}>MAXMİN</Link>
            </div>
        </section>
    );
}

export default Navbar;
