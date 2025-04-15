import { MainRoutes } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

interface NavigationRoutesProps {
	isMobile?: boolean;
}

export const NavigationRoutes = ({
	isMobile = false,
}: NavigationRoutesProps) => {
	return (
		<ul
			className={cn(
				"flex items-center  gap-6 border-secondary border text-primary",
				isMobile && "items-start flex-col gap-8 "
			)}>
			{MainRoutes.map((route) => (
				<NavLink
					key={route.href}
					to={route.href}
					className={({ isActive }) =>
						cn(
							"text-base text-primary ",
							isActive &&
								"text-accent  underline underline-offset-4 font-semibold "
						)
					}>
					{route.label}
				</NavLink>
			))}
		</ul>
	);
};
