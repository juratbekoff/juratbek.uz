const Header = ({ label }: { label: string }) => {
  return (
    <>
      <div className="flex flex-col pb-2 pt-8">
        <span className="text-3xl font-bold custom_gradient max-md:text-[27px]">
          {label}
        </span>
        <hr className="border border-b-[0.5px] border-neutral-800 opacity-30 mt-2 w-[10%] max-md:w-2/4" />
      </div>
    </>
  );
};

export default Header;
