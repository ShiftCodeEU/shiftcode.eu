"use client";

import { AnimatePresence, motion } from "framer-motion";
import { type ReactNode } from "react";

const PageTransition = ({ children }: { children: ReactNode }) => {
	let windowRef = {
		location: {
			pathname: ""
		}
	};

	if (typeof window !== "undefined") {
		windowRef = window;
	}

	return (
		<div className="w-full">
			<AnimatePresence>
				<motion.div
					key={windowRef.location.pathname}
					initial="initialState"
					animate="animateState"
					exit="exitState"
					transition={{
						duration: 0.7,
						ease: "easeInOut"
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
					className="absolute w-full px-2 pt-2 lg:pr-3"
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</div>
	);
};
export default PageTransition;
