import { Data, PlusMinus } from "../App";

function Footer(props) {
  return (
    <footer className="footer">
      <PlusMinus section="footer" handle={props.handle} />
      <div className="section-title">Footer: {props.data.footer}</div>
      <Data data={props.data} />
    </footer>
  );
}

export default Footer;
