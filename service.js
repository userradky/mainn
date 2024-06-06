document.addEventListener('DOMContentLoaded', (event) => {
    const logoutBtn = document.getElementById('logoutBtn');
    const logoutPopup = document.getElementById('logoutPopup');
    const confirmLogout = document.getElementById('confirmLogout');
    const cancelLogout = document.getElementById('cancelLogout');
    const logoutForm = document.getElementById('logoutForm');

    logoutBtn.addEventListener('click', () => {
        logoutPopup.style.display = 'flex';
    });

    confirmLogout.addEventListener('click', () => {
        logoutForm.submit();
    });

    cancelLogout.addEventListener('click', () => {
        logoutPopup.style.display = 'none';
    });
});
