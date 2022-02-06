//Actions are the only source of information for the store
//they help us communicate between redux and react
//this is the root reducder file so it will contain all reducers in my store
export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});
