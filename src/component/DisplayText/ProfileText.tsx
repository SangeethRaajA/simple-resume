import { FC } from "react";

type ProfileData = {
    firstname: string;
    lastname: string;
    title: string;
    street?: string;
    city?: string;
    state?: string;
    phone: string;
    website?: string;
    mail: string;
  };

const ProfileText : FC<ProfileData>= () => {
  return (
    <>
    </>
  )
}

export default ProfileText