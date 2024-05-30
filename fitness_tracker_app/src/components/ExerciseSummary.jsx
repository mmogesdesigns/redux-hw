import React from "react";
import { useSelector } from "react-redux";

const ExerciseSummary = () => {
  const exercises = useSelector((state) => state.exercises.exercises);

  const totalDuration = exercises.reduce(
    (total, exercise) => total + parseInt(exercise.duration),
    0
  );
  const totalCalories = exercises.reduce(
    (total, exercise) => total + parseInt(exercise.calories),
    0
  );

  return (
    <div>
      <h2>Exercise Summary</h2>
      <p>Total Duration: {totalDuration} minutes</p>
      <p>Total Calories Burned: {totalCalories} calories</p>
    </div>
  );
};

export default ExerciseSummary;
