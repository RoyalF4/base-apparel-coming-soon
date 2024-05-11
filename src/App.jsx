import Header from './Header';
import Hero from './Hero';
import Form from './Form';

export default function App() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="content">
          <h1 className="title">
            <span className="title-accent">We&apos;re</span> Coming Soon
          </h1>
          <p className="subtext">
            Hello fellow shoppers! We&apos;re currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <Form />
        </div>
      </main>
      <Hero />
    </>
  );
}
