const CVViewer = () => {
  return (
    <section className="cv-viewer">
      <h2>Mon CV</h2>
      <embed
        src="/assets/cv.pdf"
        type="application/pdf"
        width="100%"
        height="500px"
      />
      <a href="/assets/cv.pdf" download className="download-button">
        Télécharger mon CV
      </a>
    </section>
  );
};

export default CVViewer;
