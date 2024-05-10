export default function App() {
  return (
    <main className="main">
      <img src="/images/logo.svg" alt="Base Apparel Logo" className="logo" />
      <picture>
        <source
          srcSet="/images/hero-desktop.jpg"
          media="(min-width: 700px"
          className="hero-desktop"
        />
        <img
          src="/images/hero-mobile.jpg"
          alt="hero image"
          className="hero-mobile"
        />
      </picture>
      <h1 className="title">We&apos;re Coming Soon</h1>
      <p className="subtext">
        Hello fellow shoppers! We&apos;re currently building our new fashion
        store. Add your email below to stay up-to-date with announcements and
        our launch deals.
      </p>
      <form action="" noValidate>
        <input
          type="email"
          name="email"
          id="email"
          aria-label="Email Address"
        />
        <button aria-label="submit">
          <img src="/images/icon-arrow.svg" alt="" />
        </button>
      </form>
    </main>
  );
}
