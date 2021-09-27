import React from "react";
import styled from "styled-components";

import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';

const StyledCard = styled.div`
	text-align: center;
	position: relative;
	overflow: hidden;
	border-radius: 5px;
	margin: 0 10px 40px 10px;
	box-shadow: 0 10px 29px 0 rgba(68, 88, 144, 0.1);
	transition: all 0.3s ease-in-out;
	&:hover {
	    -webkit-transform: translateY(-5px);
		transform: translateY(-5px);
		
		& a {
			color: #007bff;
			text-decoration: none;
		}
		
		& h3 {
			padding-bottom: 20px;
		}
	}
	
	& a {
		color: #111;
		text-decoration: none;
	}
	
	& h3 {
		padding-bottom: 20px;
	}
	
`;

const Card = ({icon, link, title}) => (
	<Col>
		<StyledCard>
			{icon}
			<div>
				<h3><a href={link}>{title}</a></h3>
			</div>
		</StyledCard>
	</Col>
);

export default Card;