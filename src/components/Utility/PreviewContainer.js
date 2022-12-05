const PreviewContainer = ({ title, children }) => {
  return (
    <>
      <h3 className="preview-title">{title}</h3>
      {children}
      <div className="horizontal-line" />
    </>
  );
};

export default PreviewContainer;
