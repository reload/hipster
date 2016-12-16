import React from 'react';

class List extends React.Component {
  listItem (props) {
    let item = props.item;
    return (
      <li className="content-list-item">
        <a href={item.url} className="content-list-item__link-wrapper">
          <figure className="content-list-item__image">
            <img src={item.image} />
          </figure>
          <h2 className="content-list-item__title">{item.title}</h2>
          <p className="content-list-item__description">{item.description}</p>
        </a>
      </li>
    );
  }

  render () {
    let list = this.props.listData.items;
    let items = list.map((item) =>
      <this.listItem key={item.id} item={item} />
    );
    return (
      <ul className="content-list">
        { items }
      </ul>
    );
  }

}

export default List;
