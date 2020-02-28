import React from "react";

class Desc extends React.Component {
  render() {
    let lists = this.props.lists;
    return (
      <div class="middle-desc">
        {lists.map(list => (
          <p>{list}</p>
        ))}
      </div>
    );
  }
}

export default Desc;
