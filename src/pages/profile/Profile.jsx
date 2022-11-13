import React from 'react'
import "./profile.scss"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Posts from '../../compopnents/posts/Posts.jsx';

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1503&q=80" alt="" className="cover" />
        <img src="http://jeronimoginaca.com/01%20-%20Freelance%20WEB/images/72ppi/Perfil%20ilust.png" alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://google.com" >
              <FacebookOutlinedIcon fontsize="large"/>
            </a>
            <a href="https://google.com">
            <InstagramIcon fontsize="large"/>
            </a>
            <a href="https://google.com">
            <TwitterIcon fontsize="large"/>
            </a>
            <a href="https://google.com">
            <LinkedInIcon fontsize="large"/>
            </a>
            <a href="https://google.com">
            <PinterestIcon fontsize="large"/>
            </a>
          </div>
          <div className="center">
            <span>Jero Ginaca</span>
            <div className="info">
             <div className="item">
              <PlaceIcon/>
              <span style={{fontSize: "12px"}}>Spain</span>
             </div>
             <div className="item">
              <LanguageIcon/>
              <span style={{fontSize: "12px"}}>jeroginaca.com</span>
             </div>
            </div>
              <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon/>
            <MoreVertOutlinedIcon/>
          </div>
        </div>
      <Posts />
      </div>
    </div>
  )
}

export default Profile
