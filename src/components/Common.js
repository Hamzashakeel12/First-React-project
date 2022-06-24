import React from 'react';
import {Typography,Box,Paper,Button,Container,Grid} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import './navstyle.css';
import { PinDropSharp } from '@material-ui/icons';
function Common(props) {
  return (
    <>
    <Container>
      <Grid container justifyContent='space-between'>
        <Grid item lg={6} md={6} sm={12}>
          <Box className='homebox' pt={5}> 
            <Typography className='heading' variant='h3'>{props.name}<br/><strong>HAMZA PUMMOO</strong></Typography>
            <Typography className='text' variant='subtitle1'>We are the team of Talented Best Developers in The World.</Typography>
            <Button variant='outlined' className='btn' color='primary' component={NavLink} to={props.link}>{props.btn}</Button>
           </Box> 
        </Grid>
        <Grid item lg={5} md={5} sm={6}>
            <Box className='laptop-box'>
              <img src={props.img} alt='HOME IMAGE' width={'100%'} height={'400px'} className='animatepic'></img>
            </Box>
        </Grid>
      </Grid>
     </Container> 
    </>
  )
}

export default Common