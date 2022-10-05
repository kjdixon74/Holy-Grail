import { Data, PlusMinus } from "../App";

function Article(props) {
  return (
    <article className="article">
      <PlusMinus section="article" handle={props.handle} />
      <div className="section-title">Article: {props.data.article}</div>
      <Data data={props.data} />
    </article>
  );
}

export default Article;
