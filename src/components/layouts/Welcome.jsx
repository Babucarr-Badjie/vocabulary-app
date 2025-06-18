export default function Welcome({ onStart }) {
  return (
    <section id="welcome">
      <p className="text-large special-shadow">
        ☑️ Discover new words daily <br />
        ☑️Track your learning progress <br />
        ☑️ Retain vocabulary effectively <br />
        ☑️Save and review your favorite words
      </p>
      <h6>Your vocabulary adventure begins here!</h6>
      <div>
        <input type="text" placeholder="Enter your name ..." />
        <button onClick={onStart}>
          {" "}
          <h6>Start &rarr;</h6>
        </button>
      </div>
    </section>
  );
}
