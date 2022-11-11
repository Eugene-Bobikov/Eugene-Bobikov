import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
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
        <img src={profile.photos.large} alt="userImage" />
        <div>{profile.fullName}</div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        <div>{profile.aboutMe}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
