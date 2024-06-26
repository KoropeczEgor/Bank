interface CommonButtonProps {
  btnText: string;
}

const CommonButton: React.FC<CommonButtonProps> = ({ btnText }) => {
  return (
    <button
      type="button"
      className="p-4 sm:p-5 rounded-lg w-fit capitalize bg-cyan-400 text-primary hover:bg-cyan-400/50 active:bg-cyan-400/50  "
    >
      <a href="https://github.com/KoropeczEgor" target="_blank">
        {btnText}
      </a>
    </button>
  );
};

export default CommonButton;
