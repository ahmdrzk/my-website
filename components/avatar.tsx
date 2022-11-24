import Image from "next/image";
import profileImg from "../public/images/profile-img.jpg";

const Avatar = () => {
  return (
    <div className="avatar">
      <Image src={profileImg} alt="profile image" placeholder="blur" />
    </div>
  );
};

export default Avatar;
