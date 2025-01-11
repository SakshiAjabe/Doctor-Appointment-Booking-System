import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

  const [userData ,setUserData] = useState({
    name:"edward vincent",
    image:assets.profile_pic,
    email:'richardjameswap@gamil.com',
    phone:'+1 123 456 7890',
    address: {
      line1:"57th Cross, Richmond",
      line2:"Circle, Chrurch Road, London"
    },

    gender:"Male",
    dob: '2000-01-20'

  })

  const [isEdit , setIsEdit] = useState(false)

  return (
    <div>
      
      <img src={userData.image} alt="" />

      {
        isEdit
        ? <input type="text" />
        : <p>{userData.name}</p>
      }

    </div>
  )
}

export default MyProfile
