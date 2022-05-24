import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.intit';
import './MyProfile.css'

const MyProfile = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='setting h-screen  mt-20 '>
            <div className="setting-1">
                <div className="setting2">

                    <span className='accUp'>Update Your Account</span>
                    <button className='btn btn-outline hover:btn-error' >
                        <span className='delAcc'>Delete Account</span>
                        <i className="editIcon fas fa-trash ml-4 text-red-500"></i>
                    </button>
                </div>
                <form className='formSetting'>
                    <label htmlFor="">Profile Picture</label>
                    <div className="settingImg" >
                        <img src="https://media.cdnandroid.com/item_images/991883/imagen-cute-wallpapers-glamorous-kawaii-cool-sparkly-0big.jpg"
                            alt="" />
                        <label htmlFor="FileInput">
                            <i className="updatePic fas fa-user"></i>
                            <span className='text-xs text-info'>Click here</span>
                            <input type="file" id='FileInput' style={{ display: "none" }} />

                        </label>
                    </div>
                    <div className="settingForm ">
                        <label >username</label>
                        <input type="text" value={user?.displayName} />
                        <label >Email</label>
                        <input type="text" value={user?.email} />
                        <label >Profession</label>
                        <input type="text" />

                        <label >Education</label>
                        <input type="text" />
                        <label >District</label>
                        <input type="text" />
                        <label >Your Hoby</label>
                        <input type="text" />
                    </div>
                    <button className='settingBtn' >Update</button>
                </form>

            </div>

        </div>
    )
};

export default MyProfile;