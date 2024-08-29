import React from 'react'

const RateFiltre = ({rating ,handleStar}) => {
    function stars(rating) {
        let star = []
        for (let i=1 ; i<= 5 ; i++) {
            if (i <= rating) {
                star.push(<span onClick={()=>handleStar(i)} style={{color:"gold"}}>★</span>)
            } else {star.push(<span onClick={()=>handleStar(i)} style={{color:"black"}}>★</span>)}
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