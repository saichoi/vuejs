export default {
  requests(state, _, _2, rootGetter) {
    const coachId = rootGetter.userId;
    console.log(state.requests);
    
    return state.requests.filter(req => req.coachId === coachId);
  },
  hasRequests(_, getters) {
    return getters.requests && getters.requests.length > 0;
  },
};
