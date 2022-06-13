const HeaderBanner = ({ name, masters, description }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>Code Nation Masters {masters}</h2>
      <h3>{description}</h3>
    </div>
  );
};

export default HeaderBanner;
