import Image from "next/image";
import useAnimateOnScroll from "../hooks/useAnimateOnScroll";
import profileImg from "../public/images/profile-img.webp";

const Avatar = () => {
  const { animatedElement } = useAnimateOnScroll<HTMLDivElement>("slide-right");

  return (
    <div ref={animatedElement} className="avatar">
      <Image src={profileImg} alt="profile image" placeholder="blur" />
    </div>
  );
};

export default Avatar;
