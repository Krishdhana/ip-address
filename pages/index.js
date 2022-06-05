import Head from "next/head";
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
      <Head>
        <title>Find Your IP Address</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {isLoading ? (
        <FullScreenLoading></FullScreenLoading>
      ) : (
        <Dashboard data={response}></Dashboard>
      )}
    </>
  );
}
