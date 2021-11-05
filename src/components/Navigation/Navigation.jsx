import { NavLink } from "react-router-dom";

const Navigation = ()=> {
    return(
        <nav>
        <NavLink to="/" exact className="" activeClassName="">Home</NavLink>
        <NavLink to="/movies" className="" activeClassName="">Movies</NavLink>
        </nav>
    )
        
}

export default Navigation;