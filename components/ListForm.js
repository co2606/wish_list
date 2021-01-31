function ListForm(props) {
  return (
<div>
<form className="space-y-8 divide-y divide-gray-200">
  <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
    <div>
      <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Enter An Item to Get Started
          </h3>
        </div>
        <div className="space-y-6 sm:space-y-5">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Gift Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input type="text" name="first_name" id="first_name" autoComplete="given-name" className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Gift URL
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input type="text" name="last_name" id="last_name" autoComplete="family-name" className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Gift Notes
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input type="text" name="last_name" id="last_name" autoComplete="family-name" className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <div className="flex justify-end">
          <button type="button" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Cancel
          </button>
          <button type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Save
          </button>
        </div>
      </div>
    </div></div></form>
</div>
  );
}

export default ListForm;
