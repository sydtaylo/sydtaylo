import React from 'react';
import { Link} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Title from '../Title/Title'

import './MainNavigation.css';

const MainNavigation = () => {
	return(
      <div class = "full-screen">
        <div class = "centered">
            <Row>
            <Link to="/about-me">About Me</Link>
            {' '}
            <Link to="/art">Art</Link>
            {' '}
            <Link to="/coding">Coding</Link>
            {' '}
            </Row>

            <Row>
            <Link to="/diy">DIY</Link>
            {' '}
            <Title></Title>
            <Link to="/electronics">Electronics</Link>
            {' '}
            </Row>

            <Row>
            <Link to="/graphic-novel">Graphic Novel</Link>
            {' '}
            <Link to="/recipes">Recipes</Link>
            {' '}
            <Link to="/resume">Resume</Link>
            {' '}
            </Row>
        </div>
      </div>
	)
}

export default MainNavigation