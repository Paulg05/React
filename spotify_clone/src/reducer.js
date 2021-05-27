export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //Remove after finish developing
  // token:
  //   "BQAliVvGKi609NjzUNzL9lAjtlqrcs_hJwezixMoxiaSIGyw_Rk2z4QdQZTzb73__qVsQgFPTz3utwzb3LtZJ6VYejsn-VwFcgBE4rNq-gpFW42E6ka2E7ttKcaaSyFWAFjjPBAwxzGKsGwxBLK2NMbJnlZRD31M",
};

const reducer = (state, action) => {
  console.log(action);

  // action -> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
