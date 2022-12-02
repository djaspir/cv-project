const Section = ({ name, children }) => {
  return (
    <section className="section">
      <h3>{name}</h3>
      {children}
    </section>
  );
};

export default Section;
