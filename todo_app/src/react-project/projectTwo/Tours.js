import React from 'react'
import Tours1 from './Tours1'

const Tours = ({tours, removeTour}) => {

  return (
    <div>
{tours.map((tour)=>{

  

  return(
<><Tours1 key={tour.id} {...tour} removeTour = {removeTour}/></>
  )
})}
    
  </div>
)
    
 
}

export default Tours
