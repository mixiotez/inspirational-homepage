import React, { useState } from 'react';
import Goal from './Goal';
import { GoalsContainer } from './GoalsContainers';

type Goal = {
  id: number;
  description: string;
};

const defaultGoals: Goal[] = [
  { id: 1, description: 'Drink two liters of water' },
  { id: 2, description: 'Spend 15 mins meditating' },
  { id: 3, description: 'Exercise for 30 mins' },
  { id: 4, description: 'Take the dogs out for a walk' },
  { id: 5, description: 'A' },
];

const Goals: React.FC = () => {
  const [goals, setGoals] = useState<Goal[]>(defaultGoals);

  return (
    <GoalsContainer>
      {goals.map(({ id, description }) => (
        <Goal id={id} key={id}>
          {description}
        </Goal>
      ))}
    </GoalsContainer>
  );
};

export default Goals;
