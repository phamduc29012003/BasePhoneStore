const OptionButton = ({ Icon, sizeIcon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${sizeIcon} w-[36px] h-[34px] bg-[#fff] rounded-lg flex items-center justify-center`}
    >
      <Icon />
    </button>
  );
};

export default OptionButton;
