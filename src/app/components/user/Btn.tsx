import Link from "next/link";

interface BtnProps {
  href: string;
  text: string;
}

const Btn = ({ href, text }: BtnProps) => {
  return (
    <Link
      href={`/user/${href}`}
      className="bg-zinc-700 text-zinc-100 px-4 py-2 rounded-md font-bold flex items-center gap-2 hover:bg-[#27E0B3] hover:text-zinc-900 transition-all duration-300 max-sm:px-3 max-sm:py-1 max-sm:text-xs group w-fit "
    >
      {text}
      <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
    </Link>
  );
};

export default Btn;
