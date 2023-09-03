export const MovieCard = (props) => {
  const { name, onFavouriteClick, isFavourite, description} = props;

  const handleClick = () => {
    console.log(`favourite clicked from handle onFaouvorite ${name} and ${description}`);
    onFavouriteClick(name);

  };

  return (
    <li>
      <article>
        <h3>{name}</h3>
        <p>{description}</p>
        <label>
          <button onClick={handleClick}>{isFavourite ? "☆" : "★"}</button>
        </label>
      </article>
    </li>
  );
};
