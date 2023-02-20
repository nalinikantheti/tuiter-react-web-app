const NavigationSidebar = () => {
    return (`
        <div class="list-group list-group-flush rounded-3">
            <a class="list-group-item" href="/">
                <i class="fab fa-twitter"></i>
            </a>
            <a class="list-group-item" href="../home.html">
                <i class="fa-solid fa-home"></i>
                <span class="d-none d-xl-inline d-xxl-inline">
                    Home
                </span>
            </a>
            <a class="list-group-item bg-primary text-white" href="../explore/index.html">
                <i class="fa-solid fa-hashtag"></i>
                <span class="d-none d-xl-inline d-xxl-inline">
                    Explore
                </span>
            </a>
            <a class="list-group-item" href="../notifications/notifications.html">
                <i class="fa-solid fa-bell"></i>
                <span class="d-none d-xl-inline d-xxl-inline">
                    Notifications
                </span>
            </a>
            <a class="list-group-item" href="../messages/messages.html">
                <i class="fa-solid fa-envelope"></i>
                <span class="d-none d-xl-inline d-xxl-inline">
                    Messages
                </span>
            </a>
            <a class="list-group-item" href="../bookmarks/bookmarks.html">
                <i class="fa-solid fa-bookmark"></i>
                <span class="d-none d-xl-inline d-xxl-inline">
                    Bookmarks
                </span>
            </a>
            <a class="list-group-item" href="../lists/lists.html">
                <i class="fa-solid fa-list"></i>
                <span class="d-none d-xl-inline d-xxl-inline">
                    Lists
                </span>
            </a>
            <a class="list-group-item" href="../profile/profile.html">
                <i class="fa-solid fa-user"></i>
                <span class="d-none d-xl-inline d-xxl-inline">
                    Profile
                </span>
            </a>
            <a class="list-group-item" href="../more/more.html">
                <i class="fa-solid fa-ellipsis-h"></i>
                <span class="d-none d-xl-inline d-xxl-inline">
                    More
                </span>
            </a>
       </div>

       <div class="d-grid mt-2">
         <a href="tweet.html" class="btn btn-primary btn-block rounded-pill"> Tweet </a>
       </div>
    `);
}

export default NavigationSidebar;
