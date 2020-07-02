export const addPost = postList => {
    if (postList.state.content === "") {
        alert("Cannot post a empty message.");
        return;
    }
    const newPostList = postList.state.list;
    const newPost = [postList.state.name, postList.state.content];
    newPostList.push(newPost);
    postList.setState({
        list: newPostList
    });
};