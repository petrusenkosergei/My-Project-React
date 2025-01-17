import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE ';
const SET_USERS_COUNT = 'SET_USERS_COUNT ';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING  ';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS  ';

let initialState = {
    users: [],
    pageSize: 15,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: true,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
 switch (action.type) {
     case FOLLOW:
         return {
             ...state,
             users: state.users.map(u => {
                 if (u.id === action.userID){
                     return {...u, followed: true}
                 }
                 return u;
             })
         };

     case UNFOLLOW:
         return {
             ...state,
             users: state.users.map(u => {
                 if (u.id === action.userID){
                     return {...u, followed: false}
                 }
                 return u;
             })
         };

     case SET_USERS: {
         return  {...state, users: action.users}
     }
     case SET_CURRENT_PAGE: {
         return  {...state, currentPage: action.currentPage}
     }
     case SET_USERS_COUNT: {
         return  {...state, totalUsersCount: action.count}
     }
     case TOGGLE_IS_FETCHING: {
         return  {...state, isFetching: action.isFetching}
     }
     case FOLLOWING_IN_PROGRESS: {
         return  {
             ...state,
             followingInProgress: action.isFetching
                 ?[...state.followingInProgress, action.userId]
                 : state.followingInProgress.filter(id => id != action.userId)
         }
     }


     default:
         return state;

 }

};

export const followSuccess = (userID) => ({type: FOLLOW, userID});
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_USERS_COUNT, count:totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: FOLLOWING_IN_PROGRESS, isFetching, userId});


export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
    }
};
export const follow = (userID) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userID ));
        usersAPI.follow(userID)
            .then(response => {
                if (response.data.resultCode === 0){
                    dispatch(followSuccess(userID))
                }
                dispatch(toggleFollowingProgress(false,userID));
            });
    }
};
export const unfollow = (userID) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userID ));
        usersAPI.unfollow(userID)
            .then(response => {
                if (response.data.resultCode === 0){
                    dispatch(unfollowSuccess(userID))
                }
                dispatch(toggleFollowingProgress(false,userID));
            });
    }
};

export  default  usersReducer;




