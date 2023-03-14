"use client";

import { AnimatePresence, motion } from "framer-motion";
import { type ReactNode } from "react";

const PageTransition = ({ children }: { children: ReactNode }) => {
	return (
		<div className="w-full px-2 pt-2 lg:pr-3">
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
					{children}
				</motion.div>
			</AnimatePresence>
		</div>
	);
};
export default PageTransition;
