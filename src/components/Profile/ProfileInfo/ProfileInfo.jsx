import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src="https://www.info7shot.com/wp-content/uploads/2020/08/Dadu-1-890x530.jpg" alt=""/>
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo