const Ui = ({ children, className }: { children: string; className?: string }) => {
  return <div className={`ui-text ${className}`}>{children}</div>;
};

export default Ui;
