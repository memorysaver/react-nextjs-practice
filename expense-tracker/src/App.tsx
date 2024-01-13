import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";
import { set } from "immer/dist/internal.js";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Rent",
      amount: 1000,
      category: "Utilities",
    },
    {
      id: 2,
      description: "Coffee",
      amount: 45,
      category: "Groceries",
    },
    {
      id: 3,
      description: "PS5",
      amount: 350,
      category: "Entertainment",
    },
    {
      id: 4,
      description: "Coffee",
      amount: 15,
      category: "Groceries",
    },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  if (expenses.length === 0) {
    return null;
  }

  return (
    <>
      <div>
        <div className="mb-5">
          <ExpenseForm
            onSubmit={(expense) => {
              console.log(expense);
              setExpenses([
                ...expenses,
                { ...expense, id: expenses.length + 1 },
              ]);
            }}
          />
        </div>
        <div className="mb-3">
          <ExpenseFilter
            onSelectCategory={(category) => {
              console.log(category);
              setSelectedCategory(category);
            }}
          />
        </div>
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) =>
            setExpenses(expenses.filter((expense) => expense.id !== id))
          }
        />
      </div>
    </>
  );
}

export default App;
