// context/DishContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Dish {
  name: string;
  description: string;
  price: string;
}

interface DishContextType {
  dishes: Record<string, Dish[]>;
  addDish: (course: string, dish: Dish) => void;
}

const DishContext = createContext<DishContextType | undefined>(undefined);

export const DishProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [dishes, setDishes] = useState<Record<string, Dish[]>>({});

  const addDish = (course: string, dish: Dish) => {
    setDishes((prevDishes) => ({
      ...prevDishes,
      [course]: [...(prevDishes[course] || []), dish],
    }));
  };

  return (
    <DishContext.Provider value={{ dishes, addDish }}>
      {children}
    </DishContext.Provider>
  );
};

export const useDishes = (): DishContextType => {
  const context = useContext(DishContext);
  if (!context) {
    throw new Error('useDishes must be used within a DishProvider');
  }
  return context;
};
