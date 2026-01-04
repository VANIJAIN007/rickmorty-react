import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ character }) {
  return (
    <Link to={`/character/${character.id}`} className="card">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>{character.species} - {character.status}</p>
    </Link>
  );
}
