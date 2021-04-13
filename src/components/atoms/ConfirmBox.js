import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

const ConfirmBox = styled(Modal)`
  background-color: ${({theme}) => theme.bodyExtra};
  position: absolute;
  width: 300px;
  height: 200px;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -150px;
  border: ${({theme}) => theme.colorBorder};
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export default ConfirmBox;
