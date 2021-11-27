// write your CatList component here
import React from 'react';

const CatList = props => {
    console.log(props.catPics)
    const cats = props.catPics.map((cat) => (
        <img key={cat.id} src={cat.url} alt={cat.id}></img>
      ));
    return (
        <div>
            {cats}
        </div>
    )
}

export default CatList;