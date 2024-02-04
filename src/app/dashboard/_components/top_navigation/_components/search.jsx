import React from 'react'

function Search() {
  return (
    <div>
      <form className="hidden app-search xl:block">
        <div className="relative inline-block">
          <input
            type="text"
            className="pl-4 pr-[40px] border-0 rounded bg-[#f8f9fa] dark:bg-[#363a38] focus:ring-0 text-13 placeholder:text-13 dark:placeholder:text-gray-200 dark:text-gray-100  max-w-[223px]"
            placeholder="Search..."
          />
          <button
            className="py-1.5 px-2.5 w-9 h-[34px] text-white bg-violet-500 inline-block absolute ltr:right-1 top-1 rounded shadow shadow-violet-100 dark:shadow-gray-900 rtl:left-1 rtl:right-auto"
            type="button"
          >
            <i className="align-middle bx bx-search-alt" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search
