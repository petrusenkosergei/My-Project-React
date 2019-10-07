import React from "react";

import Sadebar from "./Sadebar";

import {connect} from "react-redux";


const mapStateToProps = (state) =>{
    return {
        friends: state.sadebar.friends
    }
};

const SadebarContainer = connect(mapStateToProps, null)(Sadebar);

export default SadebarContainer;





