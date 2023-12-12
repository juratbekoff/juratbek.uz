import Image from "next/image";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Link from "next/link";

export interface WorkProps {
  id: number;
  name: string;
  project_link: string;
  image: string;
  stacks: string[];
}

const WorkCard = ({ ...data }: WorkProps) => {
  return (
    <div className="flex gap-5  border border-neutral-700 border-opacity-20 p-3 shadow-md  rounded-md max-md:flex-col">
      <Image
        src={data.image}
        alt="not loaded"
        width={150}
        height={100}
        className="max-md:h-40 h-[140px] max-md:w-full border border-neutral-800 border-opacity-20 shadow-sm"
      />

      <div className="flex flex-col gap-3 justify-between max-md:gap-2 ">
        <h1 className="text-2xl font-semibold text-purple-800 max-md:text-[21px]">
          {data.name}
        </h1>

        <Link
          href={data.project_link}
          target="_blank"
          className="flex gap-1 text-indigo-600 cursor-pointer font-medium"
        >
          <span>Link to website</span>
          <OpenInNewIcon className="self-center" fontSize="small" />
        </Link>

        <ul className="flex flex-wrap gap-1">
          {data.stacks.map((item) => {
            return (
              <li className="px-3 py-[1px] bg-purple-700 text-white rounded-sm shadow-md text-[12px] max-md:text-[12px]">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default WorkCard;
