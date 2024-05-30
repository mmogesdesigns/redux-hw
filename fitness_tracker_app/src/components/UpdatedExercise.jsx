import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateExercise } from "../store/exerciseSlice";

const UpdateExercise = () => {
  const exercises = useSelector((state) => state.exercises.exercises);
  const dispatch = useDispatch();
  const [selectedExercise, setSelectedExercise] = useState("");
  const [name, setName] = useState("");
  const [reps, setReps] = useState("");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");

  const handleSelectChange = (e) => {
    const exercise = exercises.find((ex) => ex.id === parseInt(e.target.value));
    setSelectedExercise(exercise.id);
    setName(exercise.name);
    setReps(exercise.reps);
    setDuration(exercise.duration);
    setCalories(exercise.calories);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateExercise({ id: selectedExercise, name, reps, duration, calories })
    );
    setSelectedExercise("");
    setName("");
    setReps("");
    setDuration("");
    setCalories("");
  };

  return (
    <div>
      <h2>Update Exercise</h2>
      <form onSubmit={handleSubmit}>
        <select value={selectedExercise} onChange={handleSelectChange} required>
          <option value="" disabled>
            Select an exercise
          </option>
          {exercises.map((exercise) => (
            <option key={exercise.id} value={exercise.id}>
              {exercise.name}
            </option>
          ))}
        </select>
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
        <button type="submit">Update Exercise</button>
      </form>
    </div>
  );
};

export default UpdateExercise;
