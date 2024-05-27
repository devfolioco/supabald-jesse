const Heading = ({ children, className }: { children: string; className?: string }) => {
  return <h1 className={`text-[56px] md:text-[68px] hero-heading ${className ?? ''}`}>{children}</h1>;
};

export default Heading;
