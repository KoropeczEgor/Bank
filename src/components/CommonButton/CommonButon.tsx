interface CommonButtonProps {
  btnText: string;
}

const CommonButton: React.FC<CommonButtonProps> = ({ btnText }) => {
  return (
    <button
      type="button"
      className="p-4 sm:p-5 rounded-lg w-fit capitalize bg-blue-gradient text-primary"
    >
      <a href="https://github.com/KoropeczEgor" target="_blank">
        {btnText}
      </a>
    </button>
  );
};

export default CommonButton;
