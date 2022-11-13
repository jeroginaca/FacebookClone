import React from 'react'
import Post from '../post/Post.jsx';

const Posts = () => {

    //TEMPORARY
    const posts = [
        {
            id: 1,
            name: "Jero Ginaca",
            userId: 1,
            profilePic: "http://jeronimoginaca.com/01%20-%20Freelance%20WEB/images/72ppi/Perfil%20ilust.png",
            desc:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora neque ea cupiditate? Placeat ipsam doloremque reprehenderit, iusto praesentium odit fugiat?",
            img: "https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
        },
        {
            id: 2,
            name: "Jero Ginaca",
            userId: 2,
            profilePic: "http://jeronimoginaca.com/01%20-%20Freelance%20WEB/images/72ppi/Perfil%20ilust.png",
            desc:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora neque ea cupiditate? Placeat ipsam doloremque reprehenderit, iusto praesentium odit fugiat?",
           
        },
        {
            id: 1,
            name: "Jero Ginaca",
            userId: 1,
            profilePic: "http://jeronimoginaca.com/01%20-%20Freelance%20WEB/images/72ppi/Perfil%20ilust.png",
            desc:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora neque ea cupiditate? Placeat ipsam doloremque reprehenderit, iusto praesentium odit fugiat?",
            img: "https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
        },
        {
            id: 2,
            name: "Jero Ginaca",
            userId: 2,
            profilePic: "http://jeronimoginaca.com/01%20-%20Freelance%20WEB/images/72ppi/Perfil%20ilust.png",
            desc:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora neque ea cupiditate? Placeat ipsam doloremque reprehenderit, iusto praesentium odit fugiat?",
           
        },
        {
            id: 1,
            name: "Jero Ginaca",
            userId: 1,
            profilePic: "http://jeronimoginaca.com/01%20-%20Freelance%20WEB/images/72ppi/Perfil%20ilust.png",
            desc:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora neque ea cupiditate? Placeat ipsam doloremque reprehenderit, iusto praesentium odit fugiat?",
            img: "https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
        },
        {
            id: 2,
            name: "Jero Ginaca",
            userId: 2,
            profilePic: "http://jeronimoginaca.com/01%20-%20Freelance%20WEB/images/72ppi/Perfil%20ilust.png",
            desc:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora neque ea cupiditate? Placeat ipsam doloremque reprehenderit, iusto praesentium odit fugiat?",
           
        },
    ];

  return (
   <div className="posts">
    {posts.map(post=>(
        <Post post={post} key={post.id}/>
    ))}

   </div>
  )
}

export default Posts
