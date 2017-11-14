import React, { Component }  from 'react';
import FruitBasket from './FruitBasket';
import { getFruitBasket } from '../fruit'

// const App = () => <FruitBasket />;

class App extends Component {
  constructor() {
    super();

    this.state = {
      filters: [],
      fruit: [],
      currentFilter: null
    };
  }
  render(){
      return <FruitBasket filters={getFruitBasket}/>
  }
}

export default App;
