import Link from "next/link";

import GitHubIcon from "@mui/icons-material/GitHub";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { FaTelegram } from "react-icons/fa";

const ContactDetails = () => {
  return (
    <div className="flex flex-col gap-3 text-[18px]">
      <div className="flex gap-2">
        <FaTelegram className="text-blue-500 self-center" size={22} />
        <Link href={"https://t.me/juratali"}>@juratali</Link>
      </div>

      <div className="flex gap-2">
        <GitHubIcon className="text-black" />
        <Link href={"https://github.com/juratbekoff"}>@juratbekoff</Link>
      </div>

      <Link href={"tel:+998934671270"} target="_blank" className="flex gap-2">
        <LocalPhoneOutlinedIcon />
        <span>+998 (93) 467-12-70</span>
      </Link>

      <div className="flex gap-2">
        <EmailOutlinedIcon />
        <span>juratdev@outlook.com</span>
      </div>
    </div>
  );
};

export default ContactDetails;
