import './Button.css'

function Button({
  children,
  href,
  onClick,
  type = 'button',
  className = '',
}) {
  if (href) {
    return (
      <a
        className={`button ${className}`}
        href={href}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={`button ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button