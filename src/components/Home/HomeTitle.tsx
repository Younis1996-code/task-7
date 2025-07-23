import React from 'react'

const HomeTitle = ({value ,value1} : {value: string, value1?:string}) => {
  return (
    <h3 className={`text-[4vw]/[100%] md:text-[2.5vw]/[100%] lg:text-[1.6667vw]/[100%] font-extrabold ${value1 ? value1 : ""}`}>{value} </h3>
  )
}

export default HomeTitle
