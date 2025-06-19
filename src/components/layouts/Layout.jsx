export default function Layout(props) {
  const { children } = props;

  const header = (
    <header className="header">
      <h1 className="text-gradient">WordJourney</h1>
      <p>
        <i>
          Embark on your journey to master new words every day. WordJourney
          helps you learn, track, and retain vocabulary through engaging and
          personalized learning tools.
        </i>
      </p>
    </header>
  );

  const footer = (
    <footer>
      <p>Design & written by </p>
      <a href="https://babucarr-badjie-portfolio.netlify.app/" target="_blank">
        <img
          src="https://avatars.githubusercontent.com/u/93027934?v=4"
          alt=""
        />
        <p>Babucarr Badjie</p>
        <i class="fa-regular fa-address-card"></i>
      </a>
    </footer>
  );
  return (
    <>
      {header}
      <main>{children}</main>
      {footer}
    </>
  );
}
