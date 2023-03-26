import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';


const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}


const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },

        updateTuitLikes(state, action) {
            const index = state.findIndex(tuit => tuit._id === action.payload);
            const isLiked = state[index].liked;

            if (!isLiked) {
                state[index].likes += 1;
                state[index].liked = true;
            } else {
                state[index].likes -= 1;
                state[index].liked = false;
            }
        },

        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        }
    }

});
export const { createTuit, deleteTuit, updateTuitLikes } = tuitsSlice.actions;
export default tuitsSlice.reducer;