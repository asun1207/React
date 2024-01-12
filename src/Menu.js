import {Outlet, Link} from "react-router-dom";
function Menu (){
   return(
      <>
         <nav>
            <ul>
               <li>
                  <Link to="/">Login</Link>
               </li>
               <li>
                  <Link to="/reg">Register</Link>
               </li>
               <li>
                  <Link to="/lib">Library</Link>
               </li>
               <li>
                  <Link to="/about">About</Link>
               </li>
            </ul>
         </nav>

         <Outlet />
      </>
   )
}

export default Menu;