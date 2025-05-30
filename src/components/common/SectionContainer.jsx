export const SectionContainer = ({ className, children, ...others }) => {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 lg:px-8 ${className}`} {...others}>
      {children}
    </div>
  );
};

