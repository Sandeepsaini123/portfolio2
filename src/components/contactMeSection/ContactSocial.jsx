import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/sandeepsaini123001/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Sandeepsaini123" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/sandeep._saini._/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
