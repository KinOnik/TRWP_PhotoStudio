const tasks = new Map();

let currentDate = new Date();

const monthYearEl = document.getElementById('month-year');
const calendarBody = document.getElementById('calendar-body');
const prevBtn = document.getElementById('prev-month');
const nextBtn = document.getElementById('next-month');

const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');
const modalDateEl = document.getElementById('modal-date');
const tasksList = document.getElementById('tasks-list');
const newTaskInput = document.getElementById('new-task');
const addTaskBtn = document.getElementById('add-task-btn');

let selectedDate = null;

function renderCalendar(date) {
    calendarBody.innerHTML = '';

    const year = date.getFullYear();
    const month = date.getMonth();

    monthYearEl.textContent = date.toLocaleString('ru-RU', { month: 'long', year: 'numeric' }).replace(/^\w/, c => c.toUpperCase());


    const firstDay = new Date(year, month, 1);
    const startingDayOfWeek = firstDay.getDay() || 7;

    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    let dayCounter = 1;
    let row = document.createElement('tr');

    for (let i = 1; i < startingDayOfWeek; i++) {
        row.appendChild(document.createElement('td'));
    }

    for (let day = 1; day <= daysInMonth; day++) {
        if ((day + startingDayOfWeek - 2) % 7 === 0 && day !== 1) {
            calendarBody.appendChild(row);
            row = document.createElement('tr');
        }

        const cell = document.createElement('td');
        const dayNum = document.createElement('div');
        dayNum.className = 'day-number';
        dayNum.textContent = day;
        cell.appendChild(dayNum);

        const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;

        if (tasks.has(dateStr) && tasks.get(dateStr).length > 0) {
            cell.classList.add('has-tasks');
        }

        const today = new Date();
        if (year === today.getFullYear() && month === today.getMonth() && day === today.getDate()) {
            cell.classList.add('today');
        }

        cell.addEventListener('click', () => openModal(dateStr));

        row.appendChild(cell);
        dayCounter++;
    }

    while (row.children.length < 7) {
        row.appendChild(document.createElement('td'));
    }
    calendarBody.appendChild(row);
}

function openModal(dateStr) {
    selectedDate = dateStr;
    const dateObj = new Date(dateStr);
    modalDateEl.textContent = dateObj.toLocaleDateString('ru-RU');

    tasksList.innerHTML = '';
    const list = tasks.get(dateStr) || [];

    if (list.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'Планов нет';
        li.style.fontStyle = 'italic';
        li.style.color = '#888';
        tasksList.appendChild(li);
    } else {
        list.forEach((task, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${task}</span>
                <button data-index="${index}">×</button>
            `;
            li.querySelector('button').addEventListener('click', (e) => {
                e.stopPropagation();
                removeTask(dateStr, index);
            });
            tasksList.appendChild(li);
        });
    }

    modal.classList.remove('hidden');
}

function removeTask(dateStr, index) {
    const list = tasks.get(dateStr) || [];
    list.splice(index, 1);
    if (list.length === 0) {
        tasks.delete(dateStr);
    } else {
        tasks.set(dateStr, list);
    }
    renderCalendar(currentDate);
    openModal(dateStr);
}

addTaskBtn.addEventListener('click', () => {
    const text = newTaskInput.value.trim();
    if (!text || !selectedDate) return;

    if (!tasks.has(selectedDate)) {
        tasks.set(selectedDate, []);
    }
    tasks.get(selectedDate).push(text);

    newTaskInput.value = '';
    renderCalendar(currentDate);
    openModal(selectedDate);
});

newTaskInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') addTaskBtn.click();
});

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});

//смена месяцев
prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});

renderCalendar(currentDate);