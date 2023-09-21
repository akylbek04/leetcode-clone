export type Example = {
	id: number;
	inputText: string;
	outputText: string;
	explanation?: string;
	img?: string;
};

// local problem data
export type Problem = {
	id: string;
	title: string;
	problemStatement: string;
	examples: Example[];
	constraints: string;
	order: number;
	starterCode: string;
	handlerFunction: ((fn: any) => boolean) | string;
	starterFunctionName: string;
};
// DB problem data

export type DBProblem = {
	id: string;
	title: string;
	category: string;
	difficulty: string;
	linkes: number;
	dislikes: number;
	order: number;
	videoId?: string;
	link?: string;
};
