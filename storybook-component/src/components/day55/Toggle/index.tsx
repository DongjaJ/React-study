import styled from '@emotion/styled';
import useToggle from '../../../hooks/day55/useToggle';

const ToggleContainer = styled.label`
  display: inline-block;
  cursor: pointer;
  user-select: none;
`;

const ToggleSwitch = styled.div`
  width: 64px;
  height: 30px;
  padding: 2px;
  border-radius: 15px;
  background-color: #ccc;
  box-sizing: border-box;
  transition: background-color 0.2s ease-out;

  &:after {
    content: '';
    position: relative;
    left: 0;
    display: block;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: white;
    transition: left 0.2s ease-out;
  }
`;

const ToggledInput = styled.input`
  display: none;

  &:checked + div {
    background: lightgreen;
  }

  &:checked + div:after {
    left: calc(100%-26px);
  }

  &:disabled + div {
    opacity: 0.7;
    cursor: not-allowed;
    &:after {
      opacity: 0.7;
    }
  }
`;

type ToggleProps = {
  name?: string;
  on?: boolean;
  disabled?: boolean;
  onChange?: () => {};
};

const Toggle = ({
  name,
  on = false,
  disabled = false,
  onChange,
  ...props
}: ToggleProps) => {
  const { checked, toggle } = useToggle(on);

  const handleToggle = () => {
    toggle();
    onChange && onChange();
  };

  return (
    <ToggleContainer {...props}>
      <ToggledInput
        type="checkbox"
        style={{ display: 'none' }}
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={handleToggle}
      />
      <ToggleSwitch />
    </ToggleContainer>
  );
};

export default Toggle;
