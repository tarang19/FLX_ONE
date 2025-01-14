import { defineAbility } from '@casl/ability';
import { ABILITIES } from '../constant/rolesAndURLs'; // Import the constants

export const defineUserAbility = (role) => {
  return defineAbility((can) => {
    const abilities = ABILITIES[role];

    if (abilities) {
      abilities.forEach((action, index) => {
        if (index % 2 === 0) {
          // Every even index is an action, and the next index is the subject
          can(action, abilities[index + 1]);
        }
      });
    }
  });
};
