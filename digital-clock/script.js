// Time zones configuration
const timeZones = {
    nyc: 'America/New_York',
    london: 'Europe/London',
    tokyo: 'Asia/Tokyo',
    sydney: 'Australia/Sydney',
    dubai: 'Asia/Dubai',
    'sao-paulo': 'America/Sao_Paulo',
    singapore: 'Asia/Singapore',
    'hong-kong': 'Asia/Hong_Kong'
};

/**
 * Format time with leading zeros
 * @param {number} num - The number to format
 * @returns {string} - Formatted number with leading zero
 */
function padZero(num) {
    return num < 10 ? '0' + num : num;
}

/**
 * Get current time for a specific timezone
 * @param {string} timezone - The timezone identifier
 * @returns {string} - Formatted time string (HH:MM:SS)
 */
function getTimeInTimezone(timezone) {
    const now = new Date();
    
    // Get time in the specific timezone
    const options = {
        timeZone: timezone,
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const parts = formatter.formatToParts(now);
    
    let time = '';
    parts.forEach(part => {
        if (part.type !== 'literal') {
            time += part.value;
        } else if (part.value === ':') {
            time += ':';
        }
    });
    
    return time;
}

/**
 * Update all clock displays
 */
function updateClocks() {
    Object.entries(timeZones).forEach(([elementId, timezone]) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = getTimeInTimezone(timezone);
            
            // Add animation effect
            element.style.animation = 'none';
            setTimeout(() => {
                element.style.animation = 'pulse 0.3s ease-in-out';
            }, 10);
        }
    });
}

/**
 * Add pulse animation for visual feedback
 */
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        50% {
            opacity: 0.8;
            transform: scale(1.02);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);

// Initial update
updateClocks();

// Update clocks every second
setInterval(updateClocks, 1000);

// Add keyboard shortcut to reload (for testing)
document.addEventListener('keydown', (e) => {
    if (e.key === 'r' && e.ctrlKey) {
        updateClocks();
    }
});