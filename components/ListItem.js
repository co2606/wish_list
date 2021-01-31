function ListItem(props) {
  return (
    <li className="py-3">
      <div className="flex items-center space-x-4">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">Name</p>
          <p className="text-sm text-blue-800">
            <a href="#" className="hover:underline focus:outline-none">
              Link goes here
            </a>
          </p>
          <p className="text-sm text-gray-500 truncate">Notes:</p>
        </div>
        <div>
          <button
            type="button"
            className="mr-2 relative inline-flex items-center px-2 py-1 border border-transparent shadow-sm text-sm rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Edit
          </button>
          <button
            type="button"
            className="relative inline-flex items-center px-2 py-1 border border-transparent shadow-sm text-sm rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
}

export default ListItem;
