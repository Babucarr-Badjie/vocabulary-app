export default function ProgressBar() {
  const text = "Hello, world! ";

  const progressBarArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="level">
      <div>
        <h4>{text}</h4>
      </div>
      {progressBarArray.map((item, itemIndex) => {
        return (
          <div className="level-bar" key={itemIndex}>
            {item}
          </div>
        );
      })}

      <div className="xp-bar" style={{ width: `${40}%` }}></div>
    </div>
  );
}
