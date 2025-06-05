import React from 'react';

const timeline = [
	{
		year: 'April 2025 - Present',
		title: 'Restart & Focus on AI + Frontend',
		description: 'Gained momentum again with clear focus. Now exploring Tauri, offline-first development, and AI-powered tools.',
	},
	{
		year: 'Late 2023 - Early 2025',
		title: 'Pause & Reflection Period',
		description: 'Took a break from active development for reflection and focus. Now building with intention.',
	},
	{
		year: '2022 - 2023',
		title: 'JavaScript & React Era',
		description: 'Started building UIs using JavaScript and React. Developed simple, clean web apps and built an early connection with frontend logic.',
	},
	{
		year: '2021 - 2022',
		title: 'Python & Web Foundations',
		description: 'Explored programming fundamentals with Python. Played with Flask and Django, laying the groundwork for backend understanding.',
	},
];

const Timeline = () => (
	<section
		id="about"
		className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-card/50"
	>
		<div className="max-w-4xl mx-auto">
			<h2
				className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center opacity-0 animate-fade-in"
				style={{
					animationDelay: '0.2s',
					animationFillMode: 'forwards',
				}}
			>
				<span className="terminal-text font-mono">// </span>
				Journey Timeline
			</h2>
			<div className="relative flex flex-col items-center">
				{/* Vertical connector line */}
				<div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-terminal-green/30 z-0" />
				<ul className="w-full flex flex-col items-center z-10">
					{timeline.map((item, index) => (
						<li key={item.year} className="relative w-full flex flex-col items-center mb-12 last:mb-0">
							{/* Connector above (except first) */}
							{index !== 0 && (
								<div className="absolute left-1/2 -translate-x-1/2 -top-6 w-1 h-6 bg-terminal-green/40" />
							)}
							{/* Card */}
							<div className="bg-background border-2 border-terminal-green/60 rounded-lg shadow-lg px-8 py-6 w-full max-w-2xl text-center relative z-10 animate-fade-in group transition-all duration-300 hover:scale-105 flex flex-col items-center">
								<div className="w-full flex flex-col items-center">
									<div className="w-full mb-2">
										<span className="inline-block bg-terminal-green/10 border border-terminal-green text-terminal-green font-bold text-base rounded-md px-4 py-1 mb-2 group-hover:bg-terminal-green group-hover:text-background transition-all duration-300 select-none" style={{ fontSize: '1.1rem', letterSpacing: '0.02em' }}>
											{item.year}
										</span>
									</div>
									<h3 className="text-lg sm:text-xl font-semibold mb-1 group-hover:text-terminal-green transition-all duration-300">
										{item.title}
									</h3>
									<p className="text-sm sm:text-base text-muted-foreground group-hover:text-foreground transition-all duration-300">
										{item.description}
									</p>
								</div>
							</div>
							{/* Connector below (except last) */}
							{index !== timeline.length - 1 && (
								<div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-1 h-6 bg-terminal-green/40" />
							)}
						</li>
					))}
				</ul>
			</div>
		</div>
	</section>
);

export default Timeline;
