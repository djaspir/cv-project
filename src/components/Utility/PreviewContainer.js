const PreviewContainer = ({ title, children, className }) => {
  return (
    <>
      <div className="preview-container">
        <h3>{title}</h3>
        <div className={className}>{children}</div>
      </div>
      <div className="horizontal-line" />
    </>
  );
};

export default PreviewContainer;
