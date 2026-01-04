import { useEffect, useState } from "react";
import { fetchingCharacters } from "../../api/api";
import Card from "../../components/Card/Card";
import styles from "./Character.module.css";

export default function Character() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    fetchingCharacters({ page, name, status, gender, species, type })
      .then(res => setCharacters(res.data.results || []))
      .catch(() => setCharacters([]));
  }, [page, name, status, gender, species, type]);

  return (
    <div className={styles.container}>
      <h1>Rick & Morty Characters</h1>

      <div className={styles.filters}>
        <input 
          value={name}
          placeholder="Search by name"
          onChange={(e) => setName(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">All Status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">All Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <select value={species} onChange={(e) => setSpecies(e.target.value)}>
          <option value="">All Species</option>
          <option value="human">Human</option>
          <option value="alien">Alien</option>
        </select>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">All Type</option>
          <option value="Human with ants in his eyes">Human with ants in his eyes</option>
          <option value="Human with antennae">Human with antennae</option>
          <option value="Superhuman">Superhuman</option>
          <option value="Parasite">Parasite</option>
          <option value="Genetic experiment">Genetic experiment</option>
        </select>
      </div>

      <div className={styles.grid}>
        {characters.map(c => <Card key={c.id} character={c} />)}
      </div>

      <div className={styles.pagination}>
        <button onClick={() => setPage(p => Math.max(p - 1, 1))}>Prev</button>
        <button onClick={() => setPage(p => p + 1)}>Next</button>
      </div>
    </div>
  );
}
