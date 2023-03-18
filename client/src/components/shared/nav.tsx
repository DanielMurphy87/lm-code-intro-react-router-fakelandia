import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/home" >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/confession" >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/misdemeanour" >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" >
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;