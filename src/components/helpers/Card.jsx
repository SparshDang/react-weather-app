import React from 'react'

import style from './Card.module.css';

export default function Card({classNames, children}) {
  return (
    <div className={`${style.card} ${classNames} `}>
      {children}
    </div>
  )
}
