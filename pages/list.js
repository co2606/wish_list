import { Component } from "react";
import ListItem from "../components/ListItem.js";
import ListHeader from "../components/ListHeader.js";

class List extends Component {
  state = {
    title: "",
    url: "",
    notes: "",
  };

  render() {
    return (
      <div className="flow-root mt-4 ml-4 mr-4">
        <ListHeader />

        <ul className="-my-2 ml-4 mr-4 divide-y divide-gray-200">
          <li></li>
          <ListItem />
        </ul>
      </div>
    );
  }
}

export default List;
