import {React,useState} from "react";
import {Button,Paper,Box} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import './navstyle.css';

export const Form = (props) => {
   const [data,setData]=useState({
      Name: "",
      Email: "",
   });
 const InputEvent=(event)=>{
   const { name, value} =event.target;
  
   setData((preVal)=>{
     return {
      ...preVal,
      [name]: value,
     }
   })
 };

 const formSubmit = (e)=>{
      e.preventDefault();
      alert(`Thankyou Very Much "${data.Name}" to Visit Hamza's Website.Your Mail "${data.Email}" has Received.I will respon to you soon!`);
 };


  return (
  <Paper component={Box} className='form'>
   <form onSubmit={formSubmit} className='formtext'>
     <TextField
     className="input"
       id="name"
       name="Name"
       type={'text'}
       label="Name"
       fullWidth
       variant="outlined"
       required
       onChange={InputEvent}
       value={data.Name}

     />
     <TextField
     className="input"
       id="email"
       name="Email"
       type={'email'}
       label="Email"
       fullWidth
       variant="outlined"
       required
       onChange={InputEvent}
       value={data.Email}
     />
     <TextField
     className="input"
       id="password"
       name="password"
       type={'password'}
       label="Password"
       variant="outlined"
       fullWidth
       required
     />
     <TextField
     className="input"
       id="Confirm Password"
       type={'password'}
       label="Confirm Password"
       fullWidth
       variant="outlined"
       required
     />
     <Button
       type="submit"
       fullWidth
       variant="contained"
       color="primary"
     >
       Submit
     </Button>
   </form>
  </Paper> 
 );
};