import { Link } from "react-router-dom";
import styles from './Card.module.css'
export default function Card({ character }) {
  return (
    <Link to={`/character/${character.id}`} className="styles.card">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>{character.species} - {character.status} -{character.gender}</p>
      {character.type && <p>{character.type}</p>}
    </Link>
  );
}
