import React, { useEffect, useState } from 'react';
import Goal from './Goal';
import {
  GoalFormContainer,
  GoalsCard,
  GoalsContainer,
} from './GoalsContainers';
import { getFromLocalStorage, saveToLocalStorage } from '../../utils';

type Goal = {
  id: number;
  description: string;
};

const defaultGoals: Goal[] = [
  { id: 1, description: 'Drink two liters of water' },
  { id: 2, description: 'Spend 15 mins meditating' },
  { id: 3, description: 'Exercise for 30 mins' },
  { id: 4, description: 'Take the dogs out for a walk' },
];

const Goals: React.FC = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [newGoal, setNewGoal] = useState('');

  useEffect(() => {
    const storedGoals = getFromLocalStorage('goals');

    if (storedGoals) {
      const jsonValue = JSON.parse(storedGoals) as unknown as Goal[];

      if (jsonValue.length > 0) {
        setGoals(jsonValue);
        return;
      }
    }

    saveToLocalStorage('goals', JSON.stringify(defaultGoals));
    setGoals(defaultGoals);
  }, []);

  const addNewGoal = () => {
    const nextId = (goals[goals.length - 1]?.id || 0) + 1;
    const updatedGoals = [...goals, { id: nextId, description: newGoal }];

    setGoals(updatedGoals);
    saveToLocalStorage('goals', JSON.stringify(updatedGoals));
    setNewGoal('');
  };

  const deleteGoal = (id: number) => {
    setGoals((goals) => {
      const updatedGoals = goals.filter((goal) => goal.id !== id);

      saveToLocalStorage('goals', JSON.stringify(updatedGoals));
      return updatedGoals;
    });
  };

  return (
    <GoalsCard>
      <h1>Today&apos;s Goals</h1>
      <GoalFormContainer>
        <input
          type="text"
          aria-label="New goal entry"
          value={newGoal}
          placeholder="What would you like to achieve today?"
          onChange={(e) => setNewGoal(e.target.value)}
        />
        <button disabled={!newGoal.length} onClick={addNewGoal}>
          Create New Goal
        </button>
      </GoalFormContainer>
      <GoalsContainer>
        {goals.map(({ id, description }) => (
          <Goal onChange={deleteGoal} id={id} key={id}>
            {description}
          </Goal>
        ))}
      </GoalsContainer>
    </GoalsCard>
  );
};

export default Goals;
