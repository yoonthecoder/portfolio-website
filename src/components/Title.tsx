interface Title {
	title: string;
	description?: string;
}

function Title({ title, description }: Title) {
	return (
		<div className="font-medium tracking-tight text-yellow border-b border-dashed text-3xl py-2">
			<div>{title}</div>
			<div className="text-black text-base font-light dark:text-lightgray">
				{description}
			</div>
		</div>
	);
}

export default Title;
