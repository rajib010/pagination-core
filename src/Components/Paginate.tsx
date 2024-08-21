import React from 'react';

type PaginateProps = {
  pageCount: number;
  page: number;
  setPage: (newPage: number) => void;
};

function Paginate({ pageCount, page, setPage }: PaginateProps) {
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= pageCount) {
      setPage(newPage);
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        className={`px-4 py-2 mx-1 rounded ${page === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
      >
        Previous
      </button>
      {Array.from({ length: pageCount }, (_, index) => (
        <button
          key={index + 1}
          className={`px-4 py-2 mx-1 rounded ${page === index + 1 ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white'}`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className={`px-4 py-2 mx-1 rounded ${page === pageCount ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
        onClick={() => handlePageChange(page + 1)}
        disabled={page === pageCount}
      >
        Next
      </button>
    </div>
  );
}

export default Paginate;
