import React from 'react'
import Page from './Page'
import style from './PaginationContainer.module.css'

const PaginationContainer = () => {
  const pages = [1,2,3,4,5,6,7,8,9,10]


  return (
    <div className={style.container}>
      <Page page="<" />
     {pages.map((page)=>{
      return <Page page={page} key={page}/>
     })}
      <Page page=">"/>
  </div>
  )
}

export default PaginationContainer