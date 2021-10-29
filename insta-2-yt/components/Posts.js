import Post from "./Post";

const posts = [
  {
    id: "213",
    username: "admin",
    userImg: "https://cdn1.mecum.com/auctions/sc0516/sc0516-243304/images/sc0516-243304_2@2x.jpg?1466465108000",
    img: "",
    caption: "ig yt project build",
  },
  {
    id: "213",
    username: "admin",
    userImg: "https://cdn1.mecum.com/auctions/sc0516/sc0516-243304/images/sc0516-243304_2@2x.jpg?1466465108000",
    img: "",
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
