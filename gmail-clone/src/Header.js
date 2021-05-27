import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppsIcon from "@material-ui/icons/Apps";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://www.iphonehacks.com/wp-content/uploads/2020/06/Gmail-Icon.jpg"
          alt=""
        />
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search Mail" type="text" />
        <ArrowDropDownIcon classname="header__inputCaret" />
      </div>
      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar className="header__rightAvatar"src={user?.photoUrl} onClick={signOut} />
      </div>
    </div>
  );
}

export default Header;
