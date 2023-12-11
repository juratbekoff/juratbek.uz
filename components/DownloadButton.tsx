import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Link from "next/link";

const DownloadButton = () => {
  return (
    <Link
      href="/files/resume_juratbek.pdf"
      target="_blank"
      download={"Example pdf"}
      rel="noreferrer"
      className="cursor-pointer w-2/5 max-md:w-full max-md:flex max-md:justify-center"
    >
      <span className="py-2 px-5 bg-orange-600 text-white text-[19px] rounded-[3px] flex justify-center gap-1 max-md:text-[18px]">
        <FileDownloadOutlinedIcon style={{ fontSize: 25 }} />
        <span>Download CV</span>
      </span>
    </Link>
  );
};

export default DownloadButton;
