import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import Loading from './Loading'
import Tours from './Tours'


const url = 'https://course-api.com/react-tours-project';


const App = () => {

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);


  const removeTour = (id) => {
   const newTours = tours.filter((tour)=>tour.id !== id);
   setTours(newTours);
  }


  const fetchTours = async () => {
    const res = await fetch(url);
    const tours = await res.json()
    setLoading(false)
    setTours(tours)
   
  }

  useEffect(() => {
    fetchTours()
    
  }, [])


  if(loading){
    return(
    <main>
    <h1><Loading/></h1>
    </main>
    )
  }

  if(tours.length === 0){
    return(
      <main>
      <h3>No Tours Left</h3>
      <br/><br/>
      <button onClick={()=>fetchTours()}>Refresh</button>
      </main>
    )
  }

return (
  <div>
  <h1> Tours for families</h1>
 <Tours tours={tours} removeTour={removeTour}/>
  </div>
)
}

export default App