export const langReducer = (state, action) => {
  switch (action.type) {
    case '[lang] set':
      return {
        ...state,
        lang: action.payload
      }
    default:
      return state
  }
}
