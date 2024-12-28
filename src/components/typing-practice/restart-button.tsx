import { useRef } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";

export function Restart({
  onRestart: handleRestart,
}: {
  onRestart: () => void;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    buttonRef.current?.blur();
    console.log("Restart!");
    handleRestart();
  };

  return (
    <div className="restart-container">
      <button ref={buttonRef} onClick={handleClick} className="restart-button">
        <ReloadIcon />
      </button>
    </div>
  );
}
