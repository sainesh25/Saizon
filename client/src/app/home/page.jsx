"use client";
import axios from 'axios';
import React, { useEffect } from 'react'
import Register from '../register/page';

export default function HomePage() {
	const getData = async () => {
		try {
			fetch('http://localhost:5000/test')
				.then(response => response.json())

		}
		catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			HomePage
		</div>
	)
}