import { Data, PlusMinus } from "../App";

function Right(props) {
  return (
    <aside className="right">
      <PlusMinus section="right" handle={props.handle} />
      <div className="section-title">Right: {props.data.right}</div>
      <Data data={props.data} />
    </aside>
  );
}

export default Right;
