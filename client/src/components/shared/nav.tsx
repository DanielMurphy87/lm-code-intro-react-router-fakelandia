import { NavLink } from 'react-router-dom';

const activeStyle = {
    color: "blue",
    fontWeight: "bold"
};

const inactiveStyle = {
    color: "black",
    textDecoration: "none"
};

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/home"
                        style={({ isActive }) =>
                            isActive ? activeStyle : inactiveStyle
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/confession"
                        style={({ isActive }) =>
                            isActive ? activeStyle : inactiveStyle
                        }
                    >
                        Confession
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/misdemeanour"
                        style={({ isActive }) =>
                            isActive ? activeStyle : inactiveStyle
                        }
                    >
                        Misdemeanour
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about"
                        style={({ isActive }) =>
                            isActive ? activeStyle : inactiveStyle
                        }
                    >
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;