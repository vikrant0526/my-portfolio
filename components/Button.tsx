import { ButtonHTMLAttributes, DetailedHTMLProps, FC, useMemo } from "react";

const Button: FC<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = (
  props
) => {
  const className = useMemo(() => {
    const buttonClasses = "button group";
    if (props.className === undefined) return buttonClasses;
    return `${buttonClasses} ${props.className}`;
  }, [props.className]);
  return (
    <button {...props} className={className}>
      {props.children}
    </button>
  );
};
export default Button;
