import { RxHamburgerMenu } from "react-icons/rx";
import "bootstrap/js/dist/dropdown"
import 'bootstrap/js/dist/collapse'
const AdminboardNavbar = ({ Toggle, logout, handlesettings, handledashboard}) => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark px-3" style={{backgroundColor:"#450e5d"}}>
                <span className="navbar-brand  fs-4" onClick={Toggle}><RxHamburgerMenu /></span>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <RxHamburgerMenu /></button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                            <li className="nav-item dropdown">
                            <a href="/" className="nav-link dropdown-toggle text-white"  id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Profile                       
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <a className="dropdown-item" style={{cursor:"pointer"}} onClick={handledashboard}>Profile</a>
                                <a className="dropdown-item" style={{cursor:"pointer"}} onClick={handlesettings}>Setting</a>
                                <a className="dropdown-item" style={{cursor:"pointer"}} onClick={logout} href="/">Logout</a>
                            </div>
                            </li>
                           
                        </ul>
                </div>
            </nav>
        </>
    );
}

export default AdminboardNavbar;