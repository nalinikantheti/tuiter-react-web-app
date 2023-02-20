const PostSummaryListItem = (post) => {
    return (`
        <section class="d-inline list-group list-group-flush p-0">
            <div class="list-group-item d-flex flex-nowrap gap-4">
                
                <!-- Summary Text -->
                <div>
                    <small class="text-muted fs-6 fw-normal">${post.topic}</small>
                    <p class="fw-bolder mb-0">
                        ${post.userName}
                        <i class="fa-solid fa-check"></i>
                        <small class="text-muted">&centerdot; ${post.time}</small>
                    </p>
                    
                    <p class=" fw-bolder">
                        ${post.title}
                    </p>
                    
                    <p class="mb-0">
                        <small class="text-muted">
                            123K Tweets
                        </small>
                    </p>
                </div>
                
                <!-- Summary Image -->
                <div class="ms-auto">
                    <img src="${post.image}" class="img-fluid align-middle rounded-3 wd-summary-icon" alt="summaryImage">
                </div>
            </div>
        </section>
    `);
}

export default PostSummaryListItem;