import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import { deleteTuitThunk, findTuitsThunk, createTuitThunk, updateTuitThunk}
    from "../../services/tuits-thunks";


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


const initialState = {
    tuits: [],
    loading: false
}


const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
        [deleteTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits
                    .filter(t => t._id !== payload)
            },

        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },
        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits.push(payload)
            },
            

    },

    initState: tuits,
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
        },

        [updateTuitThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          const tuitNdx = state.tuits
            .findIndex((t) => t._id === payload._id)
          state.tuits[tuitNdx] = {
            ...state.tuits[tuitNdx],
            ...payload
          }
        }
      

    }

});
export const { createTuit, deleteTuit, updateTuitLikes } = tuitsSlice.actions;
export default tuitsSlice.reducer;