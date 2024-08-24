
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function () {
            cards.forEach(c => c.classList.remove('expanded'));
            this.classList.add('expanded');
        });
    });
});
