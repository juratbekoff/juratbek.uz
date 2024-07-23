"use client"

import {Header, WorkCard} from "@/components";
import {DoneWorks} from "@/static";
import {useState} from "react";

const Works = () => {
    const [category, setCategory] = useState<"WEB" | "TELEGRAM_BOT">("WEB");

    return (
        <div>
            <div className={"flex max-lg:flex-col max-lg:items-start max-lg:gap-3 justify-between items-end"}>
                <Header label="Recently done projects"/>

                <div className={"flex gap-2 items-center"}>
                    <span
                        className={`px-3 py-1 rounded-md cursor-pointer ${category === "WEB" ? "bg-purple-500 text-white" : "border border-black/20"}`}
                        onClick={() => setCategory("WEB")}
                    >
                        Website
                    </span>

                    <span
                        className={`px-3 py-1 rounded-md cursor-pointer ${category === "TELEGRAM_BOT" ? "bg-purple-500 text-white" : "border border-black/20"}`}
                        onClick={() => setCategory("TELEGRAM_BOT")}
                    >
                        Telegram bot
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-5 mt-5 max-md:grid-cols-1 mb-32">
                {DoneWorks
                    .sort((a, b) => b.id - a.id)
                    .filter((work => work.category === category))
                    .map((item) => {
                        return (
                            <WorkCard
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                project_link={item.project_link}
                                category={item.category}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default Works;
