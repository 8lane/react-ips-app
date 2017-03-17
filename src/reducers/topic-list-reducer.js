const initialState = {
  topics: []
};

const topicListReducer = function (state = initialState, action) {
  switch (action.type) {
    case 'TOPIC_LIST_SUCCESS':
      console.log('SUCCESS: ', action);
      return Object.assign({}, state, { topics: action.topics });

    default:
      return state;
  }
};

export default topicListReducer;
