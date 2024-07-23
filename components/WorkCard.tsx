import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Link from "next/link";

export interface WorkProps {
    id: number;
    name: string;
    project_link: string;
    category: "WEB" | "TELEGRAM_BOT"
}

const WorkCard = ({...data}: WorkProps) => {
    return (
        <div
            className="flex gap-5  border border-black/10 border-opacity-20 p-3 shadow  rounded max-md:flex-col"
        >
            <div className="flex flex-col gap-3 justify-between max-md:gap-2 ">
                <h1 className="text-xl font-semibold text-purple-800 max-md:text-[21px]">
                    {data.name}
                </h1>

                <Link
                    href={data.project_link}
                    target="_blank"
                    className="flex gap-1 text-indigo-600 cursor-pointer font-medium"
                >
                    <span>{data.category === "WEB" ? "Website" : "Telegram bot"}</span>
                    <OpenInNewIcon className="self-center" fontSize="small"/>
                </Link>

                {/*<ul className="flex flex-wrap gap-1">*/}
                {/*    {data.stacks.map((item) => {*/}
                {/*        return (*/}
                {/*            <li className="px-3 py-[1px] bg-purple-700 text-white rounded-sm shadow-md text-[12px] max-md:text-[12px]">*/}
                {/*                {item}*/}
                {/*            </li>*/}
                {/*        );*/}
                {/*    })}*/}
                {/*</ul>*/}
            </div>
        </div>
    );
};

export default WorkCard;
