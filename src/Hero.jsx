export default function Hero() {
  return (
    <aside className="hero">
      <picture>
        <source
          srcSet="/images/hero-desktop.jpg"
          media="(min-width: 700px)"
          className="hero-desktop"
        />
        <img
          src="/images/hero-mobile.jpg"
          alt="hero image"
          className="hero__img"
        />
      </picture>
    </aside>
  );
}
