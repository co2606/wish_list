import React, { useState, useRef } from "react";
import InlineEdit from "./InlineEdit";

const ListBody = () => {
  const [itemName, setItemName] = useState("");
  const [itemUrl, setItemUrl] = useState("");
  const [itemNote, setItemNote] = useState("");
  const inputRef = useRef();
  //const textareaRef = useRef();

  return (
    <form className=" bg-white rounded px-8 py-8 pt-8">
      <div className="px-4 pb-4">
        <InlineEdit
          text={itemName}
          placeholder="Enter Item Name"
          childRef={inputRef}
          type="input"
          cssText="text-blue text-sm"
          cssPlaceholderText="text-green-500 text-2xl"
          cssEditBox="rounded py-2 px-3 text-red-300 leading-tight whitespace-pre-wrap hover:shadow-outline editable-input text-2xl"
        >
          <input
            ref={inputRef}
            type="text"
            name="task"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
            placeholder="Enter Item Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </InlineEdit>
      </div>
      <div className="px-4 pb-4">
        <InlineEdit
          text={itemUrl}
          placeholder="Enter Item Url"
          childRef={inputRef}
          type="input"
          cssText="text-blue text-sm"
          cssPlaceholderText="text-green-400 text-2xl"
          cssEditBox="rounded py-2 px-3 text-gray-700 leading-tight whitespace-pre-wrap hover:shadow-outline editable-input text-2xl"
        >
          <input
            ref={inputRef}
            type="text"
            name="task"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
            placeholder="Enter Item Url"
            value={itemUrl}
            onChange={(e) => setItemUrl(e.target.value)}
          />
        </InlineEdit>
      </div>
      <div className="px-4 pb-4">
        <InlineEdit
          text={itemNote}
          placeholder="Enter Item Note"
          childRef={inputRef}
          type="input"
          cssText="text-blue text-sm"
          cssPlaceholderText="text-green-500 text-2xl"
          cssEditBox="rounded py-2 px-3 text-gray-700 leading-tight whitespace-pre-wrap hover:shadow-outline editable-input text-2xl"
        >
          <input
            ref={inputRef}
            type="text"
            name="task"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
            placeholder="Enter Item Note"
            value={itemNote}
            onChange={(e) => setItemNote(e.target.value)}
          />
        </InlineEdit>
      </div>
    </form>
  );
};

export default ListBody;
