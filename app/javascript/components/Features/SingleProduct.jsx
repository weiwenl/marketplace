import React from "react";

const SingleProduct = (props) => {
  console.log("this is prpppppp", props.games);
  const topGames = props.games.map((g,index) =>
    (
      <div key={index}>
        <h2>{g.key}</h2>
        <img src={g.props.children[1].props.src} alt={g.name} />
        <h6>{g.props.children[2].props.children}</h6>
      </div>
    )
  );

  return <div>{topGames}</div>
}

export default SingleProduct
