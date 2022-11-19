import PropTypes from "prop-types";
import styled from "styled-components";

import { ReactComponent as CloseIcon } from "../icons/closeIcon.svg";

const backgroundColor = (color) => {
  if (color === "warning") {
    return "#FFD12F";
  }

  else if (color === "error") {
    return "#EB5757";
  }

  else {
    return "#605DEC";
  }
};

const textColor = (color) => {
  if (color === "warning") {
    return "#1513A0";
  }

  else if (color === "error") {
    return "#FAFAFA";
  }

  else {
    return "#F6F6FE";
  }
};

const StyledAlert = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 32px;
  width: 1440px;
  height: 64px;
  left: 120px;
  top: 1482px;
  background: ${props => backgroundColor(props.color)};
`;

const TextAlert = styled.p`
  width: 100%;
  text-align: center;
  font-size: 18px;
  color: ${props => textColor(props.color)};
`;

const Button = styled.button`
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: none;
`;

const Alert = ({ color, onClose, children }) => {
  return (
    <StyledAlert color={color}>
      <TextAlert color={color}>{children}</TextAlert>
      <Button onClick={onClose}>
        <CloseIcon />
      </Button>
    </StyledAlert>
  );
};

Alert.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["primary", "error", "warning"]).isRequired,
  children: PropTypes.node.isRequired
};

export default Alert;