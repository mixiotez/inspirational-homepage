import { useState, memo } from 'react';
import { GoalContainer } from './GoalsContainers';
import Confetti from 'react-dom-confetti';
import { createPortal } from 'react-dom';

type GoalProps = {
  id: number;
  onChange: (id: number) => void;
};

const Goal = ({
  id,
  children,
  onChange,
}: React.PropsWithChildren<GoalProps>) => {
  const [hover, setHover] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleOnMark = () => {
    setIsDone(true);

    setTimeout(() => {
      onChange(id);
    }, 2500);
  };

  return (
    <GoalContainer
      $isDone={isDone}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {createPortal(
        <Confetti
          active={isDone}
          config={{
            spread: 120,
            elementCount: 75,
            startVelocity: 20,
            dragFriction: 0.05,
            duration: 2500,
          }}
        />,
        document.getElementById('confetti-container') as Element
      )}
      {children}
      {hover && !isDone && (
        <div>
          <button onClick={() => onChange(id)}>Delete</button>
          <button onClick={handleOnMark}>Done</button>
        </div>
      )}
    </GoalContainer>
  );
};

const MemoGoal = memo(Goal);

export default MemoGoal;
