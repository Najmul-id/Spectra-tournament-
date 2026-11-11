export const state = {
  session: null, profile: null, tournament: null, teams: [], matches: [],
  bracketType: 'upper', adminTab: 'teams', realtimeChannels: []
};
export const isStaff = () => ['admin','committee'].includes(state.profile?.role);
export const isAdmin = () => state.profile?.role === 'admin';
