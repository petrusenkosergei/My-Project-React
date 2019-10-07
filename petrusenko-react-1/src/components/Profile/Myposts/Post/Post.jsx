import React from 'react';
import s from './Post.module.css'
import PropTypes from "prop-types";


const Post = (props) => {


    return (
                <div className={s.item}>
                   <img src='http://www.gogetnews.info/uploads/posts/2013-01/1359032797_Avatar-film-3.jpg' />
                    {props.message}
                    <div>
                    <span>Like</span> {props.likesCount}
                    </div>
                </div>
    )

};

Post.propTypes = {
    message: PropTypes.string,
    likesCount: PropTypes.number,
    id: PropTypes.number
};



export default Post;