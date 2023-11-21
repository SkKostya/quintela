interface IProps {
  onClick: () => void;
}

const BurgerButton = ({ onClick }: IProps) => {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center flex-col gap-1 group w-8 h-8 rounded hover:gap-1.5 hover:bg-white/20 active:bg-white/30 transition-all"
    >
      <span className="block w-6 h-[0.5px] bg-white" />
      <span className="block w-6 h-[0.5px] bg-white" />
      <span className="block w-6 h-[0.5px] bg-white" />
    </button>
  );
};

export default BurgerButton;
