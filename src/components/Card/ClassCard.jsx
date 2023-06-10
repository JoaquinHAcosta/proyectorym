import React, { Component } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import iconX from "./x.png";
import iconFav from "./fav.png";

class Card extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isFav: false
      };
   }

   handleFavorite = () => {
      // Implementa la lógica para manejar el evento de favorito
   };

   render() {
      const { id, name, image, gender, species, origin, onClose } = this.props;
      const { isFav } = this.state;

      return (
         <div className={styles.nft}>
            <div className={styles.main}>
               <Link to={`/detail/${id}`}>
                  <img className={styles.tokenImage} src={image} alt="NFT" />
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
                  <div className={styles.wrapper}>
                     <img src={iconFav} alt="Creator" />
                  </div>
                  <div className={styles.wrapper} onClick={() => onClose(id)}>
                     <img src={iconX} alt="Creator" />
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export function mapDispatchToProps() {}

export default Card;
