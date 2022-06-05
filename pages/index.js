import Head from "next/head";
import { useEffect, useState } from "react";
import Dashboard from "../components/dashboard";
import FullScreenLoading from "../components/fullscreen-loading";

import AddLocationIcon from "@mui/icons-material/AddLocation";

export default function Home() {
  const [response, setResponse] = useState({});
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    fetch("http://ip-api.com/json", { method: "GET" })
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
        <link href="../public/favicon.png" />
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
