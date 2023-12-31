import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";

export const MovieList = (props) => {
  const { list } = props;
  const [favourites, setFavourites] = useState([]);

  const handleFavouriteClick = (movieName) => {

    console.log(`favourite clicked from ${movieName}`);


    


    let newFavourites = [...favourites];

    if (!favourites.includes(movieName)) {
      newFavourites = [...newFavourites, movieName];
    } else {
      newFavourites = newFavourites.filter((movies) => movieName != movies);
    }

    setFavourites(newFavourites);

    localStorage.setItem("favourites", JSON.stringify(newFavourites));
  };

  useEffect(() => {
    const localStorageData = localStorage.getItem("favourites");
    if(localStorageData){
      try{
        const storedFavourites = JSON.parse(localStorageData);

        setFavourites(storedFavourites);
      }catch(err){
        console.err("Error parsing favourite items from localStorage")
      }
    }
  }, []);



  return (
    <ul>
      {list.map((movie, index) => (
        <MovieCard
          key={index}
          name={movie.name}
          onFavouriteClick={handleFavouriteClick}
          isFavourite={favourites.includes(movie.name)}
          description={movie.descriptionprop}
        />
      ))}
    </ul>
  );
};
