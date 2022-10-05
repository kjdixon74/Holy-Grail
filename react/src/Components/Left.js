import { Data, PlusMinus } from "../App";

function Left(props) {
  return (
    <aside className="left">
      <PlusMinus section="left" handle={props.handle} />
      <div className="section-title">Left: {props.data.left}</div>
      <Data data={props.data} />
    </aside>
  );
}

export default Left;
