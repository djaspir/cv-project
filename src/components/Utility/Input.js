const Input = ({ label, type, value, onChange, className, id }) => {
  return (
    <label htmlFor={id}>
      {label}
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={className}
        id={id}
      />
    </label>
  );
};

export default Input;
