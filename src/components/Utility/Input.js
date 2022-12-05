const Input = ({ label, type, value, onChange, className, id, name }) => {
  return (
    <label htmlFor={id}>
      {label}
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={className}
        id={id}
        name={name}
      />
    </label>
  );
};

export default Input;
