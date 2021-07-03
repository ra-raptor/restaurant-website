import React from "react";

function TableRow({ dish, category, price, amount }) {
  return (
    <tr>
      <td class="column1">{dish}</td>
      <td class="column2">{category}</td>
      <td class="column3">&#8377; {price}</td>
      <td class="column4">{amount}</td>
      <td class="column5">
        <a style={{ textDecoration: "none" }} href="/">
          More Details..
        </a>
      </td>
      <td class="column6">
        <div className="buy">BUY</div>
      </td>
    </tr>
  );
}

export default TableRow;
