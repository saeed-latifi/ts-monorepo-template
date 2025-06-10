import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";
import { myLogger } from "../../../packages/utils";

export default function App() {
	const a = myLogger("a");
	return (
		<Router
			root={(props) => (
				<>
					<Nav />
					<Suspense>{props.children}</Suspense>
				</>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
