import React from 'react';
import s from './../Dialogs.module.css'
import PropTypes from "prop-types";
import Post from "../../Profile/Myposts/Post/Post";




const Message = (props) => {

    return <div className={s.dialog}>{props.message}</div>
};

Post.propTypes = {
    message: PropTypes.string,
    id: PropTypes.number
};


export default Message;


