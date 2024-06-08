import { useEffect, useState } from "react";

import Card from "./components/helpers/Card";
import CurrentCard from "./components/CurrentCard/CurrentCard";
import Loader from "./components/helpers/Loader";

import style from "./app.module.css";

import { getCoordinates, getCurrentData } from "./helperFunctions";
import ErrorScreen from "./components/ErrorScreen/ErrorScreen";

function App() {
  const [currentCoords, setCurrentCoords] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [haveError, setHaveError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const coords = await getCoordinates();
        setCurrentCoords([coords.coords.latitude, coords.coords.longitude]);
      } catch {
        setHaveError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (currentCoords) {
      (async () => {
        if (currentCoords === null) {
          return;
        }
        try {
          const response = await getCurrentData(currentCoords);
          setData(response);
          console.log(response)
        } catch {
          setHaveError(true);
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [currentCoords]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && data && !haveError && (
        <div className={style.main}>
          <CurrentCard data={data} />
          <Card classNames={style.card}>
            <h2 className={style.card__heading}>Wind Speed</h2>
            <h1 className={style.info}>{data.current.wind_kph} km/h</h1>
          </Card>
          <Card>
            <h2 className={style.card__heading}>Wind Direction</h2>
            <h1 className={style.info}>
              {data.current.wind_degree} ({data.current.wind_dir}){" "}
            </h1>
          </Card>
          <Card>
            <h2 className={style.card__heading}>Precipitation</h2>
            <h1 className={style.info}>{data.current.precip_mm}% </h1>
          </Card>
          <Card>
            <h2 className={style.card__heading}>Pressure</h2>
            <h1 className={style.info}>{data.current.pressure_mb} mb </h1>
          </Card>
          <Card>
            <h2 className={style.card__heading}>Humidity</h2>
            <h1 className={style.info}>{data.current.humidity}% </h1>
          </Card>
          <Card>
            <h2 className={style.card__heading}>Visiblity</h2>
            <h1 className={style.info}>{data.current.vis_km} km </h1>
          </Card>
        </div>
      )}
      {haveError && <ErrorScreen />}
    </>
  );
}

export default App;
