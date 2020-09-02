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
			message: "Hello, I'm Liz! What's your name?",
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
			message: "Glad you found my site. Doesn't it look nice?",
			trigger: "User response looks nice",
		},
		{
			id: "User response looks nice",
			user: true,
			trigger: "done",
		},
		{
			id: "done",
			message:
				"Thanks! Well enjoy the site and be on the look out for my next build.... ",
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
