import { Component } from "react";
import EasyEdit, { Types } from "react-easy-edit";
//import ListItem from "../components/ListItem.js";
import ListHeader from "../components/ListHeader.js";
import ListForm from "../components/ListForm";

class List extends Component {
  state = {
    message: "",
    title: "",
    name: "",
    url: "",
    note: "",
    addItemClicked: false,
  };

  handleAddItem = () => {
    this.setState({ addItemClicked: true });
  };

  saveMessage = (value) => {
    this.setState({ message: value });
    console.log(this.state);
  };
  saveTitle = (value) => {
    this.setState({ title: value });
    console.log(this.state);
  };
  saveName = (value) => {
    this.setState({ name: value });
    console.log(this.state);
  };
  saveUrl = (value) => {
    this.setState({ url: value });
    console.log(this.state);
  };
  saveNote = (value) => {
    this.setState({ note: value });
    console.log(this.state);
  };
  cancel = () => {
    console.log("Cancelled", this.state);
  };

  render() {
    return (
      <div>
        <ListHeader
          onSaveMessage={(value) => {
            this.saveMessage(value);
          }}
          onSaveTitle={(value) => {
            this.saveTitle(value);
          }}
          onCancel={() => {
            this.cancel();
          }}
        />
        <button
          onClick={() => {
            this.handleAddItem();
            console.log("add item to list");
          }}
          type="submit"
          class="ml-3 inline-flex justify-center py-.5 px-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add an Item
        </button>
        <ListForm
          onSaveName={(value) => {
            this.saveName(value);
          }}
          onSaveUrl={(value) => {
            this.saveUrl(value);
          }}
          onSaveNote={(value) => {
            this.saveNote(value);
          }}
          onCancel={() => {
            this.cancel();
          }}
        />

        {this.state.addItemClicked ? (
          <ListForm
            onSaveName={(value) => {
              this.saveName(value);
            }}
            onSaveUrl={(value) => {
              this.saveUrl(value);
            }}
            onSaveNote={(value) => {
              this.saveNote(value);
            }}
            onCancel={() => {
              this.cancel();
            }}
          />
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default List;
