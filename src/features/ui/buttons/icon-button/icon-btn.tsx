import classes from './icon-btn.module.css';

export type IconButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  className?: string;
};

export const IconButton = ({ className, onClick }: IconButtonProps) => {
  return (
    <button
      className={`${className} ${classes.btn}`}
      onClick={onClick}
      type="button"
      aria-label="icon button"
    />
  );
};
