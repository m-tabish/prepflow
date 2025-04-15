interface FeatureHomePageProps {
	title: string; // Required prop
	description: string; // Required prop
	children: React.ReactNode; // Required prop
}

function Feature_home_page({
	title,
	description,
	children,
}: FeatureHomePageProps) {
	return (
		<div className="shadow-[0px_0px_50px_-8px_rgba(230,_55,_70,_0.5)] px-3 py-2 rounded-sm flex flex-col border border-accent border-opacity-15	  ">
			{children}
			<h1 className="font-bold text-2xl ">{title}</h1>
			<p className="text-md text-primary opacity-70 mt-2   ">{description}</p>
		</div>
	);
}

export default Feature_home_page;
