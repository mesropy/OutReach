export const addPost = postList => {
    const newPostList = postList.state.list;
    const newPost = [postList.state.name, postList.state.content];
    newPostList.push(newPost);
    postList.setState({
        list: newPostList
    });
};