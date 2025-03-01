import { Muscle, WorkoutInterface } from "./util/interfaces";

export const testWorkouts: WorkoutInterface[] = [
	{
		name: "Push Day",
		exercises: [
			{
				name: "Bench Press",
				reps: 10,
				sets: 4,
				musclesWorked: [Muscle.CHEST, Muscle.TRICEPS],
				instructions: "Lie on a bench, grip the barbell slightly wider than shoulder-width, lower it to your chest, then push it back up.",
				setsCompleted: 0
			},
			{
				name: "Shoulder Press",
				reps: 8,
				sets: 3,
				musclesWorked: [Muscle.SHOULDERS, Muscle.TRICEPS],
				instructions: "Sit or stand with a dumbbell in each hand, press them overhead until your arms are fully extended, then lower back down.",
				setsCompleted: 0
			},
			{
				name: "Tricep Dips",
				reps: 12,
				sets: 3,
				musclesWorked: [Muscle.TRICEPS],
				instructions: "Grip parallel bars, lower your body by bending your elbows, then push yourself back up.",
				setsCompleted: 0
			},
		],
		intensity: 8,
		done: false,
		timeElapsed: "45:32"
	},
	{
		name: "Pull Day",
		exercises: [
			{
				name: "Pull-Ups",
				reps: 10,
				sets: 4,
				musclesWorked: [Muscle.BACK, Muscle.BICEPS],
				instructions: "Grip the bar with palms facing away, pull yourself up until your chin clears the bar, then lower back down.",
				setsCompleted: 0
			},
			{
				name: "Barbell Rows",
				reps: 8,
				sets: 3,
				musclesWorked: [Muscle.BACK, Muscle.BICEPS],
				instructions: "Bend at the hips, keep your back straight, pull the barbell towards your waist, then lower it back.",
				setsCompleted: 0
			},
			{
				name: "Face Pulls",
				reps: 12,
				sets: 3,
				musclesWorked: [Muscle.SHOULDERS, Muscle.BACK],
				instructions: "Use a rope attachment on a cable machine, pull the handles towards your face, then slowly return.",
				setsCompleted: 0
			},
		],
		intensity: 7,
		done: false,
		timeElapsed: "38:15"
	},
	{
		name: "Leg Day",
		exercises: [
			{
				name: "Squats",
				reps: 10,
				sets: 4,
				musclesWorked: [
					Muscle.QUADRICEPS,
					Muscle.HAMSTRINGS,
					Muscle.CALVES,
				],
				instructions: "Stand with feet shoulder-width apart, lower your hips down and back, then drive back up.",
				setsCompleted: 0
			},
			{
				name: "Deadlifts",
				reps: 8,
				sets: 3,
				musclesWorked: [Muscle.BACK, Muscle.HAMSTRINGS],
				instructions: "Grip the barbell, keep your back straight, lift by extending your hips and knees, then lower back.",
				setsCompleted: 0
			},
			{
				name: "Calf Raises",
				reps: 15,
				sets: 4,
				musclesWorked: [Muscle.CALVES],
				instructions: "Stand with feet shoulder-width apart, raise your heels off the ground, then lower back down.",
				setsCompleted: 0
			},
		],
		intensity: 9,
		done: false,
		timeElapsed: "50:21"
	},
	{
		name: "Full Body Circuit",
		exercises: [
			{
				name: "Burpees",
				reps: 15,
				sets: 4,
				musclesWorked: [Muscle.CHEST],
				instructions: "Start standing, drop into a squat, kick your feet back, do a push-up, then jump up explosively.",
				setsCompleted: 0
			},
			{
				name: "Dumbbell Snatch",
				reps: 8,
				sets: 3,
				musclesWorked: [Muscle.SHOULDERS, Muscle.BACK, Muscle.QUADRICEPS],
				instructions: "Start with the dumbbell on the ground, explode up pulling it overhead in one motion.",
				setsCompleted: 0
			},
			{
				name: "Medicine Ball Slams",
				reps: 20,
				sets: 3,
				musclesWorked: [Muscle.ABDOMINALS, Muscle.SHOULDERS],
				instructions: "Lift the medicine ball overhead, slam it down to the ground with force, catch and repeat.",
				setsCompleted: 0
			},
		],
		intensity: 9,
		done: false,
		timeElapsed: "42:07"
	}
];
