import React from 'react'
import style from './Page.module.css'

const Page = ({page}) => {
  return (
    <span className={style.page}>{page}</span>
  )
}

export default Page