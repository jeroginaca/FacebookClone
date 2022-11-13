import React, { useContext } from 'react'
import "./comments.scss";
import { AuthContext } from "../../context/authContext"

const Comments = () => {

    const {currentUser} = useContext(AuthContext)

    //TEMPORARY
    const comments = [
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
   <div className="comments">
    <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder='Write a comment' />
        <button>Send</button>
    </div>

    {
    comments.map(comment=>(
        <div className="comment">
            <img src={comment.profilePic} alt="" />
            <div className="info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
            </div>
            <span className='date'>1 hour ago</span>
        </div>
    ))
    } </div>
  )
}

export default Comments
