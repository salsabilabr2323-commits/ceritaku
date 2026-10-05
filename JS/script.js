// MOBILE MENU
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

document
    .querySelectorAll('.mobile-link')
    .forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });


// PROJECT FILTER
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');
const emptyProjects = document.getElementById('emptyProjects');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        let visible = 0;

        filterButtons.forEach(btn => {
            btn.classList.remove(
                'active',
                'bg-indigo-600',
                'text-white'
            );

            btn.classList.add(
                'bg-slate-900',
                'text-slate-400',
                'border',
                'border-slate-800'
            );
        });

        button.classList.add(
            'active',
            'bg-indigo-600',
            'text-white'
        );

        button.classList.remove(
            'bg-slate-900',
            'text-slate-400',
            'border',
            'border-slate-800'
        );

        projectItems.forEach(item => {
            const category = item.dataset.category || '';
            const show = filter === 'all' || category === filter;

            item.style.display = show ? '' : 'none';

            if (show) {
                visible++;
            }
        });

        emptyProjects.classList.toggle(
            'hidden',
            visible > 0
        );
    });
});


// CURRENT YEAR
document.getElementById('year').textContent =
    new Date().getFullYear();


// CONTACT FORM
document
    .getElementById('contactForm')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        const name =
            document.getElementById('name').value.trim();

        const email =
            document.getElementById('email').value.trim();

        const message =
            document.getElementById('message').value.trim();

        const subject =
            encodeURIComponent(
                'Pesan dari Portfolio Aca'
            );

        const body =
            encodeURIComponent(
                'Nama: ' + name +
                '\nEmail: ' + email +
                '\n\nPesan:\n' + message
            );

        /*
            GANTI EMAIL DI BAWAH
            dengan email asli Aca.
        */

        window.location.href =
            'mailto:contact@portfolio.com' +
            '?subject=' + subject +
            '&body=' + body;
    });