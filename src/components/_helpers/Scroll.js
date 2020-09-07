export const Scroll = e => {
    e.preventDefault();
    const selector = document.getElementById(e.target.getAttribute('target-id'));
    console.log(selector);
    if (selector) {
        const element = selector.firstElementChild;
        const position = element.getBoundingClientRect();
        if (position.top >= 0 && position.bottom <= window.innerHeight) return;
        element.scrollIntoView({block: "center", behavior: "smooth"});
    }
};
