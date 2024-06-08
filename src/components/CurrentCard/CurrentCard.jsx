import React from "react";

import Card from "../helpers/Card";

import style from './CurrentCard.module.css';

export default function CurrentCard({data}) {
  return (
    <Card classNames={style.main__container}>
      <div className={style.weather}>
        <img
          src={data.current.condition.icon}
          alt=""
          className={style.image}
        />
        <p className={style.text}>{data.current.condition.text}</p>
        <h2>
          {data.current.temp_c}
          <sup>c</sup>
        </h2>
      </div>
      <div className={style.divider}></div>
      <div className={style.location}>
        <h1 className={style.city}>{data.location.name}</h1>
        <p>
          {data.location.region}, {data.location.country}
        </p>
        <p>{data.location.localtime}</p>
      </div>
    </Card>
  );
}
