import { Header, WorkCard } from "@/components";
import { DoneWorks } from "@/static";

const Works = () => {
  return (
    <div className="pb-16">
      <Header label="Recently done projects" />

      <div className="grid grid-cols-2 gap-5 mt-5 max-md:grid-cols-1">
        {DoneWorks.map((item) => {
          return (
            <WorkCard
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              stacks={item.stacks}
              project_link={item.project_link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Works;
