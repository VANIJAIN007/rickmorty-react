import { useEffect, useState } from "react";
import { fetchingCharacters } from "../../api/api";
import Card from "../../components/Card/Card";

export default function Character() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetchingCharacters({ page, name, status })
      .then(res => setCharacters(res.data.results || []))
      .catch(() => setCharacters([]));
  }, [page, name, status]);

  return (
    <div>
      <h1>Rick & Morty Characters</h1>

      <input
        placeholder="Search by name"
        onChange={(e) => setName(e.target.value)}
      />

      <select onChange={(e) => setStatus(e.target.value)}>
        <option value="">All</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <div className="grid">
        {characters.map(c => (
          <Card key={c.id} character={c} />
        ))}
      </div>

      <button onClick={() => setPage(p => Math.max(p - 1, 1))}>Prev</button>
      <button onClick={() => setPage(p => p + 1)}>Next</button>
    </div>
  );
}
