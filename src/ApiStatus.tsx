import { useEffect, useState } from "react";

type Hello = {
  message: string;
  serverTime: string;
};

const API_URL = import.meta.env.VITE_API_URL;

export default function ApiStatus() {
  const [data, setData] = useState<Hello | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/api/hello`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<Hello>;
      })
      .then(setData)
      .catch((err: Error) => setError(err.message));
  }, []);

  if (error) return <p>Could not reach the API: {error}</p>;
  if (!data) return <p>Waking up the server… this can take up to a minute.</p>;

  return (
    <p>
      {data.message} Server time: {new Date(data.serverTime).toLocaleString()}
    </p>
  );
}