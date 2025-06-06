import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { title } from 'process';

const workItems = [
	{ title: 'BreviloAI', status: 'planning', description: 'AI repurposing SaaS for students.' },
    { title: 'Documed', status: 'development', description: 'Offline toolkit for PDF & image tools.' },
	{ title: 'WebxZet', status: 'completed', description: 'Hub for free tools and productivity experiments.' },
	{ title: 'Tazko', status: 'completed', description: 'Create, organize, and track your tasks with simple task management system.' },
	{ title: 'Lumen', status: 'completed', description: 'Your space to reflect, privately, add notes, and track your thoughts.' },
	{ title: 'SaveFlow', status: 'completed', description: 'Simple budget tracker for students.' },
];

const statusIcon = (status: string) => {
	if (status === 'completed') return '✅';
	if (status === 'planning') return '📝';
	return '🧪';
};

const statusLabel = (status: string) => {
	if (status === 'completed') return 'Completed';
	if (status === 'planning') return 'Planning';
	return status;
};

const CurrentlyShipping = () => (
	<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
		<div className="max-w-2xl mx-auto">
			<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
				<span className="terminal-text font-mono">// </span>
				Currently Shipping
			</h2>
			<Card className="p-0 overflow-hidden animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
				<CardHeader className="pb-2">
					<CardTitle className="text-lg sm:text-xl font-mono text-terminal-green">Projects</CardTitle>
				</CardHeader>
				<CardContent className="pt-0">
					<ul className="divide-y divide-border">
						{workItems.map((work, idx) => (
							<li key={work.title} className="flex flex-col sm:flex-row sm:items-center justify-between py-4 first:pt-0 last:pb-0">
								<div className="flex items-center gap-3">
									<span className="text-xl">{statusIcon(work.status)}</span>
									<div>
										<span className="text-base sm:text-lg font-medium block">{work.title}</span>
										<span className="text-xs text-muted-foreground block mt-0.5">{work.description}</span>
									</div>
								</div>
								<Badge variant={work.status === 'completed' ? 'default' : 'secondary'} className="text-xs px-3 py-1 mt-2 sm:mt-0">
									{statusLabel(work.status)}
								</Badge>
							</li>
						))}
					</ul>
				</CardContent>
			</Card>
		</div>
	</section>
);

export default CurrentlyShipping;
