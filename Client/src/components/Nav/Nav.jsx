import SearchBar from "../SearchBar/SearchBar"
import style from "./Nav.module.css"
import { Link } from "react-router-dom"

const Nav = ( {onSearch, setAccess } ) => {

  const handleLogOut = () => {
    setAccess(false)
  }

    return(
        <div className={style.navBar}>
          <div>
            <Link to={"/home"}>
                <button className={style.buttonSB}>Home</button>
            </Link>
            <Link to={"/favorites"}>
                <button className={style.buttonSB}>Favorites</button>
            </Link>
          </div>
          <div>
            <SearchBar onSearch={onSearch}/>
          </div>
          <div>
            <Link to={"/about"}>
                <button className={style.buttonSB}>About</button>
            </Link>
            <button className={style.buttonSB} onClick={handleLogOut}>Log out</button>
          </div>
        </div>
    )
}

export default Nav;