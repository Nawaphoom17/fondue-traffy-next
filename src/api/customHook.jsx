"use client"
/** @format */

import { useState, useEffect } from "react";

let listeners = [];
let state = {
  post_count_all: 0,
  post_finish_percentage: 0,
  duration_minutes_inprogress: 0,
  duration_minutes_finished: 0,
  avg_finish_day: 0,
  avg_start_hour: 0,
};

const setState = (newState) => {
  state = { ...state, ...newState };
  listeners.forEach((listener) => {
    listener(state);
  });
};

const useCustom = () => {
  const newListener = useState()[1];
  useEffect(() => {
    listeners.push(newListener);
  }, []);
  return [state, setState];
};

export default useCustom;
