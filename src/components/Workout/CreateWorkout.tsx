import { Muscle, WorkoutInterface } from "../../util/interfaces";
import { useNavigate } from "react-router";
import db from "local-db-storage";

export default function CreateWorkout() {
	const navigate = useNavigate();
	async function handleCreateButton(name: string) {
		let workoutDB: WorkoutInterface[] | undefined = await db.getItem("WorkoutsDB");
		if (workoutDB === undefined) {
			workoutDB = [];
		}
		let workout: WorkoutInterface = {
			name: name,
			exercises: [
				{
					name: "Inclined Bench Press",
					reps: 10,
					sets: 4,
					musclesWorked: [Muscle.CHEST, Muscle.TRICEPS],
					instructions:
						"Lie on a bench set to 45 degrees, grip two Dumbell slightly wider than shoulder-width at an angle facing your pecs, lower it to your chest, then push it back up.",
					setsCompleted: 0,
				},
			],
			intensity: 0,
			timeElapsed: "0",
			done: false,
		};
		workoutDB.push(workout);
		await db.setItem("WorkoutsDB", workoutDB).then(() => {
			navigate("/workout");
		});
	}

	return (
		<div className="h-full w-full flex flex-col text-primary/60 items-center justify-center text-4xl gap-12">
			<form className="flex flex-col gap-4 w-3/4 p-10 overflow-y-scroll">
				<h1>New Workout!</h1>
				<label className="text-lg">
					Workout Name:
					<input id="nameInput" type="text" className="border p-2 w-full" placeholder="Enter workout name" />
				</label>
				<div className="flex flex-col gap-4">
					<div className="flex justify-between items-center">
						<h2 className="text-2xl">Exercises</h2>
						<button type="button" className="bg-primary text-white p-2 text-xl">
							Add
						</button>
					</div>
					<div className="flex flex-col gap-4">
						<div className="flex flex-col gap-2 border p-4">
							<label className="text-lg">
								Exercise Name:
								<input type="text" className="border p-2 w-full" placeholder="Enter exercise name" />
							</label>
							<label className="text-lg">
								Sets:
								<input type="number" className="border p-2 w-full" placeholder="Enter number of sets" />
							</label>
							<label className="text-lg">
								Reps per Set:
								<input type="number" className="border p-2 w-full" placeholder="Enter number of reps per set" />
							</label>
							<label className="text-lg">
								Instructions:
								<input type="text" className="border p-2 w-full" placeholder="Enter instructions" />
							</label>
						</div>
					</div>
				</div>
				<button
					className="bg-primary text-white p-2 mt-4 text-center"
					onClick={async (e) => {
						e.preventDefault();
						let nameInputElement = document.getElementById("nameInput");
						if (nameInputElement === null) {
							return;
						}
						let nameInput = (nameInputElement as HTMLInputElement).value;
						if (nameInput !== null && nameInput !== "") {
							await handleCreateButton(nameInput.toString());
						}
					}}
				>
					Create
				</button>
			</form>
		</div>
	);
}
