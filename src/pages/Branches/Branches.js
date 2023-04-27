import React from "react";
// import Navbar from "../../component/Navbar/Navbar";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import BranchesElement from "../../components/Branches/Branches";
const Branches = () => {
    return(
        <div>
            
            <Breadcrumb title='شعبه های ما'/>
            <BranchesElement />
        </div>
    )
}
export default Branches
