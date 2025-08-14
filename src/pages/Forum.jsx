import { useEffect, useState } from "react";
import axios from "axios";

export default function Forum() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then(res => setPosts(res.data));
  }, []);

  const filtered = posts.filter(p => 
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      {filtered.map(post => (
        <div key={post.id} className="bg-white shadow p-4 rounded mb-4">
          <h3 className="font-bold">{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
