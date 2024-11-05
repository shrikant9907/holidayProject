import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UserDashboard = () => {

  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setBlogs(response?.data)
      // console.log(response.data);
      

    }
    fetchBlogs()
  },[])
  return (
    <div>
      {blogs?.map((blog) => (
        <div>
          <h3>{blog.title }</h3>
        </div>
     ))}
    </div>
  )
}

export default UserDashboard