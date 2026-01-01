import React from "react";

class CartClass extends React.Component {
  constructor(props) { // this is optional
    super(props);
  }

  render() {
    return (
      <>
        <h1>This is class based component in React</h1>
        <p>{this.props.name}</p>
      </>
    );
  }
}

export default CartClass;
