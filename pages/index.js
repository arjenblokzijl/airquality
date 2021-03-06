import Head from "next/head";
import { getDatabase, ref } from "firebase/database";
import { useList } from "react-firebase-hooks/database";
import "../firebase/client";
import Image from "next/image";

import Card from "https://framer.com/m/Card-4sci.js@YYSvlikKClLnCjswFqBI";

const ROOMS = [
  {
    title: "Voorkamer",
    backgroundColor: "#ff8887",
  },
  {
    title: "Entree",
    backgroundColor: "#4152d9",
  },
  {
    title: "Kantoortuin voor",
    backgroundColor: "#4152d9",
  },
  {
    title: "Kantoortuin achter",
    backgroundColor: "#4152d9",
  },
  {
    title: "Keuken",
    backgroundColor: "rgba(114, 37, 80, 1)",
  },
  {
    title: "404",
    backgroundColor: "#FFD376",
  },
  {
    title: "Gameroom",
    backgroundColor: "#ff8887",
  },
  {
    title: "Van Ittersumstraat",
    backgroundColor: "rgba(114, 37, 80, 1)",
  },
];

export default function Home() {
  const db = getDatabase();
  const roomRef = ref(db, "room/voorkamer/current");

  const [snapshots, loading, error] = useList(roomRef);

  const randomCo2 = (value, index) => {
    const int = parseInt(value);

    const min = int + index - 15;
    const max = int + index + 15;

    const result = Math.floor(Math.random() * (max - min + 1) + min);

    return result.toString();
  };

  const randomTemperature = (value, index) => {
    const float = parseFloat(value);

    const min = float - 1;
    const max = float + 1;

    const result = Math.random() * (max - min + 1) + min;

    return result.toFixed(1).toString();
  };

  const randomHumidity = (value, index) => {
    const float = parseFloat(value);

    const min = float - 5;
    const max = float + 5;

    const result = Math.random() * (max - min + 1) + min;

    return result.toFixed(1).toString();
  };

  return (
    <>
      <div className="min-h-full w-screen overflow-hidden relative bg-gray-800">
        <Head>
          <title>Air Quality</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="p-4 relative z-20 mx-auto max-w-sm pb-20">
          <div className="my-10 text-white">
            <div className="text-base">Pixelpillow HQ</div>
            <div className="text-2xl font-semibold">
              Indoor Air Quality Monitor
            </div>
          </div>

          {error && <strong>Error: {error}</strong>}
          {!loading && snapshots && (
            <>
              <div className="grid gap-3 cards-list">
                {ROOMS.map((item, index) => {
                  const co2 =
                    index === 0
                      ? snapshots[0].val()
                      : randomCo2(snapshots[0].val(), index);

                  const hum =
                    index === 0
                      ? snapshots[2].val()
                      : randomHumidity(snapshots[2].val(), index);

                  const tvoc =
                    index === 0
                      ? snapshots[1].val()
                      : randomCo2(snapshots[1].val(), index);

                  const temp =
                    index === 0
                      ? snapshots[3].val()
                      : randomTemperature(snapshots[3].val(), index);

                  return (
                    <Card
                      key={index}
                      roomName={item.title}
                      backgroundColor={item.backgroundColor}
                      co2={co2}
                      humidity={hum}
                      temperature={temp}
                      tvoc={tvoc}
                      co2Value={tvoc}
                      humValue={hum}
                      tempValue={temp}
                      tvocValue={tvoc}
                      variant="cart_list"
                    />
                  );
                })}
              </div>
            </>
          )}
        </main>
      </div>
    </>
  );
}
