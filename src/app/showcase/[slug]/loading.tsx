const Loading = () => {
	return (
		<>
			<div className="hero py-14 lg:py-32">
				<div className="hero-content text-center text-neutral-content">
					<div className="flex max-w-md flex-col gap-2">			
					</div>
				</div>
			</div>

			<div id="showcase-mock" className="flex flex-col pb-16">
				<div className="bg-base-400 bg-glass-black mockup-window mx-auto hidden w-screen max-w-[600px] border border-accent lg:inline-block">
					<div className="bg-glass-black relative flex h-auto animate-pulse justify-center">
						<div className="h-80 w-full rounded-b-xl bg-stone-900"></div>
					</div>
				</div>
				<div className="mockup-phone mx-auto inline-block max-w-[280px] border-accent lg:hidden">
					<div className="camera"></div>
					<div className="display flex max-w-[270px]">
						<div
							style={{ width: "268px", height: "1200px" }}
							className="phone-1 artboard artboard-demo mx-auto mt-6 animate-pulse"
						/>
					</div>
				</div>
			</div>
		</>
	);
};
export default Loading;
