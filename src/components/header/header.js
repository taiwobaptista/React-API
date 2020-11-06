import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import './header.css'

function Header(props) {
    const [Classes, setClasses] = useState("");
    let history = useHistory();
    const handleroute =(param,item) =>{
        setClasses(item)
        history.push(param)
    }

    useEffect(() => {
        setClasses("pers")
    }, []);
    return (
        <>
            <div>
                <div class="component">
                    <ul>
                        <li class={Classes ==="pers" ? "active": ""} onClick={()=>handleroute("/","pers")}>Personal Info</li>
                        <li  class={Classes ==="bill" ? "active": ""} onClick={()=>handleroute("/bill","bill")}>Billing Info</li>
                        <li  class={Classes ==="pay" ? "active": ""} onClick={()=>handleroute("/payment","pay")}>Confirm Payment</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;