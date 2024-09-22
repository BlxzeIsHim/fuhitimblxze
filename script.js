// Function to switch themes and save preference
function switchTheme(theme) {
    const themeStyle = document.getElementById('theme-style');
    if (theme === 'gradient') {
        themeStyle.setAttribute('href', 'maingradient.css');
    } else if (theme === 'dark') {
        themeStyle.setAttribute('href', 'main.css');
    } else {
        themeStyle.setAttribute('href', 'mainlight.css');
    }
    localStorage.setItem('theme', theme);
}

// Function to load saved theme preference
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    switchTheme(savedTheme);
}

// Function to open theme selection popup
function openThemePopup() {
    document.getElementById('theme-popup').style.display = 'block';
}

// Function to close theme selection popup
function closeThemePopup() {
    document.getElementById('theme-popup').style.display = 'none';
}

// Event listener for download button
document.getElementById('download-btn').addEventListener('click', async () => {
    const url = document.getElementById('video-url').value;
    if (url) {
        const response = await fetch(`/download?url=${encodeURIComponent(url)}`);
        if (response.ok) {
            const blob = await response.blob();
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'video.mp4';
            link.click();
        } else {
            alert('Failed to download video.');
        }
    } else {
        alert('Please enter a valid YouTube URL.');
    }
});

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', loadTheme);
