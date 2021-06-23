import React,{useState} from 'react'
import styled,{ThemeProvider} from 'styled-components';
import Button from './elements/button'


const theme = {

  display:'inline-flex',
  justifyContent:'space-around',
  alignItems:'center',
  margin: '20px auto',
  color: 'teal'

}

const Div = styled.div`
height:auto;
width:60%;
margin:${(props)=> props.theme.margin};


`

const Img = styled.img`
display:flex;
width:100%;
height:auto;

`
const H4 = styled.h4`

color: ${(props)=> props.theme.color};
display:inline-flex;
margin:10px 5px 0 5px ;
padding:5px;
font-size:1rem;
`

const Span = styled.span`
margin-left:50px;
color:#03a2e0;
`




const Tours = ({id, name, info, image, price, removeTour}) => {

  const [readMore, setReadMore] = useState(false)
  return (
    <ThemeProvider theme={theme}>
    <Div>
      <main>
      <Img src={image} alt={name}/>
      </main>
      <footer>
      <H4>{name}<Span>${price}</Span></H4>
      

     <p> {readMore ? info : `${info.substring(0,200)}...`  } 
     <Button  primary onClick = {()=>setReadMore(!readMore)}>{readMore? 'Show less':'Read more'}</Button>
     </p>

     <Button onClick= {()=>removeTour(id)}>NOT INTERESTED</Button>

      

      </footer>

    </Div>
    </ThemeProvider>
  )
}

export default Tours
