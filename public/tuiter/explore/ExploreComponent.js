import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
        <section class="row w-auto">
            <header class="w-100 d-inline-block ps-0">
                <div class="d-flex flex-nowrap gap-3">
                    <!-- Search Bar -->
                    <div class="input-group">
                        <span class="input-group-text bg-white text-black wd-border-20-0-0-20" id="basic-addon">
                            <i class="fa-solid fa-search"></i>
                        </span>
                        <input type="text" class="form-control p-0 wd-border-0-20-20-0" placeholder="Search Tuiter">
                    </div>
        
                    <!--Explore settings-->
                    <div>
                        <a href="explore-settings.html">
                            <i class="fa-solid fa-gear text-primary fs-4"></i>
                        </a>
                    </div>
                </div>
            </header>
            
           <!--Topic Links-->
           <ul class="nav nav-tabs mt-2">
                <li class="nav-item">
                    <a class="nav-link active rounded-1" href="for-you.html">
                        For You
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link rounded-1" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link rounded-1" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link rounded-1" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-sm-none d-none d-sm-inline d-md-inline d-lg-inline d-xxl-inline d-xl-inline">
                    <a class="nav-link rounded-1" href="entertainment">
                        Entertainment
                    </a>
                </li>
            </ul>
            
           <!-- Explore Main Content -->
           <section class="card mt-2 p-0">
                <img src="../../images/starship.jpg" class="card-img rounded-3 p-0 w-auto" alt="starship">
                <div class="card-img-overlay d-flex align-items-end">
                    <h5 class="card-title fw-bold fs-2 text-white">SpaceX's Starship</h5>
                </div>
           </section>
        
            <!-- Post Summary List -->
           ${PostSummaryList()}
        </section>
    `);
}

export default ExploreComponent;