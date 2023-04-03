const Loading = () => {
	return (
		<>
			<div className="hero py-14 lg:py-32">
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<h1 className="mb-5 animate-pulse text-2xl font-bold lg:text-5xl">
							Loading...
						</h1>
						<p className="mb-5 animate-pulse lg:text-lg">...</p>
					</div>
				</div>
			</div>

			<div id="showcase-mock" className="flex flex-col pb-16">
				<h2 className="mb-5 animate-pulse text-center font-bold lg:text-2xl">
					...
				</h2>
				<div className="bg-base-400 bg-glass-black mockup-window hidden border border-accent lg:inline-block">
					<div className="bg-glass-black relative flex h-auto justify-center">
						<div className="h-[600px] w-[1200px] animate-pulse border-t border-accent">
							...
						</div>
					</div>
				</div>
				<div className="mockup-phone mx-auto inline-block max-w-[280px] border-accent lg:hidden">
					<div className="camera"></div>
					<div className="display flex max-w-[270px]">
						<div className="h-[600px] w-[1200px] animate-pulse border-t border-accent">
							...
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Loading;
