
const counters = document.querySelectorAll('.num1');
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target')
        const count = +counter.innerText.replace('%', '').replace('+', '');
        const increment = target / 90;
        if (count < target) {
            const nextValue = Math.ceil(count + increment);
            if (target === 123) {
                counter.innerText = nextValue + "+";
            } else {
                counter.innerText = nextValue + "%";
            }
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = (target === 123) ? target + "+" : target + "%";
        }
    };
    updateCount();
});