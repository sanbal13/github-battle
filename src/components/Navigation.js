import { NavLink } from 'react-router-dom';
function Navigation(props) {
  return (
    <div className="container navigation">
      <ul className="flex justify-center">
        <li>
          <NavLink
            onClick={() => props.handleNavigation('all')}
            to="/" exact
            activeClassName="active"
          >
            All
          </NavLink>{' '}
        </li>
        <li>
          <NavLink
            onClick={() => props.handleNavigation('Ruby')}
            to="/ruby"
            activeClassName="active"
          >
            Ruby
          </NavLink>{' '}
        </li>
        <li>
          <NavLink
            onClick={() => props.handleNavigation('Java')}
            to="/java"
            activeClassName="active"
          >
            Java
          </NavLink>{' '}
        </li>
        <li>
          <NavLink
            onClick={() => props.handleNavigation('Css')}
            to="/css"
            activeClassName="active"
          >
            CSS
          </NavLink>{' '}
        </li>
        <li>
          <NavLink
            onClick={() => props.handleNavigation('Python')}
            to="/python"
            activeClassName="active"
          >
            Python
          </NavLink>{' '}
        </li>
      </ul>
    </div>
  );
}
export default Navigation;
