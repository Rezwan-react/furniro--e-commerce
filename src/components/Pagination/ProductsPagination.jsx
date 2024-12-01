import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Pagination from './ProductsPagination';
import ProductsCard from '../Products/ProductsCard';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function ProductsPagination({ itemsPerPage }) {

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    )
    setItemOffset(newOffset);
  };

  return (
    <>
        
          <div className="container">
            <div className='grid grid-cols-4 gap-8'>

            
            {currentItems &&
            currentItems.map((item) => (
              < ProductsCard /> 
            ))}  
            </div>             
            <ReactPaginate
              breakLabel="..."
              nextLabel="next "
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
              className='flex justify-center items-center gap-9 mt-10 text-xl '
            />
          </div>
          
    </>
  )
}

export default ProductsPagination