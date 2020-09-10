import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

function CustomChatbot(props) {
	// Make the chatbot resizeable or collapsible
	const config = {
		width: "300px",
		height: "400px",
		floating: true,
	};

	const steps = [
		{
			// Identifies the current step
			id: "Greet",
			// Displays the message in window, once the step is called
			message: "Hello, my name is Sam what is your name?",
			// The id of the next step
			trigger: "Waiting user input for name",
		},
		{
			id: "Waiting user input for name",
			user: true,
			trigger: "Nice to Meet You",
		},
		{
			id: "Nice to Meet You",
			message: "Hi {previousValue}, it's great to meet you.",
			trigger: "Look Around",
		},
		{
			id: "Look Around",
			message: "Glad you found our site. Are you looking for a place to stay?",
			trigger: "Place to stay",
		},
		{
			id: "Place to stay",
			user: true,
			trigger: "done",
		},
		{
			id: "done",
			message:
				"Great! Well you're in the right place...go ahead and select your dates to search available listings, and let me know if you have any questions.",
			end: true,
		},
	];

	const theme = {
		background: "white",
		fontFamily: "Arial, Helvetica, sans-serif",
		headerBgColor: "#ff7779",
		headerFontColor: "white",
		headerFontSize: "25px",
		botBubbleColor: "grey",
		botFontColor: "white",
		botFontSize: "20px",
		userBubblecolor: "white",
		userFontColor: "black",
		userFontSize: "25px",
	};

	return (
		<ThemeProvider theme={theme}>
			<ChatBot steps={steps} {...config} />
		</ThemeProvider>
	);
}

export default CustomChatbot;
