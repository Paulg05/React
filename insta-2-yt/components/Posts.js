import Post from "./Post";

const posts = [
  {
    id: "213",
    username: "admin",
    userImg: "https://cdn1.mecum.com/auctions/sc0516/sc0516-243304/images/sc0516-243304_2@2x.jpg?1466465108000",
    img: "https://images.unsplash.com/photo-1635514695347-05806de5be33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80",
    caption: "ig yt project build",
  },
  {
    id: "213",
    username: "admin",
    userImg: "https://cdn1.mecum.com/auctions/sc0516/sc0516-243304/images/sc0516-243304_2@2x.jpg?1466465108000",
    img: "https://images.unsplash.com/photo-1635438731506-5dedcd48314c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=685&q=80",
    caption: "ig yt project build",
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
