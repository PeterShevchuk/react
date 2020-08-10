import React from "react";
import "./FiltersBlock.css";

import sizes from '../../db/sizes.json';
import SingleFilter from '../SingleFilter/SingleFilter'

const FiltersBlock = () => {
  return (
    <div className="filters">
      <h4 className="title">Sizes:</h4>
      {sizes.map(size => <SingleFilter  key={size} value={size}/>)}
    </div>
  );
};

export default FiltersBlock;
