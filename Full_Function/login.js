const loginButton = document.getElementById('loginButton');
        const popupLogin = document.getElementById('popupLogin');
        const overlay = document.getElementById('overlay');
        const closePopup = document.getElementById('closePopup');

        // Open Popup
        loginButton.addEventListener('click', () => {
            popupLogin.style.display = 'block';
            overlay.style.display = 'block';
        });

        // Close Popup
        closePopup.addEventListener('click', () => {
            popupLogin.style.display = 'none';
            overlay.style.display = 'none';
        });

        // Close Popup When Clicking on Overlay
        overlay.addEventListener('click', () => {
            popupLogin.style.display = 'none';
            overlay.style.display = 'none';
        });