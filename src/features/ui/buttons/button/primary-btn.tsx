import classes from './primary-btn.module.css';

type ButtonProps = {
  text: string;
  className: string;
  id?: string;
  type?: 'button' | 'submit';
  form?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const PrimaryButton = ({
  text,
  className,
  id,
  form,
  disabled,
  type = 'button',
  onClick,
}: ButtonProps) => (
  <button
    disabled={disabled}
    form={form}
    onClick={onClick}
    className={`${className} ${classes.btn}`}
    type={type}
    id={id}
  >
    {text}
  </button>
);
