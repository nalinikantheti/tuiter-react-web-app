import post from "./post.js";
import PostSummaryListItem from "./PostSummaryListItem.js";

const PostSummaryList = () => {
    return (`
        <section class="pt-2 ps-0 pe-0">
            ${post.map(post => PostSummaryListItem(post)).join('')}
        </section>
    `);
}

export default PostSummaryList;