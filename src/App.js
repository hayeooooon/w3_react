import "./App.css";
import Detail from "./Detail";
import Main from "./Main";
import React from "react";
import styled from "styled-components";
import { Route, Link, Switch } from "react-router-dom";

function App() {
	// 요일 배열 만들기
	const days = ["일", "월", "화", "수", "목", "금", "토"];
	const days_en = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
	const date = new Date().getDay(); // 오늘 요일
	let today = date;
	const dateFromToday = days.map((v, i) => {
		// 오늘 요일 기준으로 배열 새로 생성
		let result = today;
		if (today >= days.length) {
			// 일요일까지 갔을 경우 월요일로 다시 돌아가도록 설정
			today = 0;
			result = 0;
		}
		today += 1;
		return result;
	});

	console.log(dateFromToday)

	return (
		<div className="App">
			<Container>
				<div className="content">
					<Switch>
						<Route exact path="/">
							<Main days={days} days_en={days_en} date={dateFromToday} />
						</Route>
						<Route path="/detail/:day">
							<Detail days={days} days_en={days_en}></Detail>
						</Route>
					</Switch>
				</div>
			</Container>
		</div>
	);
}

const Container = styled.div`
	max-width: 400px;
	margin: 60px auto;
	box-shadow: 0 0 15px rgba(12, 12, 12, 0.1);
	border-radius: 10px;
	padding: 60px 40px;
	border: 1px solid #eee;
`;

export default App;
