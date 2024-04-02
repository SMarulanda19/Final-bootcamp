import React from 'react';
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useSelector, useDispatch } from 'react-redux';
import { setPages } from '../../store/AppSlices';
import './PaginationStyles.css'; // Importa el archivo CSS

const Pagination = () => {
  const dispatch = useDispatch();
  const paginationtotal = useSelector((state) => state.users.TotalPages);
  const Pages = useSelector((state) => state.users.Pages);

  const handlePage = (n) => {
    const nextPage = Pages + n;
    console.log(nextPage);
    if (nextPage < 1 || nextPage > paginationtotal) {
      console.log("No hay más páginas :(");
    } else {
      dispatch(setPages(nextPage));
    }
  };

  return (
    <div className='pagination-container'>
      <div className='pagination-text-buttons'>
        <p className='pagination-text'>{Pages} de {paginationtotal}</p>
        <div className='pagination-buttons'>
          <button className='pagination-button' onClick={() => handlePage(-1)}><GoChevronLeft /></button>
          <button className='pagination-button' onClick={() => handlePage(+1)}><GoChevronRight /></button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
