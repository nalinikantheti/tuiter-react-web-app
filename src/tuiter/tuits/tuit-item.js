import React from "react";
import { useDispatch } from "react-redux";
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
    dispatch(updateTuitThunk(id));
  }
  return(
    <li className="list-group-item">
     <div className="row">
       <div className="col-1">
         <img width={40} className="float-left rounded-circle" alt = "img" src="https://images.fineartamerica.com/images/artworkimages/medium/3/1-nasa-logo-louise-osborne-transparent.png"/>
       </div>
       <div className="col-11">
         <div><span className = "fw-bolder"> {tuit.userName } Nasa</span> <i className="bi bi-patch-check-fill"> </i> @NasaOfficial{tuit.handle} . 2h{tuit.time}
         <i className="bi bi-x-lg float-end"
              onClick={() => deleteTuitHandler(tuit._id)}></i></div>
         <div>{tuit.tuit}</div>
         </div>
         <div className="row">
                  <span className="col-2"><i className="bi bi-chat"></i> {tuit.comments}</span>
                  <span className="col-2"><i className="bi bi-arrow-repeat"></i>
                      { tuit.retuits }</span>
                  <span className="col-4" > Likes: 
                  <i className={`bi bi-heart${tuit.liked ? '-fill text-danger' : ''}`} onClick={() => likeUpdateHandler(tuit._id)}></i>
                      {tuit.likes}</span>
                  <span className="col-3"> Dislikes: <i className="bi bi-hand-thumbs-down"></i></span>
                  <span className="col-1"> <i className="bi bi-share"></i></span>
              </div>
     </div>
    </li>
   );
};
export default TuitItem;