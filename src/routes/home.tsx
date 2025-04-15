import { Link
 } from "react-router-dom";
import {
	LucidePencil,
	Rocket,
	LetterTextIcon,
	Settings2Icon,
	Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import Feature_home_page from "@/components/feature_home_page";

const HomePage = () => {
	return (
		<div className="flex-col w-full pb-24 bg-secondary ">
			<Container>
				<div className="my-8 w-full text-center flex flex-col gap-3">
					<h2 className="text-3xl text-center md:text-center md:text-3xl">
						<span className=" text-outline font-extrabold md:text-6xl text-center w-1/2  ">
							Prepflow
						</span>
						<br />
						<span className="font-serif text-primary mt-2 ">
							One shot Preparation for your next Interview
						</span>
					</h2>
				</div>
			</Container>

			{/* image section */}
			<div className=" p-0 m-0 mx-auto w-2/4 flex justify-center items-center overflow-hidden  ">
				<img
					src="/assets/img/hero.jpg"
					alt="Hero"
					className="w-full h-full object-cover block p-0"
				/>
			</div>

			<Container className="py-8 text-primary w-2/3    ">
				<div className="grid grid-cols-2 row-span-2 col-start-2 col-span-2   min-w-full gap-x-12 gap-y-8">
					{/* feature 1 */}
					<Feature_home_page
						children={
							<LucidePencil
								size={30}
								color={"red"}
								className="ml-2 mt-2 "></LucidePencil>
						}
						title={"Resume Scoring & Optimization"}
						description={
							"Analyze uploaded resumes for format, grammar, and ATS compatibility and get tailored improvements based on specific industries, roles, or job descriptions."
						}
					/>
					<Feature_home_page
						children={
							<Rocket
								size={30}
								className="ml-2 mt-2"
							/>
						}
						title={"Resources with Question banks."}
						description={
							"Offer a curated library of common and role-specific interview questions.Enable a practice mode where users can attempt these questions and get feedback."
						}
					/>
					<Feature_home_page
						children={
							<Settings2Icon
								size={30}
								className="ml-2 mt-2"
							/>
						}
						title={"Personality and Strengths Analysis"}
						description={
							"Provide insights into personality traits and strengths using psychometric analysis. Align personality results with ideal job roles or industries."
						}
					/>
					<Feature_home_page
						children={<LetterTextIcon />}
						title={"AI-Powered Mock Interviews"}
						description={
							"Upload your resume to an AI avatar that conducts mock interviews based on the job description. It analyzes your resume, asks role-specific questions, and gives real-time feedback to help you improve and prepare confidently."
						}
					/>
				</div>
			</Container>
			<Container className="w-full flex justify-center items-center">
				<Link
					to={"/generate"}
					className="mx-auto">
					<Button className="mx-auto bg-accent">
						Generate <Sparkles className="ml-2" />
					</Button>
				</Link>
			</Container>
		</div>
	);
};

export default HomePage;
