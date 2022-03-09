import '../style/objects/row.scss'; // Can be accessed elsewhere -> Use scoped style for more specific styles

const AppRow = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return <div className="o-row">{children}</div>;
};

export default AppRow;
