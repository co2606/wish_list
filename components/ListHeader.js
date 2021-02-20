import React, { useState, useRef } from "react";
import useSWR from "swr";
import InlineEdit from "./InlineEdit";

const ListHeader = () => {
  const [listTitle, setListTitle] = useState("");
  const [listMessage, setListMessage] = useState("");

  const inputRef = useRef();
  const textareaRef = useRef();

  const url =
  "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10";
  //const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(url);

console.log(data, error);

if (error) {
  return <div>Error...</div>;
}
if (!data) {
  return <div>Loading...</div>;
}

  return (
    <form className=" bg-white rounded px-8 py-8 pt-8">
      <div className="px-4 pb-4">
        <InlineEdit
          text={listTitle}
          placeholder="List Title"
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
            className="shadow appearance-none border rounded w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 text-2xl"
            placeholder="List Title"
            value={listTitle}
            onChange={(e) => setListTitle(e.target.value)}
          />
        </InlineEdit>
      </div>
      <div className="px-4 pb-4">
        <InlineEdit
          text={listMessage}
          placeholder="List Message"
          childRef={textareaRef}
          type="textarea"
          cssText="text-blue text-sm"
          cssPlaceholderText="text-green-800 text-2xl"
          cssEditBox="rounded py-2 px-3 text-gray-700 leading-tight whitespace-pre-wrap hover:shadow-outline editable-textarea text-2xl"
        >
          <textarea
            ref={textareaRef}
            name="description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
            placeholder="List Message"
            rows="5"
            value={listMessage}
            onChange={(e) => setListMessage(e.target.value)}
          />
        </InlineEdit>
      </div>
    </form>
  );
};

export default ListHeader;
