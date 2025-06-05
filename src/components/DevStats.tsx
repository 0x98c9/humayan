import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  { label: 'Failed Launches', value: '5' },
  { label: 'Cups of Coffee', value: '200+' },
  { label: 'Distractions Avoided', value: '∞' },
  { label: 'Lines of Code', value: '50,000+' }
];

const DevStats = () => (
	<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
		<div className="max-w-6xl mx-auto">
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
				{stats.map((stat, index) => (
					<Card
						key={index}
						className="text-center transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 cursor-pointer group opacity-0 animate-fade-in"
						style={{
							animationDelay: `${0.2 * index}s`,
							animationFillMode: 'forwards'
						}}
					>
						<CardContent className="pt-4 sm:pt-6 pb-4 sm:pb-6">
							<div className="text-2xl sm:text-3xl font-bold text-terminal-green transition-all duration-300 group-hover:scale-110">
								{stat.value}
							</div>
							<div className="text-xs sm:text-sm text-muted-foreground mt-1 transition-all duration-300 group-hover:text-foreground">
								{stat.label}
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	</section>
);

export default DevStats;
