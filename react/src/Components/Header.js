import { Data, PlusMinus } from "../App";

function Header(props) {
  return (
    <header className="header">
      <PlusMinus section="header" handle={props.handle} />
      <div className="section-title">Header: {props.data.header}</div>
      <Data data={props.data} />
    </header>
  );
}

export default Header;
