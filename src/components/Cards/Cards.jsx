import Card from '../Card/Card';
import style from "./Cards.module.css"
import { connect } from "react-redux"
import { removeFav } from '../../redux/actions';

const Cards = ( {characters, onClose} ) => {
   return( 
      <div className={style.container}>
         { characters.map(({id, name, species, gender, image, origin, status}) => {
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
                  onClose={onClose}
               />
               )
            })
         }
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      removeFav: (id) => dispatch(removeFav(id)) 
   }
}


export default connect(null, mapDispatchToProps)(Cards)
