export default function App() {
  return (
    <main className="main">
      <div className="logo">
        <img
          src="/images/logo.svg"
          alt="Base Apparel Logo"
          className="logo__img"
        />
      </div>
      <picture>
        <source
          srcSet="/images/hero-desktop.jpg"
          media="(min-width: 700px)"
          className="hero-desktop"
        />
        <img
          src="/images/hero-mobile.jpg"
          alt="hero image"
          className="hero-mobile"
        />
      </picture>
      <div className="content">
        <h1 className="title">
          <span className="title-accent">We&apos;re</span> Coming Soon
        </h1>
        <p className="subtext">
          Hello fellow shoppers! We&apos;re currently building our new fashion
          store. Add your email below to stay up-to-date with announcements and
          our launch deals.
        </p>
        <form action="" noValidate className="form">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            aria-label="Email Address"
            className="form__input"
          />
          <button aria-label="submit" className="form__btn-submit">
            <img
              src="/images/icon-arrow.svg"
              alt=""
              className="form__btn-submit__img"
            />
          </button>
        </form>
      </div>
    </main>
  );
}
