import { useState } from 'react';
import { GoalContainer } from './GoalsContainers';

type GoalProps = {
  id: number;
  onDelete: () => void;
  onMarkDone: () => void;
};

const Goal = ({
  id,
  children,
  onDelete,
  onMarkDone,
}: React.PropsWithChildren<GoalProps>) => {
  const [hover, setHover] = useState(false);

  return (
    <GoalContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
      {hover && (
        <div>
          <button onClick={onDelete}>Delete</button>
          <button onClick={onMarkDone}>Done</button>
        </div>
      )}
    </GoalContainer>
  );
};

export default Goal;
