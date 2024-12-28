export function Character({
  actual,
  expected,
}: {
  actual: string;
  expected: string;
}) {
  const isCorrect = actual === expected;
  const isWhiteSpace = expected === " ";

  let className = "";

  if (!isCorrect && !isWhiteSpace) {
    className = "text-red-500";
  } else if (isCorrect && !isWhiteSpace) {
    className = "text-primary-400";
  } else if (!isCorrect && isWhiteSpace) {
    className = "bg-red-500-50";
  }

  return <span className={className}>{expected}</span>;
}
