import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCharacter, fetchByUrl } from "../../api/api";
import styles from "./CharacterDescription.module.css";

export default function CharacterDescription() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [origin, setOrigin] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetchCharacter(id);
      setCharacter(res.data);

      if (res.data.origin.url) {
        const originRes = await fetchByUrl(res.data.origin.url);
        setOrigin(originRes.data);
      }

      const eps = await Promise.all(res.data.episode.map(fetchByUrl));
      setEpisodes(eps.map(e => e.data.name));
    }
    load();
  }, [id]);

  if (!character) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <img src={character.image} alt={character.name} />
      <h1>{character.name}</h1>
      <p>{character.gender} - {character.species}</p>

      {origin && <p>Origin: {origin.name} ({origin.dimension})</p>}

      <h3>Episodes</h3>
      <ul>
        {episodes.map(e => <li key={e}>{e}</li>)}
      </ul>
    </div>
  );
}
