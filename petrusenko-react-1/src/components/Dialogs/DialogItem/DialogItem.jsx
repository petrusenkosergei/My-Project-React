import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";




const DialogItem = (props) => {
    let path = '/dialogs/1' + props.id;

    return <ul><li><div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
        <div>
            <img src = {props.src}/>
        </div>
    </div></li></ul>

};

DialogItem.propTypes = {
    name: PropTypes.string,
    id: PropTypes.number
};

export default DialogItem;


