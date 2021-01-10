import * as actions from './actionTypes';

export const addTask = task => ({
  type: actions.TASK_ADD,
  payload: task
});

export const toggleTask = id => ({
  type: actions.TASK_TOGGLE,
  payload: { id }
});

export const removeTask = id => ({
  type: actions.TASK_REMOVE,
  payload: { id }
})