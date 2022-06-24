import React, {useState} from 'react'
import Home from './Home.js';
import Contact from './Contact.js';
import About from './About.js';
import Service from './Service.js';
import './navstyle.css';
import {Typography,AppBar,Toolbar,Button,IconButton,Menu,MenuItem} from "@material-ui/core" 
import {
     BrowserRouter as Router,
     NavLink,
     Routes,
     Route,
     Navigate
    } from 'react-router-dom';

import {makeStyles} from '@material-ui/core/styles';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';


   const useStyles= makeStyles((theme)=>({
     
     btndesign: {
      fontSize:'20px',
      marginRight:'1.5rem',
     },
    menu:{
        display:'none',
      [theme.breakpoints.up('md')]:{
        display: 'flex',
      },  
    },
    iconhide:{
      display:'flex',
    [theme.breakpoints.up('md')]:{
      display: 'none',
    },  
  },

   }));


function Navbar() {
    const classes=useStyles();
    const [mobileMenuAnchorEl,setMobileMenuAnchorEl]=useState(null);
    const isMobileMenuOpen=Boolean(mobileMenuAnchorEl);
    const openMobileMenu=(event)=>{
      setMobileMenuAnchorEl(event.currentTarget);
    };
    const closeMobileMenu=()=>{
      setMobileMenuAnchorEl(null);
    };
    const mobileMenu=(
      <Menu anchorEl={mobileMenuAnchorEl} id='mobile-menu' keepMounted open={isMobileMenuOpen} onBlur={closeMobileMenu}>
        <MenuItem component={NavLink} to='/' onClick={closeMobileMenu} >HOME</MenuItem>
        <MenuItem component={NavLink} to='/about' onClick={closeMobileMenu}>ABOUT</MenuItem>
        <MenuItem component={NavLink} to='/service' onClick={closeMobileMenu}>SERVICE</MenuItem>
        <MenuItem component={NavLink} to='/contact' onClick={closeMobileMenu}>CONTACT</MenuItem>
      </Menu>
    )
  return (
    <>
    <Router>
   <AppBar position='static'>
    <Toolbar className='appbar'>
        <Typography variant='h5' style={{ flexGrow:1 }}>WELCOME</Typography>
        <div className={classes.menu}>
        <Button color='inherit' className={classes.btndesign}  component={NavLink} to='/'>HOME</Button>
        <Button color='inherit' className={classes.btndesign} component={NavLink} to='/about'>ABOUT</Button>
        <Button color='inherit' className={classes.btndesign} component={NavLink} to='/contact'>CONTACT</Button>
        <Button color='inherit' className={classes.btndesign} component={NavLink} to='/service'>STORE</Button>
        </div>
        <IconButton className={classes.iconhide} color='inherit' onClick={openMobileMenu}>
            <ListOutlinedIcon/>
        </IconButton>
    </Toolbar>
   </AppBar>
   {mobileMenu}
      <Routes>
        <Route path='/' element={<Home/>}>
        </Route>
        <Route path='/about' element={<About/>}>
        </Route>
        <Route path='/contact' element={<Contact/>}>
        </Route>
        <Route path='/service' element={<Service/>}>
        </Route>
        <Route path="/" element={<Navigate replace to="/" />} />
    </Routes>
    </Router>
    </>
  )
}

export default Navbar