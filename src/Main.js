import "./App.css";
import StarDefault from "./img/star.png";
import StarActive from "./img/star_active.png";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Main = (props) => {
	const star_length = Array.from({ length: 5 }, (v, i) => i);

	// 랜덤 별 생성
	const random_stars = [];
	for (let i = 0; i < 7; i++) {
		// 1-5사이 숫자 랜덤으로 7개 생성해서 배열에 담기
		random_stars.push(Math.floor(Math.random() * 5) + 1);
	}

	// 평균 구하기
	const getAverage = (
		random_stars.reduce((cur, acc) => (cur += acc)) / 7
	).toFixed(2);
	const [average, updateAverage] = React.useState(getAverage);
	const average_score = React.useRef();

	return (
		<div className="page_main">
			<Title>나의 일주일 평점</Title>
			<DaysGroup>
				{props.date.map((v, i) => {
					return (
						<li key={i} className="day_item">
							<span className="day">
								{props.days[v]}{" "}
								<em style={{ fontSize: "0" }}>{random_stars[i]}</em>
							</span>
							<ScoreArea>
								<ul className="score">
									{star_length.map((star, idx) => {
										return (
											<li key={idx}>
												<img
													src={
														idx + 1 <= random_stars[i]
															? StarActive
															: StarDefault
													}
												/>
											</li>
										);
									})}
								</ul>
								<Link to={"/detail/" + props.days_en[v]}>평점 남기기</Link>
							</ScoreArea>
						</li>
					);
				})}
			</DaysGroup>
			<Average>
				<p>
					평균 <span ref={average_score}>{average}</span>
				</p>
				<button
					onClick={() => {
						updateAverage(0);
					}}
				>
					리셋
				</button>
			</Average>
		</div>
	);
};

const DaysGroup = styled.ul`
	border-top: 1px solid #eee;
	& > li {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px;
		border-bottom: 1px solid #eee;
		.day {
			font-size: 20px;
			color: #555;
		}
	}
`;
const Title = styled.h1`
	font-size: 26px;
	color: #555;
	margin-bottom: 40px;
`;
const ScoreArea = styled.div`
	.score {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
		vertical-align: middle;
		li {
			& + li {
				margin-left: 6px;
			}
		}
	}
	a {
		display: inline-block;
		text-decoration: none;
		font-size: 14px;
		padding: 5px 10px;
		background-color: #999;
		color: #fff;
		border-radius: 3px;
		margin-left: 30px;
		font-weight: 700;
		vertical-align: middle;
	}
`;
const Average = styled.div`
	display: flex;
	font-size: 20px;
	color: #555;
	font-weight: bold;
	padding-top: 40px;
	align-items: center;
	justify-content: center;
	span {
		position: relative;
		display: inline-block;
		font-size: 28px;
		vertical-align: middle;
		margin-top: -4px;
		margin-left: 6px;
		&:before {
			content: "";
			position: absolute;
			left: -3px;
			right: -3px;
			height: 8px;
			bottom: 2px;
			background: #ffca00;
			z-index: -1;
		}
	}
	button {
		border: 1px solid #555;
		color: #555;
		padding: 5px 15px;
		font-size: 14px;
		border-radius: 3px;
		background: transparent;
		font-weight: 700;
		margin-left: 15px;
		cursor: pointer;
	}
`;
export default Main;
