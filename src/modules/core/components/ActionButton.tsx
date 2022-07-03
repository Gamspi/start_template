import React from 'react';
import styled from "styled-components";
import {$black} from "../styles/variables";

type Props = {
    size: number;
}

const ActionButton = ({size}: Props) => {

    const Button = styled.button`
      height: ${size}px;
      width: ${size}px;
      border: 1px solid ${$black};
      border-radius: 50%;
    `
    return (
        <Button/>
    );
};
export default ActionButton;
