import React from 'react'
import InputForm from './InputForm';
import {Grid,Container,Box} from '@material-ui/core';
import people from '../images/people.jpg';

function Contact() {
  return (
    <div>
    <Container>
     <Grid container>
       <Grid item lg={6} md={6} sm={12}>
      <InputForm/>
        </Grid>
        <Grid item lg={5} md={5} sm={6}>
            <Box className='laptop-box'>
              <img src={people} alt='HOME IMAGE' width={'100%'} height={'400px'} className='animatepic'></img>
            </Box>
        </Grid>
      </Grid>
     </Container> 
    </div>
  )
}

export default Contact