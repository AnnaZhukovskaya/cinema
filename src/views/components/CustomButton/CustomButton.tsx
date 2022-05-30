import { ICustomButton } from './CustomButtonProps';
import './CustomButton.scss';

export const CustomButton = ({
  disabled = false,
  type = 'button',
  clickHandler,
  mode = 'primary',
  text = '',
}: ICustomButton) => {
  return (
    <button
      className={`btn btn--${mode}`}
      disabled={disabled}
      type={type}
      onClick={e => clickHandler?.(e)}
    >
      {text}
    </button>
  );
};
