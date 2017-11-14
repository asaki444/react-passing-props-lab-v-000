import React, { Component } from 'react';

const FilteredFruitList =({ fruit, filter }) => {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     items: []
  //   };
  // }

  // componentWillMount() {
  //   fetch('/api/fruit')
  //     .then(response => response.json())
  //     .then(items => this.setState({ items }));
  // }


    const list = !filter || filter === 'all' ?  fruit : fruit.filter(i => i.fruit_type === filter);

    return (
      <ul className="fruit-list">
        {list.map((item, index) => <li key={index}>{item.char}</li>)}
      </ul>
    )
}
FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
}
export default FilteredFruitList;
