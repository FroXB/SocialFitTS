import React, { useState } from 'react';

import styled from 'styled-components';


export const SearchContainer = styled.input`
    background: var(--gray-800);
    width: 100%;
    border: none;
    outline: none;
    padding: 1rem;
    border-radius: 1rem;
    color: white;

    &:focus {
        outline: transparent;
        box-shadow: 0 0 0 2px var(--orange-500);
        border-radius: 1rem;
    }
`;

export const SearchBoxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const SearchBoxContainer = styled.div`
  background: var(--gray-800);
  padding: 10rem;
  border-radius: 1rem;
  width: 25rem;
  position: relative;
`;