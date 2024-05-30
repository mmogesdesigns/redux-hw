import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExercise, deleteExercise } from "../store/exerciseSlice";

const Exercises = () => {
  const exercises = useSelector((state) => state.exercises.exercises);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [reps, setReps] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addExercise({ id: Date.now(), name, reps }));
    setName("");
    setReps("");
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
        <button type="submit">Add Exercise</button>
      </form>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>
            {exercise.name} - {exercise.reps} reps
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
