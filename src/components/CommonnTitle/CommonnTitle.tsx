interface CommonTitleProps {
  title: string;
}

const CommonTitle: React.FC<CommonTitleProps> = ({ title }) => {
  return (
    <h1 className="text-3xl ss:text-4xl md:text-5xl leading-normal sm:leading-relaxed md:leading-relaxed font-semibold">
      {title}
    </h1>
  );
};

export default CommonTitle;
