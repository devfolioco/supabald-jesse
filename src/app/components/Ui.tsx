const Ui = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={`ui-text ${className} text-[20px] md:text-[22px]`}>{children}</div>;
};

export default Ui;
