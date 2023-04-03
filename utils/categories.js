export const categories = {
  Expense: [
    "Food",
    "Transportation",
    "Rent",
    "Groceries",
    "Entertainment",
    "Travel",

    "Shopping",
    "Other",
  ],
  Income: [
    "Salary",
    "Bonus",
    "Freelance",
    "Rental Income",
    "Dividends",
    "Capital Gains",
    "Interest Income",
    "Other",
  ],
  Investment: [
    "Stocks",
    "Mutual Funds",
    "Real Estate",
    "Cryptocurrency",
    "Bonds",
    "Retirement Accounts",
    "Other",
  ],
  EMI: [
    "Home Loan",
    "Car Loan",
    "Personal Loan",
    "Student Loan",
    "Credit Card Payment",
    "Other",
  ],
};
export const allCategories = [];
for (const [type, cat] of Object.entries(categories)) {
  for (const category of cat) {
    const budgetObj = {
      type: type,
      category: category,
    };
    allCategories.push(budgetObj);
  }
}
