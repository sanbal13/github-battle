import {NavLink} from 'react-router-dom';
function Header() {
    return <div className="container">
    <ul className='flex justify-start header'>        
        <li><NavLink to="/" exact activeClassName='active'>Popular</NavLink></li>
        <li><NavLink to="/battle" activeClassName='active'>Battle</NavLink></li>
    </ul>
    </div>
}
export default Header;