import {React,useState,useEffect} from 'react'
import {Typography} from '@material-ui/core'
import axios from 'axios';
import './navstyle.css';


function Service() {
    const [posts,setPosts]=useState([])
    useEffect(() =>{
        axios.get('https://fakestoreapi.com/products')
        .then(res =>{
          console.log(res) 
          setPosts(res.data)
        })
        .catch(err =>{
          console.log(err)
          alert(`ERROE AA GYA HAI SHAYED !!!`)
        })
    },[])

  return (
    <>
    <Typography variant='h3' className='service-heading' >Our Services</Typography>
    <div id='cards'>
      {
        posts.map((post) =>(
            <div className="card" key={post.id}>
            <h1 className="title">{post.title}</h1>
            <img src={post.image} alt="img" className="images" />
            <p>{post.description}</p>
            <p className="category">${post.category}</p>
            <p className="price">${post.price}</p>
           </div>
        ))
      }

    </div>
   </>
  )
}

export default Service