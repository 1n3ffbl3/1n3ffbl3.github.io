import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
	return (
		<html {...props.htmlAttributes}>
			<head>
				<meta charSet="utf-8" />
				<meta httpEquiv="x-ua-compatible" content="ie=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<script
					src="https://code.jquery.com/jquery-3.3.1.min.js"
					integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
					crossOrigin="anonymous"
				/>
				{props.headComponents}
			</head>
			<body {...props.bodyAttributes}>
				{props.preBodyComponents}
				<noscript key="noscript" id="gatsby-noscript">
					This app works best with JavaScript enabled.
        </noscript>
				<div
					key={`body`}
					id="___gatsby"
					dangerouslySetInnerHTML={{ __html: props.body }}
				/>
				{props.postBodyComponents}
			</body>
			<script dangerouslySetInnerHTML={{
				__html: `
				$(document).ready(function () {
					function addScrollEvents() {
						$("#navAboutMe").click(function () {
							$('html, body').animate({
								scrollTop: $("#aboutMe").offset().top
							}, 1000);
						});
						$("#btnDiscover").click(function () {
							$('html, body').animate({
								scrollTop: $("#aboutMe").offset().top
							}, 1000);
						});
						$("#navContact").click(function () {
							$('html, body').animate({
								scrollTop: $("#contact").offset().top
							}, 1000);
						});
						$("#navProjects").click(function () {
							$('html, body').animate({
								scrollTop: $("#projects").offset().top
							}, 1000);
						});
					}
					setTimeout(addScrollEvents, 1500);	
				});`
			}}>
			</script>
		</html>
	)
}

HTML.propTypes = {
	htmlAttributes: PropTypes.object,
	headComponents: PropTypes.array,
	bodyAttributes: PropTypes.object,
	preBodyComponents: PropTypes.array,
	body: PropTypes.string,
	postBodyComponents: PropTypes.array,
}
