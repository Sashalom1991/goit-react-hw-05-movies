import { NavLink } from "react-router-dom";
import s from './Navigation.module.css';

const Navigation = ()=> {
    return(
        <nav className={s.Nav}>
        <NavLink to="/" exact className={s.NavLink} activeClassName={s.NavLinkAct}>Home</NavLink>
        <NavLink to="/movies" className={s.NavLink} activeClassName={s.NavLinkAct}>Movies</NavLink>
        </nav>
    )
        
}

export default Navigation;