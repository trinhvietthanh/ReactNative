import * as React from 'react';

export const STACK_LOGIN = 'LOGIN';
export const  STACK_HOME = 'HOME';

export default {
  [STACK_LOGIN]: {
    name: STACK_LOGIN,
    options: { header: () => <></> },
  },
  [STACK_HOME]: {
    name: STACK_HOME,
    options: {},
  },

};
