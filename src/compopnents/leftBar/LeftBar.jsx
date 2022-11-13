import React, {useContext} from 'react'
import "./leftBar.scss"
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import { AuthContext } from '../../context/authContext';

const Leftbar = () => {

    const { currentUser } = useContext(AuthContext);
  return (
    <div className="leftBar">
        <div className="container">
            <div className='menu'>
                <div className="user">
                    <img src={currentUser.profilePic} alt="" /> 
                    <span>{currentUser.name}</span>
                </div>
                <div className="item">
                    <GroupRoundedIcon/>
                    <span>Friends</span>
                </div>
                <div className="item">
                    <GroupRoundedIcon/>
                    <span>Groups</span>
                </div>
                <div className="item">
                    <GroupRoundedIcon/>
                    <span>Marketplace</span>
                </div>
                <div className="item">
                    <GroupRoundedIcon/>
                    <span>Watch</span>
                </div>
                <div className="item">
                    <GroupRoundedIcon/>
                    <span>Memories</span>
                </div>
            </div>
            <hr />
            <div className="menu">
                <span>Your shorcuts</span>
                
                <div className="item">
                    <GroupRoundedIcon/>
                    <span>Friends</span>
                </div>
                <div className="item">
                    <GroupRoundedIcon/>
                    <span>Groups</span>
                </div>
                <div className="item">
                    <GroupRoundedIcon/>
                    <span>Marketplace</span>
                </div>
                <div className="item">
                    <GroupRoundedIcon/>
                    <span>Watch</span>
                </div>
                <div className="item">
                    <GroupRoundedIcon/>
                    <span>Memories</span>
                </div>
            </div>
            <hr />
            <div className="menu">
                <span>Others</span>
                <div className="item">
                    <GroupRoundedIcon/>
                    <span>Friends</span>
                </div>
                <div className="item">
                    <GroupRoundedIcon/>
                    <span>Groups</span>
                </div>
                <div className="item">
                    <GroupRoundedIcon/>
                    <span>Marketplace</span>
                </div>
                <div className="item">
                    <GroupRoundedIcon/>
                    <span>Watch</span>
                </div>
                <div className="item">
                    <GroupRoundedIcon/>
                    <span>Memories</span>
                </div>
            </div>
        </div>
   </div>
  )
}

export default Leftbar
