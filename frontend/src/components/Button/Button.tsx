import './Button.css'

type ButtonVariant = 'default' | 'primary'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

function Button({ variant = 'default', className = '', ...props }: ButtonProps) {
  return <button className={`btn btn--${variant} ${className}`.trim()} {...props} />
}

export default Button
