const Header = ({ title }) => {
  return (
    <div className="w-full text-center ">
      <p className="text-2xl font-bold mb-0.5">{title}</p>
      <hr className="border-0 h-px  bg-hr" />
    </div>
  );
};

export default Header;
