import { Component } from "react";
import ListItem from "../components/ListItem.js";
import ListHeader from "../components/ListHeader.js";
import ListForm from "../components/ListForm";

class List extends Component {
  state = {
    title: "",
    url: "",
    notes: "",
  };

  render() {
    return (
      <div>
       <ListForm />
        <div className="flow-root mt-4 ml-4 mr-4">
          <ListHeader />

          <ul className="-my-2 ml-4 mr-4 divide-y divide-gray-200">
            <li></li>
            <ListItem />
          </ul>
        </div>
      </div>
    );
  }
}

export default List;
