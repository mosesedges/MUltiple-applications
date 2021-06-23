import styled from 'styled-components';

export default styled.button`
color:${props =>(props.primary?'white':'red')};
background:${props =>(props.primary?'#0383b6':'snow-white')};
border:${props =>(props.primary?'2px outset #0383b6':'2px solid  red')};
font-size:0.8rem;
padding:2px;
border-radius:${props =>(props.primary?'5px':'none')};;
&:hover{
  background: ${props =>(props.primary?'teal':'none')};
  border:${props =>(props.primary?'2px outset #0383b6':'3px solid  red')};
  text-decoration:${props =>(props.primary?'none':'underline')};
  
  
 
 
}
`