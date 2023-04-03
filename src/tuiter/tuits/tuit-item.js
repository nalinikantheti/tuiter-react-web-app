import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitLikes } from "./tuits-reducer";
import { deleteTuitThunk, updateTuitThunk } from "../../services/tuits-thunks";

const TuitItem = (
  {
    tuit = {
      "userName": "SpaceX",
      "handle": "@spacex",
      "time": "2h",
      "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bedTesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bedTesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
      "image": "starship.png",
      "comments": 123,
      "retuits": 432,
      "likes": 2345,
      "liked": false
    }
  }



) => {

  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }
  const likeUpdateHandler = (id) => {
    dispatch(updateTuitLikes(id));
  }
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-1">
          <img width={40} className="float-left rounded-circle" alt="description" src={`/images/${tuit.image}`} />
        </div>
        <div className="col-11">
          <div><span className="fw-bolder"> {tuit.userName} </span> <i className="bi bi-patch-check-fill"> </i> {tuit.handle} . {tuit.time}
            <i className="bi bi-x-lg float-end"
              onClick={() => deleteTuitHandler(tuit._id)}></i></div>
          <div>{tuit.tuit}</div>
        </div>

        <div>
          Likes: {tuit.likes}
          <i onClick={() => dispatch(updateTuitThunk({
            ...tuit,
            likes: tuit.likes + 1
          }))} className="bi bi-heart-fill me-2 text-danger"></i>
        </div>

      </div>
    </li>
  );
};
export default TuitItem;