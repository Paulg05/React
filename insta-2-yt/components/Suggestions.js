import { useEffect, useState } from "react";
import faker from "faker";
function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestion for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center 
            justify-between mt-3"
        >
          <img
            className="w-10 h-10 
              rounded-full border p-[2px]"
            src={profile.avatar}
            alt=""
          />

          <div className="flex-1 ml-4">
            <h2 className="font semi-bold text-sm">{profile.username}</h2>
            <h3 className="text-xs">works at {profile.company.name}</h3>
          </div>
          <button className="text-blue-400 text-xs text-bold">Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
