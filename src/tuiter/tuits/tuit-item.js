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
      "image": "starship.jpg",
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
  // eslint-disable-next-line no-unused-vars
  const likeUpdateHandler = (id) => {
    dispatch(updateTuitLikes(id));
  }
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-1">
          <img width={40} className="float-left rounded-circle" alt="img" src={"data:image/jpeg;base64,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"} />
        
        </div>
        <div className="col-11">
          <div><span className="fw-bolder"> {tuit.userName} </span> <i className="bi bi-patch-check-fill"> </i> {tuit.handle} . {tuit.time}
            <i className="bi bi-x-lg float-end"
              onClick={() => deleteTuitHandler(tuit._id)}></i></div>
          <div>{tuit.tuit}</div>
        </div>

        <span>
          {tuit.likes}
          <i onClick={() => dispatch(updateTuitThunk({
            ...tuit,
            likes: tuit.likes + 1
          }))} className="bi bi-heart-fill me-2 text-danger"></i>
        </span>

      </div>
    </li>
  );
};
export default TuitItem;