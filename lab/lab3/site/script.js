document.addEventListener('DOMContentLoaded', function () {
    // Выделение раздела при клике по меню
    const menuLinks = document.querySelectorAll('.menu-link');
    const sections = document.querySelectorAll('.section-highlight');
    let activeSection = null;

    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-section');
            const targetSection = document.getElementById(targetId);

            if (activeSection) {
                activeSection.style.backgroundColor = '';
            }

            if (targetSection) {
                targetSection.style.backgroundColor = '#adeaf2';
                activeSection = targetSection;
            }

            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Выделение столбца таблицы
    const tableHeaders = document.querySelectorAll('#pandaTable thead th');
    let activeColumnIndex = null;

    tableHeaders.forEach(th => {
        th.style.cursor = 'pointer';
        th.title = 'Кликните, чтобы выделить столбец';

        th.addEventListener('click', function () {
            const colIndex = this.getAttribute('data-col');

            if (activeColumnIndex !== null) {
                document.querySelectorAll(`#pandaTable td:nth-child(${parseInt(activeColumnIndex) + 1})`)
                    .forEach(cell => cell.classList.remove('column-highlight'));
            }

            if (activeColumnIndex === colIndex) {
                activeColumnIndex = null;
                return;
            }

            activeColumnIndex = colIndex;
            document.querySelectorAll(`#pandaTable td:nth-child(${parseInt(colIndex) + 1})`)
                .forEach(cell => {
                    cell.classList.add('column-highlight');
                });
        });
    });

    const asideTrigger = document.getElementById('showAside');
    const aside = document.getElementById('asideInfo');

    asideTrigger.addEventListener('click', function (e) {
        e.preventDefault();
        aside.classList.remove('d-none');
        aside.style.position = 'fixed';
        aside.style.top = '50%';
        aside.style.left = '50%';
        aside.style.transform = 'translate(-50%, -50%)';
        aside.style.background = 'white';
        aside.style.padding = '20px';
        aside.style.border = '2px solid #80deea';
        aside.style.borderRadius = '10px';
    });

    window.closeAside = function () {
        aside.classList.add('d-none');
    };

    document.addEventListener('click', function (e) {
        if (!aside.contains(e.target) && e.target !== asideTrigger && !aside.classList.contains('d-none')) {
            closeAside();
        }
    });

    const form = document.getElementById('surveyForm');
    const inputs = form.querySelectorAll('input, textarea');

	const resetButton = form.querySelector('button[type="reset"]');
	
	resetButton.addEventListener('click', function (e) {
		e.preventDefault();
	
		const confirmed = confirm('Вы уверены, что хотите сбросить форму?');
	
		if (confirmed) {
			form.reset();
			document.getElementById('rangeValue').textContent = '50';
	
			inputs.forEach(input => {
				input.style.backgroundColor = '#FF0000';
				setTimeout(() => input.style.backgroundColor = '', 1000);
			});
		} else {
			inputs.forEach(input => {
				input.style.backgroundColor = '#00FF00';
				setTimeout(() => input.style.backgroundColor = '', 1000);
			});
		}
	});

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        inputs.forEach(input => {
            input.style.backgroundColor = '#0000FF';
            setTimeout(() => {
                input.style.backgroundColor = '';
            }, 1000);
        });

        setTimeout(() => {
            alert('Данные успешно отправлены!');
        }, 1000);
    });

    const rangeInput = document.getElementById('range');
    const rangeValue = document.getElementById('rangeValue');
    rangeInput.addEventListener('input', () => {
        rangeValue.textContent = rangeInput.value;
    });
});