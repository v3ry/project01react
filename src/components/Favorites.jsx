import '../style.css';

import favorite from "../imgs/fav.svg"
import emptyFav from "../imgs/favEmpty.svg"

function Favorites() {
  return (
    <div className="favorites">
        <img src={emptyFav} alt="" className='emptyFav'/>
        <img src={favorite} alt="" className='emptyFav'/>
    </div>
  );
}

export default Favorites;