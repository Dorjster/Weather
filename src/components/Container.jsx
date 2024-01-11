const Container = ({ children }) => {
  return (
    <div className="w-[1300px] h-[950px] bg-gray-100 pl-14 pt-8 rounded-3xl flex flex-col gap-8 overflow-hidden">
      {children}
    </div>
  );
};

export default Container;
