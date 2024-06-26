import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExercise, deleteExercise } from "../store/exerciseSlice";

const Exercises = () => {
  const exercises = useSelector((state) => state.exercises.exercises);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [reps, setReps] = useState("");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addExercise({ id: Date.now(), name, reps, duration, calories }));
    setName("");
    setReps("");
    setDuration("");
    setCalories("");
  };

  return (
    <div>
      <h2>Exercises</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Exercise name"
          required
        />
        <input
          type="text"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          placeholder="Reps"
          required
        />
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Duration (mins)"
          required
        />
        <input
          type="text"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          placeholder="Calories burned"
          required
        />
        <button type="submit">Add Exercise</button>
      </form>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>
            {exercise.name} - {exercise.reps} reps - {exercise.duration} mins -{" "}
            {exercise.calories} calories
            <button onClick={() => dispatch(deleteExercise(exercise.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Exercises;
