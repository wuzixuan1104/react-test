import React from "react";

class Desc extends React.Component {
  render() {
    let lists = this.props.lists;
    return (
      <div className="middle-desc">
        {lists.map(list => (
          <p key={list}>{list}</p>
        ))}
      </div>
    );
  }
}

export default Desc;
