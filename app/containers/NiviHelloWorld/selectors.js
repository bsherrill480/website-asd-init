import { createSelector } from 'reselect';

/**
 * Direct selector to the niviHelloWorld state domain
 */
const selectNiviHelloWorldDomain = () => (state) => state.get('niviHelloWorld');

/**
 * Other specific selectors
 */

/**
 * Default selector used by NiviHelloWorld
 */
const makeSelectIsEditable = () => createSelector(
  selectNiviHelloWorldDomain(),
  (substate) => substate.get('isEditable')
);

export {
  makeSelectIsEditable,
  selectNiviHelloWorldDomain,
};
