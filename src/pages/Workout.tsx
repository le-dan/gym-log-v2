import { NavLink} from "react-router";
import { WorkoutInterface } from "../util/interfaces";
import db from "local-db-storage";
import { useEffect, useState } from "react";
import { fetchData } from "../util/util";

export default function Workout() {
	const [workouts, setWorkouts] = useState<WorkoutInterface[] | undefined>(undefined);

	useEffect(() => {
		fetchData<WorkoutInterface[]>("WorkoutsDB").then((res) => {			
			setWorkouts(res);
		});
	}, []);

	async function handleRemoveButton(name: string) {
		let workoutDB: WorkoutInterface[] | undefined = await db.getItem("WorkoutsDB");

		if (workoutDB === undefined) {
			workoutDB = [];
		}
		workoutDB = workoutDB.filter(workout => workout.name !== name);
		await db.setItem("WorkoutsDB", workoutDB);
		setWorkouts(workoutDB);
	}

	return workouts !== undefined && workouts.length > 0 ? (
		<>
			{workouts.map((workout) => {
				return <div className="rounded-xl hover-css p-5 m-2 h-fit w-fit flex flex-col bg-snow-white shadow-2xl shadow-primary text-text hover:bg-accent hover:cursor-pointer" key={workout.name}>
					<div className="flex items-center space-x-4">
						<h2 className="text-2xl font-semibold">{workout.name}</h2>
						<button onClick={() => handleRemoveButton(workout.name)} className="text-red-500 hover:text-red-700 font-bold text-xl"
						> X </button>
					</div>
				</div>;
			})}
			<div className="h-full w-full flex flex-col text-primary/60 items-center justify-center text-4xl gap-12">
			You have some workouts! Nice! :)
			<NavLink
				to="create"
				className="text-xl py-3 px-5 bg-primary text-snow-white hover-css rounded-xl hover:bg-accent hover:cursor-pointer animate-bounce ease-in-out"
			>
				create workout
			</NavLink>
			</div>
		</>
	) : (
		<div className="h-full w-full flex flex-col text-primary/60 items-center justify-center text-4xl gap-12">
			There are no custom workouts yet! Bummer! :(
			<NavLink
				to="create"
				className="text-xl py-3 px-5 bg-primary text-snow-white hover-css rounded-xl hover:bg-accent hover:cursor-pointer animate-bounce ease-in-out"
			>
				create workout
			</NavLink>
		</div>
	);
}
