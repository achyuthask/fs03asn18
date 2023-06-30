import React, { useContext } from "react";
import './tnb.css'
import { AuthContext } from "./contex";

const Navbar =() => {
    const{setLogedin}=useContext(AuthContext);
    return(
   <div className="narutouzumaki">
    <div id="title" >
   <h2 >Navbar</h2>
   </div>
    <div id="menucomp">
       <p>home</p>
       <p>profile</p>
       <p>produts</p>
       <p>costomercare</p>
      

        <button
        onClick={()=>{
            setLogedin(false);
        }
        }
        >Logout Achyutha</button>
       
        
    </div>
</div>
    );
}
export default Navbar;
