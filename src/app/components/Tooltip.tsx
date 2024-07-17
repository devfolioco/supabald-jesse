const Tooltip = ({
  children,
  message,
}: {
  children: React.ReactElement | string;
  message: React.ReactElement | string;
}) => {
  return (
    <span className="inline-flex group relative max-w-max flex-col items-center justify-center">
      <span className="underline cursor-pointer">{children}</span>
      <span className="absolute left-1/2 top-10 ml-auto mr-auto min-w-max -translate-x-1/2 opacity-0 transform rounded-lg px-3 py-2 text-xs font-medium transition-opacity duration-300 group-hover:opacity-100 origin-top pointer-events-none">
        <span className="flex max-w-xs flex-col items-center shadow-lg">
          <span className="clip-bottom h-2 w-4 bg-gray-800"></span>
          <span className="rounded-2xl bg-[#273339] p-4 text-center text-xs text-white">{message}</span>
        </span>
      </span>
    </span>
  );
};

export default Tooltip;
