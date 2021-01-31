import EasyEdit, { Types } from "react-easy-edit";

function ListHeader(props) {
  return (
    <div>
      <EasyEdit
        type={Types.TEXT}
        onSave={props.onSaveMessage}
        onCancel={props.onCancel}
        saveButtonLabel="Save"
        cancelButtonLabel="Cancel"
        placeholder="Message"
        cancelButtonStyle="ml-3 inline-flex justify-center py-.5 px-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        saveButtonStyle="ml-3 inline-flex justify-center py-.5 px-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      />

      <EasyEdit
        type={Types.TEXT}
        onSave={props.onSaveTitle}
        onCancel={props.onCancel}
        saveButtonLabel="Save"
        cancelButtonLabel="Cancel"
        placeholder="Title"
        cancelButtonStyle="ml-3 inline-flex justify-center py-.5 px-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        saveButtonStyle="ml-3 inline-flex justify-center py-.5 px-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      />
    </div>
  );
}

export default ListHeader;
