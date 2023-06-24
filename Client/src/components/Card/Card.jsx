import styles from "./Card.module.css"
import iconX from "./x.png"
import iconFav from "./fav.png"
import iconFavOn from "./favOn.png"
import { Link } from "react-router-dom"
import { addFav, removeFav } from "../../redux/actions"
import { useState, useEffect } from "react"
import { connect } from "react-redux"

const Card = ({ id, name, image, gender, species, onClose, addFav, removeFav, myFavorites }) => {

   const [ isFav, setIsFav ] = useState(false)

   const handleFavorite = () =>{
      isFav ? removeFav(id) : addFav({id, name, gender, species, origin, image, onClose});
      setIsFav(!isFav)
    };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (

      <div className={styles.nft}>
         <div className={styles.main}>
         <Link to={`/detail/${id}`}>
            <img className={styles.tokenImage} src={image} alt={name} />
         </Link>
           <div className={styles.tokenInfo}>
               <div className={styles.price}>
                  <ins>◘</ins>
                  <p>{name}</p>
               </div>
               <div className={styles.duration}>
                  <ins>◷</ins>
                  <p>{species}</p>
               </div>
            </div>
            <hr />
            <div className={styles.creator}>
               <button onClick={handleFavorite} className={styles.wrapper}>
                        <img src={isFav ? iconFav : iconFavOn} alt="Fav" />
               </button>
               <button className={styles.wrapper}  
                  onClick={() => {onClose(id)}}>
                  <img src={iconX} alt="Close" />
               </button>
            </div>
         </div>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav : (id) => dispatch(removeFav(id)),
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);