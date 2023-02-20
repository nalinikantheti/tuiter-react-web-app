const WhoToFollowListItem = (who) => {
    return (`
        <div class="list-group-item d-flex flex-nowrap">
        
            <!-- Image -->
            <div class="p-1">
                <img src="${who.avatarIcon}" class="img-fluid wd-avatar-icon" alt="avatarIcon">
            </div>
            
            <!-- Name and Username -->
            <div class="p-1 lh-sm">
                <span class="fw-bold">${who.userName}</span>
                <i class="fa-solid fa-check"></i>
                <br>
                @${who.userHandle}
            </div>
    
            <!-- Follow Button  -->
            <div class="ms-auto p-1">
                <button class="btn btn-primary rounded-pill">
                    Follow
                </button>
            </div>
        </div>
    `);
}

export default WhoToFollowListItem;