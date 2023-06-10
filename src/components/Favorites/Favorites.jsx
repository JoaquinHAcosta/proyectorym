import Card from '../Card/Card';
import style from "../Cards/Cards.module.css"
import style2 from "./Favorites.module.css"
import { connect, useDispatch } from "react-redux"
import { filterCards, orderCards } from '../../redux/actions';
import { useState } from 'react';

const Favorites = ( {myFavorites} ) => {

   const dispatch = useDispatch()

   // const [ aux, setAux ] = useState(false)

   const handleOrder = (event) => {
      dispatch(orderCards(event.target.value));
      // setAux(!aux)
   }

   const handleFilter = (event) => {
      dispatch(filterCards(event.target.value))
   }

   return( 
      
         <div className={style.container}>
            <div className={style2.filters}>
               <select onChange={handleOrder} className={style2.classic}>
                  <option value="A">Ascendente</option>
                  <option value="D">Descendente</option>
               </select>
               <select onChange={handleFilter} className={style2.classic}>
                  <option value="allCharacters">All Characters</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Genderless">Genderless</option>
                  <option value="unknown">unknown</option>
               </select>
            </div>
          { myFavorites.map(({id, name, species, gender, image, origin, status}) => {
             return (
                <Card
                   key={id}
                   id={id}
                   name={name}
                   species={species}
                   gender={gender}
                   image={image}
                   origin={origin.name}
                   status={status}
                   onClose={() =>{alert("No puedes borrar tarjetas en favoritos")}}
                />
                )
             })
          }
       </div>
    );
 }

 const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
 }
 
 export default connect(mapStateToProps, null)(Favorites)