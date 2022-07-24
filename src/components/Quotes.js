import React, { useEffect, useState } from 'react'
import { fetchQuote } from '../service/narutoQuotesService'

export default function Quotes() {
	const [quote, setQuote] = React.useState({});

	async function getQuoteService() {
		const response = await fetchQuote()
		setQuote(response);
	}

	async function handleClick () {
		getQuoteService();
	}

	useEffect(() => {
		async function getQuote() {
			getQuoteService()
		}
		getQuote()
	}, [])

	return (
		<div className="quotes">
			<h1 className="title">Naruto Quotes Generator</h1>
			<div className="box">
				<p data-testid="quote" className="quote text-effect">{quote.quote}</p>
				<p data-testid="author" className="author text-effect">{quote.author}</p>
			</div>
			<button 
				onClick={handleClick}
				type="button">Quote!</button>
		</div>
	)
}
