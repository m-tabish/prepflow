import { Outlet } from "react-router-dom";
// import Header from "@/components/header";
function ContactPage() {
	return (
		<div className="flex-col md:px-12">
			<Outlet />
		</div>
	);
}

export default ContactPage;
