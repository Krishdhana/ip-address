import { useEffect, useState } from "react";
import Dashboard from "../components/dashboard";
import FullScreenLoading from "../components/fullscreen-loading";

export default function Home() {
  const [response, setResponse] = useState({});
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    fetch("https://geolocation-db.com/json/", { method: "GET" })
      .then((data) => data.json())
      .then((data) => {
        setResponse(data);
        setIsloading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <FullScreenLoading></FullScreenLoading>
      ) : (
        <Dashboard data={response}></Dashboard>
      )}
    </>
  );
}
