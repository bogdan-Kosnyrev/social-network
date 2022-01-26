import React from 'react'
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/preloader/Preloader";

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div>
      <div>
        <img src="https://www.info7shot.com/wp-content/uploads/2020/08/Dadu-1-890x530.jpg" alt=""/>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large}/>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo