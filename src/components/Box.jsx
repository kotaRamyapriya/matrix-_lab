import React from "react";

const style = {
  width: "230px",
  height: "170px",
  //   top: "182px",
  //   left: "328px",
  borderRadius: "10px",
  backgroundColor: "#390554",
  color: "white",
  padding: "15px",
};

const Box = () => {
  return (
    <div style={style}>
      <h5>Basic info</h5>
      <table>
        <tr>
          <td>Name</td>
          <td>Ethirium</td>
        </tr>
        <tr>
          <td>Symbol</td>
          <td>ETH</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>#7890</td>
        </tr>
      </table>
    </div>
  );
};

export default Box;
