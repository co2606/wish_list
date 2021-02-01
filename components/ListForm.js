import EasyEdit, { Types } from "react-easy-edit";

function ListForm(props) {
  return (
    <ul>
      <li>
        <EasyEdit
          type={Types.TEXT}
          onSave={props.onSaveName}
          onCancel={props.onCancel}
          saveButtonLabel="Save"
          cancelButtonLabel="Cancel"
          placeholder="Item Name"
          cancelButtonStyle="ml-3 inline-flex justify-center py-.5 px-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          saveButtonStyle="ml-3 inline-flex justify-center py-.5 px-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        />
      </li>
      <li>
        <EasyEdit
          type={Types.TEXT}
          onSave={props.onSaveUrl}
          onCancel={props.onCancel}
          saveButtonLabel="Save"
          cancelButtonLabel="Cancel"
          placeholder="Item Url"
          cancelButtonStyle="ml-3 inline-flex justify-center py-.5 px-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          saveButtonStyle="ml-3 inline-flex justify-center py-.5 px-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        />
      </li>
      <li>
        <EasyEdit
          type={Types.TEXT}
          onSave={props.onSaveNote}
          onCancel={props.onCancel}
          saveButtonLabel="Save"
          cancelButtonLabel="Cancel"
          placeholder="Item Note"
          cancelButtonStyle="ml-3 inline-flex justify-center py-.5 px-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          saveButtonStyle="ml-3 inline-flex justify-center py-.5 px-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        />
      </li>
    </ul>
  );
}

export default ListForm;
