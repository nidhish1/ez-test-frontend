import React from 'react';
import {useForm} from "react-hook-form"
import React, {useState,  useEffect} from 'react'
import axios from 'axios'



export const FormField = () => {

    const {register, handleSubmit,errors } = useForm()

    const onSubmit=(data) => {
        console.log(data)
    }

    const [posts, setPosts] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(() => {
      const fetchPost = async() => {
        setLoading(true)
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(res.data)
        setLoading(false)
      }
  
      fetchPost()
    },[])

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
            <input type = "text" placeholder="Email" name = "email" ref={register}/>
            <input type = "password" placeholder="Password" name = "password" ref={register ({required:true, minLength:8})}/>

            {errors.password && <p>invalid Password</p>}
            <input type = "submit"/>
            </form>
           
        </div>
    )
}

export default FormField
