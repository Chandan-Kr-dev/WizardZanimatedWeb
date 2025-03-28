document.addEventListener('DOMContentLoaded', function() {
    // Select video and control elements
    const video = document.getElementById('company-video');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const muteBtn = document.getElementById('mute-btn');
    const progressSlider = document.getElementById('progress-slider');
    const currentTimeEl = document.getElementById('current-time');
    const totalTimeEl = document.getElementById('total-time');

    // Format time to mm:ss
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    // Play/Pause functionality
    playPauseBtn.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            video.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    // Mute/Unmute functionality
    muteBtn.addEventListener('click', function() {
        if (video.muted) {
            video.muted = false;
            muteBtn.textContent = 'Mute';
        } else {
            video.muted = true;
            muteBtn.textContent = 'Unmute';
        }
    });

    // Update progress slider and time
    video.addEventListener('timeupdate', function() {
        const progress = (video.currentTime / video.duration) * 100;
        progressSlider.value = progress;
        
        // Update current time
        currentTimeEl.textContent = formatTime(video.currentTime);
        totalTimeEl.textContent = formatTime(video.duration);
    });

    // Seek functionality
    progressSlider.addEventListener('input', function() {
        const time = (progressSlider.value / 100) * video.duration;
        video.currentTime = time;
    });

    // Reset play button when video ends
    video.addEventListener('ended', function() {
        playPauseBtn.textContent = 'Play';
        progressSlider.value = 0;
    });

    // Metadata loaded event to set initial total time
    video.addEventListener('loadedmetadata', function() {
        totalTimeEl.textContent = formatTime(video.duration);
    });
});