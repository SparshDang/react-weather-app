import React from 'react'

import style from './ErrorScreen.module.css';

export default function ErrorScreen() {
  return (
    <div className={style.overlay}>
      <div className={style.info}>
        <h1>An Error Ouccured</h1>
        <p>Not have geolocation api or does not give the permission.</p>
        <p>Please give permission to access location or reload the page</p>
      </div>
    </div>
  )
}
