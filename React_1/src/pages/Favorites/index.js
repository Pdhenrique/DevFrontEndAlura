import Banner from "components/Banner";
import Card from "components/Card";
import Title from "components/Title";
import { useFavoriteContext } from "context/Favorite";
import styles from "./Favorites.module.css";


function Favorites() {
  const { favorite } = useFavoriteContext();



  return (
    <>
      <Banner image="favorite" />
      <Title>
        <h1>My Favorite</h1>
      </Title>
      <section className={styles.container}>
        {favorite.map((favorite) => {
          return <Card capa={favorite.cover} titulo={favorite.title} isFavorite={true} key={favorite.id} />;
        })}
      </section>
    </>
  );
}

export default Favorites;
