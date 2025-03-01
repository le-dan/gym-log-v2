import dayjs from "dayjs";
import { Exercise, WorkoutInterface } from "../../util/interfaces";
import WorkoutOverview from "./WorkoutDisplay/WorkoutOverview";
import ExerciseList from "./WorkoutDisplay/ExerciseList";
import { useEffect, useState } from "react";
import ExerciseInformation from "./WorkoutDisplay/ExerciseInformation";
import { Route, Routes, useNavigate, useParams } from "react-router";

interface WorkoutDisplayProps {
	workout: WorkoutInterface | undefined;
	setChosenWorkout: React.Dispatch<React.SetStateAction<WorkoutInterface | undefined>>;
}

export default function WorkoutDisplay({ workout, setChosenWorkout }: WorkoutDisplayProps) {
	const currentDay = dayjs();
	const { workout: workoutParam } = useParams();
	let navigate = useNavigate();
	const [exercises, setExercises] = useState<Exercise[]>(workout ? workout.exercises : []);
	const [chosenExercise, setChosenExercise] = useState<Exercise | undefined>();

	// when chosen exercise done, move on to next
	useEffect(() => {
		if (chosenExercise === undefined && workout && !workout.done) {
			setChosenExercise(exercises[0]);
			navigate(`/dashboard/${workoutParam}/${exercises[0].name.replace(" ", "").toLowerCase()}`);
			return;
		}

		const exerciseIndex = exercises.findIndex((e) => e.name === (chosenExercise && chosenExercise.name));
		if (exerciseIndex >= 0 && exercises[exerciseIndex].setsCompleted === exercises[exerciseIndex].sets) {
			// go to next available exercise
			for (let i = 0; i < exercises.length; i++) {
				if (exercises[i].setsCompleted < exercises[i].sets) {
					setChosenExercise(exercises[i]);
					navigate(`/dashboard/${workoutParam}/${exercises[i].name.replace(" ", "").toLowerCase()}`);
					return;
				}
			}
			// no more left
			setChosenWorkout(workout && { ...workout, done: true });
			setChosenExercise(undefined);
			navigate(`/dashboard/complete`);
		}
	}, [exercises]);

	return (
		<div className="rounded-lg p-10 gap-10 h-full w-full flex bg-snow-white shadow-2xl text-text overflow-y-scroll">
			<WorkoutOverview currentDay={currentDay} workout={workout} />
			<div className="h-full w-[4px] bg-accent opacity-20 rounded-xl"></div>
			<ExerciseList exercises={exercises} chosenExercise={chosenExercise} setChosenExercise={setChosenExercise} />
			<div className="h-full w-[4px] bg-accent opacity-20 rounded-xl"></div>
			<Routes>
				<Route
					path={`:exercise`}
					element={<ExerciseInformation chosenExercise={chosenExercise} exercises={exercises} setExercises={setExercises} />}
				/>
			</Routes>
		</div>
	);
}
