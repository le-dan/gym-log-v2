import { useEffect } from "react";
import { Exercise } from "../../../util/interfaces";
import SetCard from "./SetCard";

interface ExerciseInformationProps {
	chosenExercise: Exercise | undefined;
	exercises: Exercise[];
	setExercises: React.Dispatch<React.SetStateAction<Exercise[]>>;
}

export default function ExerciseInformation({ chosenExercise, exercises, setExercises }: ExerciseInformationProps) {
	const exercise = exercises.find((e) => e.name === (chosenExercise && chosenExercise.name));

	useEffect(() => {
		if (exercise?.setsCompleted === exercise?.sets) {
			setExercises((prevExercises) => {
				return prevExercises.map((exercise) =>
					exercise.name === (chosenExercise && chosenExercise.name)
						? {
								...exercise,
								["done"]: true,
						  }
						: exercise
				);
			});
		}
	}, [exercise?.setsCompleted]);

	const renderSets = () => {
		if (chosenExercise) {
			const setDivs = [];
			for (let i = 1; i <= chosenExercise.sets; i++) {
				setDivs.push(<SetCard key={i} exerciseName={chosenExercise.name} exercises={exercises} setExercises={setExercises} />);
			}
			return (
				<div className="flex flex-col gap-4" key={chosenExercise.name}>
					<span className="text-2xl font-black">
						{exercise && exercise.setsCompleted}/{chosenExercise.sets} SETS
					</span>
					{setDivs}
				</div>
			);
		}
	};

	return chosenExercise ? (
		<div className="h-full w-full pl-5 flex flex-col gap-6 select-none" key={chosenExercise.name}>
			<div className="flex flex-col gap-2">
				<span className="text-6xl text-primary font-bold">{chosenExercise.name}</span>
				<span className="flex items-center text-lg font-semibold">
					{chosenExercise.musclesWorked.reduce((str, muscle) => (str += muscle.toUpperCase() + " "), "")}
				</span>
			</div>
			<div className="w-full h-1 bg-primary rounded-4xl"></div>
			<div className="text-2xl flex flex-col select-text">
				<span className="font-black">INSTRUCTIONS</span>
				{chosenExercise.instructions}
			</div>
			<div className="text-2xl flex flex-col">{renderSets()}</div>
		</div>
	) : (
		<></>
	);
}
