import { useFavoriteContext } from "context/Favorite";
import styles from "./Card.module.css";
import iconFavorite from "./favorite.png";
import iconDisfavor from "./disfavor.png";
import { Link } from "react-router-dom";

function Card({ id, titulo: title, capa: cover, isFavorite }) {
  const {  addFavorite } = useFavoriteContext();
   
  const icon = isFavorite ? iconDisfavor : iconFavorite;


  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={cover} alt={title} className={styles.capa} />
        <h2>{title}</h2>
      </Link>
      <img
        src={icon}
        alt="favorite movie"
        className={styles.favorite}
        onClick={() => {
          addFavorite({ id, title, cover });
        }}
      />
    </div>
  );
}

export default Card;
