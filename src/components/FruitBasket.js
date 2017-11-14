import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({fruit,filter,handleChange, currentFilter, updateFilterCallback})=> {


  // handleFilterChange = event => {
  //   console.log('new filter: ', event.target.value);
  //   this.setState({ selectedFilter: event.target.value });
  // }


    return (
      <div className="fruit-basket">
        
        <Filter handleChange={updateFilterCallback} />
        <FilteredFruitList
          fruit={fruit}
          filter={currentFilter} />
      </div>
    );

}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: ()=>{}
}
export default FruitBasket;
