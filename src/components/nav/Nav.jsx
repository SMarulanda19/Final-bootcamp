import { Link } from 'react-router-dom';
import './navbar.css';
import Image from "../../Image/Globant.png"
import { useDispatch } from 'react-redux';
import {isFormVisible} from '../../store/AppSlices';
// Dispatch para actualizar un estado

const Navbar = () => {
  const dispatch = useDispatch()


  return (
    <>
    <div className="navbar">
      <div className='ContainerImage'>
        <img className='Imagenav' src={Image} alt="Logo" />
      </div>
      <div>
      <Link to="/" className='a'>Home</Link>
      <Link to="/contacts" className='a'>Contacts</Link>
      <Link to="/favorites" className='a'>Favorites</Link>
      <button className="ButtonNew" onClick = {() => dispatch(isFormVisible())}>
          {" "}
        + New
      </button>
      </div>
    </div>
    </>
  );
};

export default Navbar;