import { createSelector } from 'reselect';

/**
 * Direct selector to the login state domain
 */
const selectLoginDomain = () => (state) => state.get('login');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Login
 */

const makeSelectLogin = () => createSelector(
  selectLoginDomain(),
  (substate) => console.log(substate)
);

export default makeSelectLogin;
export {
  selectLoginDomain,
};
