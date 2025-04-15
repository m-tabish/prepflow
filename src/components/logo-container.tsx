import { Link } from "react-router-dom";

export const LogoContainer = () => {
	return (
		<Link
			to={"/"}
			className="flex items-center gap- 2 ">
			<img
				src="/assets/img/logo/prepflow.png"
				alt=""
				className="max-h-8 object-contain "
			/>
			<div className="flex  gap-2">
				<p className="text-3xl font-semibold mx-2 text-primary rounded-full ">
					Prepflow
				</p>
			</div>
		</Link>
	);
};
