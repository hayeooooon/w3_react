import "./App.css";
import React from "react";
import { Link, useParams } from "react-router-dom";
import StarDefault from "./img/star.png";
import StarActive from "./img/star_active.png";
import styled from "styled-components";

const Detail = (props) => {
	const [score, setScore] = React.useState(-1);
	const param = useParams().day;
	const idx = Object.keys(props.days_en).filter(
		(v, i) => props.days_en[i] === param
	);

	const keyupEvent = (e) => { // keyup 이벤트 추가 (숫자로 평점 입력)
		if (0 < e.key && e.key <= 5) {
			setScore(e.key - 1);
		}else{
			alert('평점 입력은 1에서 5사이의 숫자키만 이용해서 입력 가능합니다.');
		}
	};

	React.useEffect(() => { // keyup 이벤트 연결
		document.addEventListener("keyup", keyupEvent);
		return () => {
			document.removeEventListener("keyup", keyupEvent);
		};
	});

	return (
		<div className="page_detail">
			{score <= -1 ? (
				<Title>
					<span>{props.days[idx]}요일</span> 평점 남기기
				</Title>
			) : (
				<Title>
					<span>{props.days[idx]}요일</span>은 {score + 1}점{" "}
					{score === 0
						? "😱"
						: score === 1
						? "🤔"
						: score === 2
						? "🙂"
						: score === 3
						? "😆"
						: "😍"}
				</Title>
			)}
			<ScoreArea>
				{Array.from({ length: 5 }, (v, i) => {
					return (
						<button
							key={i}
							onClick={() => {
								setScore(i);
							}}
						>
							<img src={i <= score ? StarActive : StarDefault} />
						</button>
					);
				})}
			</ScoreArea>
			<LinkArea>
				<Link to="/">평점 남기기</Link>
			</LinkArea>
		</div>
	);
};

const Title = styled.h1`
	font-size: 26px;
	color: #555;
	line-height: 1.3;
	span {
		position: relative;
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
`;
const ScoreArea = styled.div`
	margin: 40px 0;
	button {
		background: none;
		border: none;
		color: #555;
		cursor: pointer;
		& + button {
			margin-left: 10px;
		}
	}
`;
const LinkArea = styled.div`
	a {
		display: inline-block;
		padding: 0 30px;
		line-height: 44px;
		background: #999;
		color: #fff;
		text-decoration: none;
		font-weight: 700;
		font-size: 16px;
		border-radius: 3px;
	}
`;
export default Detail;
