export const Container = ({ width = 1300, gap = 20, children, ...props }) => {
  const styled = {
    maxWidth: `${width}px`,
    margin: "0 auto",
    padding: `${gap}px`,
  };
  return (
    <div style={styled} {...props}>
      {children}
    </div>
  );
};
