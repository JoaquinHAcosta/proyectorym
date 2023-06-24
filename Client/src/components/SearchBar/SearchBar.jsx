import style from "./SearchBar.module.css";
import style2 from "../Nav/Nav.module.css"
import { useState, useEffect } from "react";

const SearchBar = ({onSearch}) => {

   const [id, setId] = useState("")

   const handleChange = (e) => {
      setId(e.target.value)
   }

   useEffect(() => {
      setId("");
    }, [onSearch]);

   return (
      <div>
         <input className={style.input} type='search' onChange={handleChange} name="search" value={id}/>
         <button className={style2.buttonInput} onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}

export default SearchBar;
