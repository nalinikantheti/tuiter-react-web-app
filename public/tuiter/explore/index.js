// import NavigationSidebar from "../NavigationSidebar/NavigationSidebar.js";
// import ExploreComponent from "./ExploreComponent.js";
// import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js";
//
// const exploreComponent = () => {
//     $('#wd-explore').append(`
//         <section class="row mt-2">
//             <h2>Explore</h2>
//             <section class="col-3 col-md-2 col-lg-1 col-xl-2">
//                 ${NavigationSidebar()}
//             </section>
//             <section class="col-9 col-lg-7 col-xl-6">
//                 ${ExploreComponent()}
//             </section>
//             <section class="col-3 d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
//                 ${WhoToFollowList()}
//             </section>
//         <section>
//    `);
// }
//
// $(exploreComponent);

import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

const exploreComponent = () => {
    $('#wd-explore').append(`
        <section class="row mt-2">
            <h2>Explore</h2>
            <section class="col-3 col-md-2 col-lg-1 col-xl-2">
                ${NavigationSidebar()}
            </section>
            <section class="col-9 col-lg-7 col-xl-6">
                ${ExploreComponent()}
            </section>
            <section class="col-3 d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                ${WhoToFollowList()}
            </section>
        <section>
   `);
}

$(exploreComponent);