import React from "react";
import s from "./Sadebar.module.css";


const Sadebar = (props) => {

    return (
        <div className={s.nav}>
            {props.friends.map(f =>
                <div className={s.friendsImage}>
                    <img src={f.src}/>
                    <div className={s.friendsName}>
                        {f.name}
                    </div>
                </div>)}
        </div>


    )
};

export default Sadebar;





