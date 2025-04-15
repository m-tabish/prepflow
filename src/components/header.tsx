import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";
import { Container } from "./container";
import { LogoContainer } from "./logo-container";
import { NavigationRoutes } from "./navigation-routes";
import { ProfileContainer } from "./profile-container";
import { ToggleContainer } from "./toggle-container";

const Header = () => {
	const { userId } = useAuth();

	return (
		<header
			className={cn(
				"w-full border-b duration-150 transition-all ease-in-out bg-secondary border-secondary border"
			)}>
			<Container>
				<div className="flex items-center gap-4 w-full text-primary ">
					{/* logo section */}
					<LogoContainer />

					{/* navigation section */}
					<nav className="hidden md:flex items-center gap-3">
						<NavigationRoutes />
						{userId && (
							<div className="mx-2 flex gap-3">
								<NavLink
									to={"/resume-analysis"}
									className={({ isActive }) =>
										cn(
											"text-base text-primary",
											isActive && "text-accent font-semibold"
										)
									}>
									Resume Analysis
								</NavLink>
								<NavLink
									to={"/generate"}
									className={({ isActive }) =>
										cn(
											"text-base text-primary",
											isActive && "text-accent font-semibold"
										)
									}>
									Take An Interview
								</NavLink>
							</div>
						)}
					</nav>

					<div className="ml-auto flex items-center gap-6">
						{/* profile section */}
						<ProfileContainer />

						{/* mobile toggle section */}
						<ToggleContainer />
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
