export function manageFriends(state = { friends: [] }, action) {
  switch (action.type) {
    case 'friends/add':
      return { friends: [...state.friends, action.payload] };
    case 'friends/remove':
      return { friends: []};
    default:
      return state;
  }
}