import { motion, AnimatePresence } from "framer-motion";

const PageTransition = (props: { children: any }) => {
	const Children = (props: { childElements: any }) => {
		return <>{props.childElements}</>;
	};

	return (
		<div className="w-full">
			<AnimatePresence mode="wait">
				<motion.div
					key={window.location.pathname}
					initial="initialState"
					animate="animateState"
					exit="exitState"
					transition={{ duration: 0.8 }}
					variants={{
						initialState: {
							opacity: 0
						},
						animateState: {
							opacity: 1
						},
						exitState: {
							opacity: 0
						}
					}}
				>
					<Children childElements={props.children} />
				</motion.div>
			</AnimatePresence>
		</div>
	);
};
export default PageTransition;
