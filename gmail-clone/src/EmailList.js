import { Checkbox, IconButton } from "@material-ui/core";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  KeyboardHide,
  MoreVert,
  Redo,
  Settings,
} from "@material-ui/icons";
import PeopleIcon from "@material-ui/icons/People";
import InboxIcon from "@material-ui/icons/Inbox";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import React, { useEffect, useState } from "react";
import "./EmailList.css";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { db } from "./firebase";

function EmailList() {
  const [emails, setEmails] = useState([]);

  //*snapshot is a realtime listener, listens for anytime something changes in db */
  //mapping through all the emailRows to render in the body and got back id and data
  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        {/* resuable component */}
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1a73e8" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>
      <div className="emailList__list">
        {/* resuable component for rows */}
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}

        <EmailRow
          title="Tiwtch"
          subject="Hey fellow Streamers"
          description="This is a test"
          time="10pm"
        />
        <EmailRow
          title="Tiwtch"
          subject="Hey fellow Streamers"
          description="This is a test"
          time="10pm"
        />
        <EmailRow
          title="Tiwtch"
          subject="Hey fellow Streamers"
          description="This is a test"
          time="10pm"
        />
        <EmailRow
          title="Tiwtch"
          subject="Hey fellow Streamers"
          description="This is a test"
          time="10pm"
        />
        <EmailRow
          title="Tiwtch"
          subject="Hey fellow Streamers"
          description="This is a test"
          time="10pm"
        />
        <EmailRow
          title="Tiwtch"
          subject="Hey fellow Streamers"
          description="This is a test"
          time="10pm"
        />
        <EmailRow
          title="Tiwtch"
          subject="Hey fellow Streamers"
          description="This is a test"
          time="10pm"
        />
        <EmailRow
          title="Tiwtch"
          subject="Hey fellow Streamers"
          description="This is a test"
          time="10pm"
        />
        <EmailRow
          title="Tiwtch"
          subject="Hey fellow Streamers"
          description="This is a test"
          time="10pm"
        />
        <EmailRow
          title="Tiwtch"
          subject="Hey fellow Streamers"
          description="This is a test"
          time="10pm"
        />
        <EmailRow
          title="Tiwtch"
          subject="Hey fellow Streamers"
          description="This is a test"
          time="10pm"
        />
        <EmailRow
          title="Tiwtch"
          subject="Hey fellow Streamers"
          description="This is a test"
          time="10pm"
        />
        <EmailRow
          title="Tiwtch"
          subject="Hey fellow Streamers"
          description="This is a test"
          time="10pm"
        />
        <EmailRow
          title="Tiwtch"
          subject="Hey fellow Streamers"
          description="This is a test"
          time="10pm"
        />
        <EmailRow
          title="Tiwtch"
          subject="Hey fellow Streamers"
          description="This is a test"
          time="10pm"
        />
        <EmailRow
          title="Tiwtch"
          subject="Hey fellow Streamers"
          description="This is a test"
          time="10pm"
        />
        <EmailRow
          title="Tiwtch"
          subject="Hey fellow Streamers"
          description="This is a test"
          time="10pm"
        />
        <EmailRow
          title="Tiwtch"
          subject="Hey fellow Streamers"
          description="This is a test"
          time="10pm"
        />
      </div>
    </div>
  );
}

export default EmailList;
