export enum Muscle {
	BICEPS = "BICEPS",
	TRICEPS = "TRICEPS",
	CHEST = "CHEST",
	SHOULDERS = "SHOULDERS",
	BACK = "BACK",
	QUADRICEPS = "QUADRICEPS",
	HAMSTRINGS = "HAMSTRINGS",
	CALVES = "CALVES",
	ABDOMINALS = "ABDOMINALS",
}

export interface Exercise {
	name: string;
	reps: number;
	sets: number;
	musclesWorked: Muscle[];
	instructions: string;
	setsCompleted: number;
}

export interface WorkoutInterface {
	name: string;
	exercises: Exercise[];
	intensity: number;
	timeElapsed: string;
	completionDate?: string;
	done: boolean;
}
