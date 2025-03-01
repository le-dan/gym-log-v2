import { useEffect, useState } from "react";
import NavBar from "../components/Dashboard/NavBar";
import WorkoutDisplay from "../components/Dashboard/WorkoutDisplay";
import WorkoutGrid from "../components/Dashboard/WorkoutGrid";
import WorkoutComplete from "../components/Dashboard/WorkoutComplete";
import { WorkoutInterface } from "../util/interfaces";
import { Routes, Route, useNavigate } from "react-router";

export default function Dashboard() {
	const [chosenWorkout, setChosenWorkout] = useState<WorkoutInterface>();
	let navigate = useNavigate();
	useEffect(() => {
		if (chosenWorkout === undefined) {
			navigate("/dashboard/selectWorkout");
		}
	}, []);

	return (
		<div className="h-full flex flex-col gap-5 items-center">
			<NavBar />
			<Routes>
				<Route path=":workout/*" element={<WorkoutDisplay workout={chosenWorkout} setChosenWorkout={setChosenWorkout} />} />
				<Route path="selectWorkout" element={<WorkoutGrid setChosenWorkout={setChosenWorkout} />} />
				<Route path="complete" element={<WorkoutComplete workout={chosenWorkout} />} />
			</Routes>
		</div>
	);
}
