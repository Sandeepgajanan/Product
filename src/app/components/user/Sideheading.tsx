interface SideheadingProps {
  title: string;
  highlight: string;
}

const Sideheading = ({ title, highlight }: SideheadingProps) => {
  return (
    <div className="text-center mb-8">
      <h2 className="text-5xl font-bold text-zinc-100 mb-4 max-sm:text-3xl">
        {title} <span className="text-[#27E0B3]">{highlight}</span>
      </h2>
      <div className="w-24 h-1 bg-[#27E0B3] mx-auto rounded-full mb-4" />
    </div>
  );
};

export default Sideheading;
