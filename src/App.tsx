import { useEffect, useState } from 'react';
import Paginate from './Components/Paginate';

function App() {
  const [pagecount, setPagecount] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [blogData, setBlogData] = useState<any[]>([]);

  const getAllDatas = async function () {
    try {
      const res = await fetch(`http://localhost:8080/data/get-data?page=${page}`);
      if (!res.ok) {
        throw new Error("Failed in fetching data");
      }
      const allData = await res.json();
      setPagecount(allData.results.totalPages);
      setBlogData(allData.results.data);

      console.log('Fetched Data:', allData.results.data);
    } catch (error) {
      console.log("Error in fetching data", error);
    }
  };

  useEffect(() => {
    getAllDatas();
  }, [page]); // Re-fetch data whenever the page changes

  return (
    <>
      <h1 className='text-3xl text-red-600 text-center'>Items</h1>
      <ul className='flex flex-row gap-3 mb-10 mx-3'>
        {blogData.map((item) => (
          <div className="w-full border min-h-[10vh] p-[2vw] bg-slate-500 text-white" key={item._id}>
            <p>Author: {item.author}</p>
            <p>Pages: {item.pages}</p>
            <p>Price: ${item.price}</p>
            <p>Language: {item.language}</p>
            <p>Available: {item.isAvailable ? "Yes" : "No"}</p>
          </div>
        ))}
      </ul>
      <Paginate pageCount={pagecount} page={page} setPage={setPage} />
    </>
  );
}

export default App;
