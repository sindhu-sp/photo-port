

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">

        </ul>
      </nav>
    </header>
  );
}

export default Nav;
