import { AnimatePresence, motion } from "framer-motion";

const PageTransition = (props: { children: any }) => {
	const Children = (props: { childElements: any }) => {
		return <>{props.childElements}</>;
	};

	return (
		<div className="w-full px-2 pt-2 lg:pr-4">
			<AnimatePresence>
				<motion.div
					key={window.location.pathname}
					initial="initialState"
					animate="animateState"
					exit="exitState"
					transition={{
						duration: 0.75
					}}
					variants={{
						initialState: {
							opacity: 0,
							top: -50
						},
						animateState: {
							opacity: 1,
							top: 0
						},
						exitState: {
							opacity: 0,
							top: -50
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
