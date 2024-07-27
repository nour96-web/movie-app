import React from 'react'

const RateFiltre = (rating) => {
    function stars(rating) {
        let star = []
        for (let i=1 ; i<= 5 ; i++) {
            if (i=> rating) {
                star.push(<span style={{color:"gold"}}>★</span>)
            } else star.push(<span style={{color:"black"}}>☆</span>)
        }
        return star
    }
  return (
    <div>
{stars(rating)}
    </div>
  )
}

export default RateFiltre