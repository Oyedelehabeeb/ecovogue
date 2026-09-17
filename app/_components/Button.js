function Button({ children, onClick, className = "", type = "button" }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`button button-dark ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
