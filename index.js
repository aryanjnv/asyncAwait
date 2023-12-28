let posts = [];
let lastActivityTime = null;

function createPost(post) {
    return new Promise((resolve) => {
        setTimeout(() => {
            posts.push(post);
            resolve(posts);
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            lastActivityTime = new Date();
            resolve(lastActivityTime);
        }, 1000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("ERROR: No posts to delete");
            }
        }, 1000);
    });
}

async function task() {
    try {
        const [postsAfterFirstPost, updatedActivityTime] = await Promise.all([
            createPost({ title: 'First Post' }),
            updateLastUserActivityTime()
        ]);

        console.log("Posts:", postsAfterFirstPost);
        console.log("Last Activity Time:", updatedActivityTime);

        const [postsAfterSecondPost, updatedActivityTime2] = await Promise.all([
            createPost({ title: 'Second Post' }),
            updateLastUserActivityTime()
        ]);

        console.log("Posts:", postsAfterSecondPost);
        console.log("Last Activity Time:", updatedActivityTime2);

        const [postsAfterThirdPost, updatedActivityTime3] = await Promise.all([
            createPost({ title: 'Third Post' }),
            updateLastUserActivityTime()
        ]);

        console.log("Posts:", postsAfterThirdPost);
        console.log("Last Activity Time:", updatedActivityTime3);

        const deletedPost = await deletePost();

        console.log("Deleted Post:", deletedPost);
        console.log("Remaining Posts:", posts);
    } catch (error) {
        console.error(error);
    }
}

task();
