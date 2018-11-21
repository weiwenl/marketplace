import React from "react";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const ProductList = (props) => {
  console.log("this is prpppppp", props.list);
  let queryList = props.list.map((l,index) =>
    (
      <Card key={index}>

        <CardMedia>
          <img src={l.props.children[0].props.src} alt={l.name} width="80%"/>
        </CardMedia>
        <CardContent>
          <h2>{l.key}</h2>
          <h2>S${l.props.children[2].props.children[1]}</h2>
        </CardContent>
        <hr />
      </Card>
    )
  );

  return <div>{queryList}</div>
}

export default ProductList
