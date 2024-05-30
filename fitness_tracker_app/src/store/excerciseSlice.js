import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exercises: [],
};

const exerciseSlice = createSlice({
  name: "exercises",
  initialState,
  reducers: {
    addExercise: (state, action) => {
      state.exercises.push(action.payload);
    },
    deleteExercise: (state, action) => {
      state.exercises = state.exercises.filter(
        (exercise) => exercise.id !== action.payload
      );
    },
    updateExercise: (state, action) => {
      const index = state.exercises.findIndex(
        (exercise) => exercise.id === action.payload.id
      );
      if (index !== -1) {
        state.exercises[index] = action.payload;
      }
    },
  },
});

export const { addExercise, deleteExercise, updateExercise } =
  exerciseSlice.actions;
export default exerciseSlice.reducer;
