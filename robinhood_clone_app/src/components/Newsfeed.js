import React, { useState } from "react";
import LineGraph from "./LineGraph";
import "./Newsfeed.css";
import TimeLine from "./TimeLine";
import Chip from "./Chip";

function Newsfeed() {
  const [popularTopics, setTopics] = useState([
    "Technology",
    "Top Movies",
    "Upcoming Earnings",
    "Crypto",
    "Cannabis",
    "Healthcare Supplies",
    "Index ETFs",
    "Top Music",
    "United States",
    "Pharma",
  ]);
  return (
    <div className="newsfeed">
      <div className="newsfeed__container">
        <div className="newsfeed__chartSection">
          <div className="newsfeed__portfolioValue">
            <h1>$114,564</h1>
            <p>+44.63 (+0.4%) Today</p>
          </div>
          <div className="newsfeed__chart">
            <LineGraph />
            <TimeLine />
          </div>
        </div>
        <div className="newsfeed__buying__section">
          <h2>Buying Power</h2>
          <h2>$4.11</h2>
        </div>
        <div className="newsfeed__market__section">
          <div className="newsfeed__market__box">
            <p>Market Closer</p>
            <h1>Ended on a high record</h1>
          </div>
        </div>
        <div className="newsfeed__popularlists__section">
          <div className="newsfeed__popularlists__intro">
            <h1>Popular List</h1>
            <p>Show more</p>
          </div>
          <div className="newsfeed_popularlists_badges">
            {popularTopics.map((topic) => (
              <Chip
                className="topic__badge"
                variant="outlined"
                label={topic}
                image={`https://avatars.dicebear.com/api/human/${topic}.svg`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsfeed;
