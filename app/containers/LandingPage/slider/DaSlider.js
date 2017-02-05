/**
*
* DaSlider
*
*/

import React from 'react';
import styled from 'styled-components';

const DaSlider = styled.div`
	width: 100%;
	height: 400px;
	position: relative;
	margin: 0 auto;
	overflow: hidden;
	background: transparent url(../img/slider.jpg) repeat 0% 0%;
	border-bottom: 5px solid #f6f6f6 !important;
	-webkit-box-shadow: inset 0px 0px 5px rgba(0,0,0,.25);
	-moz-box-shadow: inset 0px 0px 5px rgba(0,0,0,.25);
	box-shadow: inset 0px 0px 5px rgba(0,0,0,.25);
	-webkit-transition: background-position 1.4s ease-in-out 0.3s;
	-moz-transition: background-position 1.4s ease-in-out 0.3s;
	-o-transition: background-position 1.4s ease-in-out 0.3s;
	-ms-transition: background-position 1.4s ease-in-out 0.3s;
	transition: background-position 1.4s ease-in-out 0.3s;  
`;

export default DaSlider;
