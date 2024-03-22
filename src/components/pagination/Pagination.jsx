import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import {setPages} from '../../store/AppSlices'

const Pagination = () => {

    const dispatch = useDispatch()
    const paginationtotal = useSelector((state) => state.totalPages)
    const Pages = useSelector((state) => state.Pages)
    

    const handlePage = (n) => {
        const nextPage = Pages + n;
        if(nextpage === 0 ||  nextpage > paginationtotal){
            console.log("No hay mas paginas :( ")
        }else(
            dispatch(setPages(nextPage))
        )
    }
    

    
    return( 
        <div className='pagination-container'>
        <p>{Pages}  {paginationtotal}</p>
        <button onClick={() => handlePage(-1)}>{<GoChevronLeft />}</button>
        <button onClick={() => handlePage(+1)}>{<GoChevronRight />}</button>
    </div>
    )
}

export default Pagination