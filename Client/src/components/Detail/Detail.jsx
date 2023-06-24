import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import styles from "./Detail.module.css"

const Detail = () => {

    const { id } = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
            .then(({ data }) => {
                if (data.name) {
                    setCharacter(data);
                    console.log(data);
                } else {
                    alert('No hay personajes con ese ID');
                }
            });
        return setCharacter({});
    }, [id]);

    return (
        <div className={styles.nft}>
            <div className={styles.main}>
                <img className={styles.tokenImage} src={character.image} alt="NFT" />
                <div className={styles.block}>
                    <div className={styles.tokenInfo}>
                        <div className={styles.price}>
                            <h2>{character.name}</h2>
                        </div>
                        <div className={styles.duration}>
                            <ins>◷</ins>
                            <p>{character.status}</p>
                        </div>
                    </div>
                    <p className={styles.description}>Location: {character.location?.name}</p>
                    {character.type !== "" && <p className={styles.description}>Type: {character.type}</p>}
                    <p className={styles.description}>Specie: {character.species}</p>
                    <p className={styles.description}>Gender: {character.gender}</p>
                    <p className={styles.description}>Origin: {character.origin?.name}</p>
                    <p className={styles.description}>Appears on: {character.episode?.length} episode/s</p>
                    <div className={styles.footer}>
                        <hr />
                        <div className={styles.creator}>
                            <div className={styles.wrapper}>
                                <img src={character.image} alt="Creator" />
                            </div>
                            <div className={styles.wrapper}>
                                <img src={character.image} alt="Creator" />
                            </div>
                            <div className={styles.wrapper}>
                                <img src={character.image} alt="Creator" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;