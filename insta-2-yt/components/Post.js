import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

function Post({ id, username, userImg, img, caption }) {
  return (
    <div>
      {/* header */}
      <div>
        <img src={userImg} alt="" />
        <p>{username}</p>
        <DotsHorizontalIcon className="h-5"/>
      </div>
      {/* img */}
      {/* header */}
      {/* header */}
      {/* header */}
      {/* header */}
    </div>
  );
}

export default Post;
