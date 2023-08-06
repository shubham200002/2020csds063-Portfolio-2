import { FontAwesomeIcon } from '@fortawesome/react-Fontawesome';
import { faStar} from "@fortawsome/free-solid-svg-icon";
import React from 'react'

import App form './App';

export default function Rating(props) {
   
    let rating = props.rating;
    const arr = [];

    for (let i = 1; i <= 5; i++){
        if (i <= rating ) 
            arr.push(<FontAwesomeIcon icon={faStar} color="green" />);
        else 
            arr.push(<FontAwesomeIcon icon={faStar} />);
    }
  return (
    <div>
      {arr}
    </div>
  )
}
