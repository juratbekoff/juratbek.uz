import { Header } from "@/components";
import { skillsItem } from "@/constants";

const Skills = () => {
  return (
    <div>
      <Header label="Skills" />

      <ul className="flex flex-col gap-2 mt-5">
        {skillsItem.map((item) => {
          return (
            <li key={item.key} className="list-disc text-xl ml-5">
              <b className="font-medium">{item.name}:</b>{" "}
              <span className="text-[18px]">{item.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;
