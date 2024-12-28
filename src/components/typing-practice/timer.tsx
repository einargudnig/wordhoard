export function Timer({ timeLeft }: { timeLeft: number }) {
  return (
    <div className="timer">
      <p>Time:</p>
      {timeLeft}
    </div>
  );
}
