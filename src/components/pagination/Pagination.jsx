import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setPages } from '../../store/AppSlices'; // Aquí se importa setPages

  const Pagination = () => {
  const dispatch = useDispatch();
  const paginationtotal = useSelector((state) => state.users.TotalPages);
  const Pages = useSelector((state) => state.users.Pages);

  const handlePage = (n) => {
    const nextPage = Pages + n;
    console.log(nextPage )
    if (nextPage < 1 || nextPage > paginationtotal) {
      console.log("No hay mas paginas :( ");
    } else {
      dispatch(setPages(nextPage));
    }
  };


  
  return (
    <div className='pagination-container'>
      <p>{Pages}  {paginationtotal}</p>
      <button onClick={() => handlePage(-1)}>{<GoChevronLeft />}</button>
      <button onClick={() => handlePage(+1)}>{<GoChevronRight />}</button>
    </div>
  );
};

export default Pagination;
