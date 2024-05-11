import { useState, useRef } from 'react';
import { validation } from './utils';

export default function Form() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const input = useRef(null);

  function handleChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError(validation(input));
  }

  return (
    <>
      <form action="" noValidate className="form" onSubmit={handleSubmit}>
        <input
          value={email}
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          aria-label="Email Address"
          className="form__input"
          onChange={handleChange}
          ref={input}
          required
        />
        <img
          src="/images/icon-error.svg"
          alt=""
          className={`icon-error ${error ? 'visible' : ''}`}
        />
        <button aria-label="submit" className="form__btn-submit">
          <img
            src="/images/icon-arrow.svg"
            alt=""
            className="form__btn-submit__img"
          />
        </button>
      </form>
      <span className={`error ${error ? 'visible' : ''}`}>{error}</span>
    </>
  );
}
