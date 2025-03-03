import { Muscle, WorkoutInterface } from "../../util/interfaces";
import { useNavigate } from "react-router";
import db from "local-db-storage";

export default function CreateWorkout() {
	const navigate = useNavigate();
	async function handleCreateButton(name: string, exerciseName: string, sets: number, reps: number, instructions: string) {
		let workoutDB: WorkoutInterface[] | undefined = await db.getItem("WorkoutsDB");
		if (workoutDB === undefined) {
			workoutDB = [];
		}
		let workout: WorkoutInterface = {
			name: name,
			exercises: [
				{
					name: exerciseName,
					reps: reps,
					sets: sets,
					musclesWorked: [],
					instructions: instructions,
					setsCompleted: 0,
				},
			],
			intensity: 0,
			elapsedMin: 0,
			elapsedSec: 0,
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
								<input id="exerciseNameInput" type="text" className="border p-2 w-full" placeholder="Enter exercise name" />
							</label>
							<label className="text-lg">
								Sets:
								<input id="setsInput" type="number" className="border p-2 w-full" placeholder="Enter number of sets" />
							</label>
							<label className="text-lg">
								Reps per Set:
								<input id="repsInput" type="number" className="border p-2 w-full" placeholder="Enter number of reps per set" />
							</label>
							<label className="text-lg">
								Instructions:
								<input id="instructionsInput" type="text" className="border p-2 w-full" placeholder="Enter instructions" />
							</label>
						</div>
					</div>
				</div>
				<button
					className="bg-primary text-white p-2 mt-4 text-center"
					onClick={async (e) => {
						e.preventDefault();
						let nameInputElement = document.getElementById("nameInput");
						let exerciseNameInputElement = document.getElementById("exerciseNameInput");
						let setsInputElement = document.getElementById("setsInput");
						let repsInputElement = document.getElementById("repsInput");
						let instructionsInputElement = document.getElementById("instructionsInput");

						if (
							nameInputElement === null ||
							exerciseNameInputElement === null ||
							setsInputElement === null ||
							repsInputElement === null ||
							instructionsInputElement === null
						) {
							return;
						}

						let nameInput = (nameInputElement as HTMLInputElement).value;
						let exerciseNameInput = (exerciseNameInputElement as HTMLInputElement).value;
						let setsInput = (setsInputElement as HTMLInputElement).value;
						let repsInput = (repsInputElement as HTMLInputElement).value;
						let instructionsInput = (instructionsInputElement as HTMLInputElement).value;

						if (
							nameInput !== "" &&
							exerciseNameInput !== "" &&
							setsInput !== "" &&
							repsInput !== "" &&
							instructionsInput !== ""
						) {
							await handleCreateButton(nameInput.toString(), exerciseNameInput.toString(), parseInt(setsInput), parseInt(repsInput), instructionsInput.toString());
						} else {
							alert("Please fill in all fields.");
						}
					}}
				>
					Create
				</button>
			</form>
		</div>
	);
}
