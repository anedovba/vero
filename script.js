const toggleButton = document.getElementById('theme-toggle');
        const body = document.body;
        const icon = toggleButton.querySelector('i');

        toggleButton.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            body.classList.toggle('light-mode');

            if (body.classList.contains('dark-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });