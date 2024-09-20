import { useState } from 'react';
import './Calendar.css'; // Make sure to create and style this CSS file

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [tasks, setTasks] = useState({});

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const renderDays = () => {
    const days = [];
    const date = new Date(currentDate);
    const month = date.getMonth();
    const year = date.getFullYear();
    const daysInCurrentMonth = daysInMonth(month, year);
    const firstDay = firstDayOfMonth(month, year);

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    for (let day = 1; day <= daysInCurrentMonth; day++) {
      const taskKey = `${year}-${month + 1}-${day}`;
      days.push(
        <div key={day} className="calendar-day" onClick={() => handleTask(taskKey)}>
          {day}
          {tasks[taskKey] && (
            <div className="task">
              <div>{tasks[taskKey].description}</div>
              <div>{tasks[taskKey].time}</div>
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  const changeMonth = (offset) => {
    const date = new Date(currentDate);
    date.setMonth(date.getMonth() + offset);
    setCurrentDate(date);
  };

  const handleTask = (date) => {
    if (tasks[date]) {
      const confirmDelete = window.confirm('Do you want to delete this task?');
      if (confirmDelete) {
        setTasks((prevTasks) => {
          const newTasks = { ...prevTasks };
          delete newTasks[date];
          return newTasks;
        });
      }
    } else {
      const description = prompt('Enter task description:');
      if (description) {
        const time = prompt('Enter task time (e.g., 14:00):');
        if (time) {
          setTasks((prevTasks) => ({
            ...prevTasks,
            [date]: { description, time },
          }));
        }
      }
    }
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={() => changeMonth(-1)}>Previous</button>
        <h2>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
        <button onClick={() => changeMonth(1)}>Next</button>
      </div>
      <div className="calendar-grid">
        <div className="calendar-day-name">Sun</div>
        <div className="calendar-day-name">Mon</div>
        <div className="calendar-day-name">Tue</div>
        <div className="calendar-day-name">Wed</div>
        <div className="calendar-day-name">Thu</div>
        <div className="calendar-day-name">Fri</div>
        <div className="calendar-day-name">Sat</div>
        {renderDays()}
      </div>
    </div>
  );
};

export default Calendar;