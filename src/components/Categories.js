import React from "react";
import "../styles/Special.css";
import TableRow from "../TableRow";
function Categories() {
  return (
    <section className="Categories full-height">
      <h2>What's Special Today?</h2>
      <hr className="hr-title" />
      <div className="special-wrapper">
        <table>
          <thead>
            <tr class="table100-head">
              <th class="column1">Dish</th>
              <th class="column2">Category</th>
              <th class="column3">Price</th>
              <th class="column4">Quantity</th>
              <th class="column5">More Details</th>
              <th class="column6">Buy Now</th>
            </tr>
          </thead>
          <tbody>
            <TableRow
              dish="Kadhai Chicken"
              category="Non Veg"
              price="270"
              amount="1"
            />
            <TableRow
              dish="Paneer Pizza"
              category="Italian"
              price="390"
              amount="2"
            />
            <TableRow
              dish="Masala Dosa"
              category="South Indian"
              price="160"
              amount="1"
            />
            <TableRow
              dish="Veg Biryani"
              category="Lunch"
              price="119"
              amount="1"
            />
            <TableRow
              dish="Paneer Pakora"
              category="Snacks"
              price="105"
              amount="7"
            />
            <TableRow
              dish="Chicken Pasta"
              category="Non Veg"
              price="199"
              amount="1"
            />
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Categories;
