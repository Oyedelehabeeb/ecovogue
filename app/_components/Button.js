function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-customGreen text-white px-3 py-2 mt-2 rounded-md font-semibold capitalize hover:scale-110 transition-all"
    >
      {children}
    </button>
  );
}

export default Button;
