document.addEventListener('DOMContentLoaded', () => {
    const tooltip = document.getElementById('tooltip');
    const elementsWithTooltip = document.querySelectorAll('[data-tooltip]');

    elementsWithTooltip.forEach(element => {
        element.addEventListener('mouseover', (event) => {
            tooltip.textContent = event.target.getAttribute('data-tooltip');
            tooltip.style.opacity = 1;
        });

        element.addEventListener('mousemove', (event) => {
            tooltip.style.left = `${event.pageX + 10}px`;
            tooltip.style.top = `${event.pageY + 10}px`;
        });

        element.addEventListener('mouseout', () => {
            tooltip.style.opacity = 0;
        });
    });
});
