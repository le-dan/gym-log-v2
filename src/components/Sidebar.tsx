import { BookMarked, Dumbbell, House } from "lucide-react";
import { UserRound } from "lucide-react";
import { History } from "lucide-react";
// import { BookOpenText } from "lucide-react";
import { NavLink } from "react-router";

export default function Sidebar() {
	return (
		<div className="shrink-0 w-50 h-full bg-primary py-10 px-4 flex justify-center flex-col gap-25">
			<span className="w-full flex flex-col gap-10 text-center text-3xl">
				<div className="flex flex-col items-center gap-2 font-bold">
					<BookMarked size={50} />
					JymLog
				</div>
				<div className="w-full h-[2px] bg-snow-white opacity-80 rounded-xl"></div>
			</span>
			<div className="h-full flex flex-col gap-4">
				<NavLink
					to={"profile"}
					className="flex items-center gap-3 rounded-md p-2 hover-css hover:bg-accent text-xl font-light"
				>
					<UserRound size={25} />
					Profile
				</NavLink>
				<NavLink
					to={"/"}
					className="flex items-center gap-3 rounded-md p-2 hover-css hover:bg-accent text-xl font-light"
				>
					<House size={25} />
					Dashboard
				</NavLink>
				<NavLink
					to={"workout"}
					className="flex items-center gap-3 rounded-md p-2 hover-css hover:bg-accent text-xl font-light"
				>
					<Dumbbell size={25} />
					Workouts
				</NavLink>
				<NavLink
					to={"history"}
					className="flex items-center gap-3 rounded-md p-2 hover-css hover:bg-accent text-xl font-light"
				>
					<History size={25} />
					History
				</NavLink>
			</div>
		</div>
	);
}
