import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img
          className={s.imgProfileHeader}
          src="https://i.pinimg.com/originals/2b/be/aa/2bbeaa2cea6640da10dfec5f133a40de.jpg"
          alt="flowers"
        ></img>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt="userImage" />
        <div>{props.profile.fullName}</div>
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
        <div>{props.profile.aboutMe}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
