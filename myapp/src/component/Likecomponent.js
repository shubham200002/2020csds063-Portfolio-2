import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

export default function Likecomponent(props) {
    const [color, setColor] = useState(green);
    const [like, setLike] = useState(parseInt(props.count));
    const onclick = () => {
        if(color=='green'){
            setColor('black');
            setLikes(like-1);
        }
            else{
            setColor('green');
            setLikes(like+1);
        }
    };
  return (
    <div className="ms-5 mt-5">
    <span className="me-2">Like : {like}</span>
    <FontAwesomeIcon
    icon={faThumbsUp}
    size="2*1"
    color={color}
    onclick={onclick}
      />
    </div>
  )
}
