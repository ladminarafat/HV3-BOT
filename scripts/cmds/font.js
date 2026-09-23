module.exports = {
	config: {
		name: "font",
		aliases: ["style"],
		version: "1.0",
		author: "MahMUD",
		countDown: 5,
		role: 0,
		description: {
			en: "Return normal text"
		},
		category: "general",
		guide: {
			en: "{pn} <text>"
		}
	},

	onStart: async function ({ message, args }) {
		if (!args.length)
			return message.reply("Please enter some text.");

		const text = args.join(" ");
		return message.reply(text);
	}
};
