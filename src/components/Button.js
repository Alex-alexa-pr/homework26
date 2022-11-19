import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
padding: 12px;
margin: 8px;
width: 68px;
height: 48px;
background: #605DEC;
border-radius: 4px;
font-size: 10px;
color: #FAFAFA;
text-align: center;
  :hover {
    background: #1513A0;
  }
  :disabled {
    background: rgba(203, 212, 230, 0.3);
    border: 1px solid #7C8DB0;
    color: #7C8DB0;
  }
`;

const SecondaryButton = styled(StyledButton)`
    color: #605DEC;;
    background: white;
    border: 1px solid #605DEC;
    :hover {
      background: #E9E8FC;
    }
`;

const MediumButton = styled(StyledButton)`
  width: 76px;
`;

const LargeButton = styled(StyledButton)`
  width: 81px;
`;

const Button = ({ children, onClick, color, size, disabled }) => {
  const buttonProps = {
    disabled,
    onClick,
    children
  };

  if (color === "secondary") {
    return <SecondaryButton {...buttonProps}>{children}</SecondaryButton>;
  }

  if (size === "large") {
    return <LargeButton {...buttonProps}>{children}</LargeButton>;
  }

  else if (size === "medium") {
    return <MediumButton {...buttonProps}>{children}</MediumButton>;
  }
  return (
    <StyledButton {...buttonProps}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["primary", "secondary"]),
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired
};

Button.defaultProps = {
  color: "primary",
  disabled: false
};

export default Button;