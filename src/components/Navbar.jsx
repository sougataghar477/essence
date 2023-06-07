import { Link } from "react-router-dom";
import favourites from '../favourites.png';
function Navbar() {
    const links=['PERFUMES','GIFTS','STORIES','WHO WE ARE'];
    return <nav className=''>
        <div className="flex-end px-4 nav-bg"><Link to={'/favourites'}><img src={favourites}/></Link></div>
        <div  className='align-center nav-bg'><h1>Essence SPLIT</h1>
        <p className="charm">The Worlds Finest Perfumes</p>
        </div>
        <div className="nav-bg flex px-4 gap-4">
            <span className="perfumes" onMouseEnter={()=> console.log("1")}>PERFUMES <div></div></span>
            <Link to='/gifts'>GIFTS</Link>
            <Link to='/stories'>STORIES</Link>
            <Link to='/whoarewe'>WHO WE ARE</Link>
        </div>
    </nav>
}
export default Navbar;