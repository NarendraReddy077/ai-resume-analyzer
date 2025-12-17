type ScoreBadgeProps = {
	score: number;
};

/**
 * ScoreBadge
 * Displays a small badge with a label and color that depends on the numeric score.
 * - score > 70 => Strong (green)
 * - score > 49 => Good Start (yellow)
 * - otherwise  => Needs Work (red)
 */
export default function ScoreBadge({ score }: ScoreBadgeProps) {
	let label = "Needs Work";
	let classes = "bg-badge-red text-red-600";

	if (score > 70) {
		label = "Strong";
		classes = "bg-badge-green text-green-600";
	} else if (score > 49) {
		label = "Good Start";
		classes = "bg-badge-yellow text-yellow-600";
	}

	return (
		<div
			role="status"
			aria-label={`Score: ${score} - ${label}`}
			className={`inline-flex items-center px-2 py-1 rounded-full text-sm font-medium ${classes}`}
		>
			<p>{label}</p>
		</div>
	);
}

