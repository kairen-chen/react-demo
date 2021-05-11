import * as t from "./actionTypes";

export const setName = (payload, meta) => ({
  meta,
  payload,
  type: t.SET_NAME
});

export const setProfile = payload => ({
  payload,
  type: t.SET_PROFILE
});
