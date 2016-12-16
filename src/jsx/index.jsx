import React from 'react';
import {render} from 'react-dom';
import List from './components/List.jsx';
import listData from '../../index.json';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1 className="site-name">{listData.title}</h1>
        <List listData={listData} />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
