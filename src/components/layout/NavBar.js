import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className = "navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <StyledLink
                        to = "/"
                        className = "navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"
                    >Pokedex
                    </StyledLink>
                </nav>
            </div>
        )
    }
}