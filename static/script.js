while (true) {
    const currentYear = new Date().getFullYear();
    const christmas = new Date('December 25, 2022 00:00:00');
    const now = new Date();
    const secondsLeft = (christmas - now) / 1000;
    document.getElementById('countdown').innerHTML = secondsLeft;
}