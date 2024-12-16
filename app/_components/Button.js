function Button({ children }) {
  return (
    <div>
      <button className="bg-white px-3 py-2 mt-2 rounded-md font-semibold capitalize hover:scale-110 transition-all">
        {children}
      </button>
    </div>
  );
}

export default Button;
