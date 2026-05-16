import { useEffect, useState } from "react";

export default function GitHubStats() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/farazii1159")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  if (!data) return <p className="text-gray-400">Loading GitHub data...</p>;

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6">
      <h2 className="text-2xl font-bold mb-4">Live GitHub Stats</h2>

      <div className="space-y-2 text-gray-300">
        <p>👤 Name: {data.name}</p>
        <p>📦 Public Repos: {data.public_repos}</p>
        <p>👥 Followers: {data.followers}</p>
        <p>📍 Location: {data.location}</p>
      </div>
    </div>
  );
}