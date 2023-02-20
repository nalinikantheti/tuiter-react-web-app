// import who from "./who.js";
// import WhoToFollowListItem from "./WhoToFollowListItem.js";
//
// const WhoToFollowList = () => {
//     return (`
//         <div class="row w-auto d-inline-block list-group list-group-flush rounded-3 ps-3">
//             <div class="list-group-item fw-bold fst-normal"> Who to follow </div>
//
//             ${who.map(who => WhoToFollowListItem(who)).join('')}
//         </div>
//     `);
// }
//
// export default WhoToFollowList;

import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
          <div class="row w-auto d-inline-block list-group list-group-flush rounded-3 ps-3">
            <div class="list-group-item fw-bold fst-normal"> Who to follow </div>

            ${who.map(who => WhoToFollowListItem(who)).join('')}
        </div>
`);
}

export default WhoToFollowList;