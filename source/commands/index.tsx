import { Select, type Option } from "@inkjs/ui";
import chalk from "chalk";
import { Box, Text, useApp } from "ink";
import open from "open";
import terminalLink from "terminal-link";

const Index = () => {
	const { exit } = useApp();
	const options: Option[] = [
		{ label: "Website", value: "https://iamnapo.me" },
		{ label: "GitHub", value: "https://iamnapo.me/gh" },
		{ label: "LinkedIn", value: "https://iamnapo.me/li" },
		{ label: "Contact", value: "mailto:hi@iamnapo.me" },
		{ label: "Twitter", value: "https://iamnapo.me/tw" },
		{ label: "Quit", value: "quit" },
	];

	return (
		<Box flexDirection="column">
			<Text bold color="#008B8B">
				{"Hello! I’m Napoleon-Christos Oikonomou. 😎"}
			</Text>
			<Box marginBottom={1}>
				<Text>
					{`I’m an Electrical & Computer Engineer and Software Developer, currently working\nas a Lead Software Engineer at ${terminalLink(chalk.hex("#112e41")("TechNative"), "https://technative.gr/")}.`}
				</Text>
			</Box>
			<Select
				options={options}
				visibleOptionCount={options.length}
				onChange={(value) => {
					if (value === "quit") {
						void exit();
					} else {
						void open(value);
					}
				}}
			/>
		</Box>
	);
};

export default Index;
