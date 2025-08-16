# Expense Management App

A simple React application to manage and visualize your expenses by year and month. Users can add new expenses, filter them by year, and view a bar chart of expenses per month.

## Features

- Add new expenses with title, amount, and date
- Filter expenses by year or view all
- Visualize monthly expenses in a bar chart
- Responsive and clean UI

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/expense-management-app.git
   cd expense-management-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Project Structure

```
src/
  components/
    AddExpense/
      AddNewExpense.js
      ExpenseForm.js
    expense/
      ExpenseItem.js
      ExpenseDate.js
    filterExpense/
      FilterExpenses.js
      BarChart.js
      barChart.css
      filterExpense.css
    UI/
      Card.js
  App.js
  app.css
```

## Usage

- Click **Add New Expense** to add a new expense.
- Use the dropdown to filter expenses by year or show all.
- The bar chart updates to reflect the number of expenses per month for the selected year.

## Customization

- You can modify the initial expenses in `src/App.js`.
- To change the year range, update the dropdown options in `FilterExpenses.js`.

## License

This project is **private** and not open source. All rights reserved.

---

\*\*Happy
