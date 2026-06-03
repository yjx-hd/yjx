# Digital Clock - Multiple Time Zones

A beautiful, responsive digital clock web application that displays the current time across multiple major cities around the world.

## Features

✨ **Key Features:**
- **Real-time Updates**: Displays current time updated every second
- **Multiple Time Zones**: Shows 8 major cities across different time zones:
  - New York (UTC-5)
  - London (UTC+0)
  - Tokyo (UTC+9)
  - Sydney (UTC+10)
  - Dubai (UTC+4)
  - São Paulo (UTC-3)
  - Singapore (UTC+8)
  - Hong Kong (UTC+8)
- **Glassmorphism Design**: Modern UI with frosted glass effect
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Pulse effect on time updates for visual feedback
- **Dark Theme**: Eye-friendly dark background with neon green digital display

## How It Works

1. The application uses JavaScript's `Intl.DateTimeFormat` API to convert current time to different timezones
2. Updates run every second using `setInterval()` for real-time display
3. CSS Grid layout automatically adjusts based on screen size
4. Hover effects and animations enhance user experience

## Files

- **index.html** - Main HTML structure
- **styles.css** - Styling with glassmorphism effect and responsive design
- **script.js** - JavaScript logic for timezone calculations and updates
- **README.md** - Documentation

## How to Use

1. Navigate to the `digital-clock` folder
2. Open `index.html` in any modern web browser
3. Watch the clocks update in real-time!

## Customization

### Add More Time Zones

Edit `script.js` and add more entries to the `timeZones` object:

```javascript
const timeZones = {
    nyc: 'America/New_York',
    paris: 'Europe/Paris',
    // Add more timezones here
};
```

Then add corresponding HTML in `index.html`:

```html
<div class="clock-card">
    <h2>Paris</h2>
    <p class="timezone-info">(UTC+1)</p>
    <div class="digital-clock" id="paris">00:00:00</div>
</div>
```

### Change Color Scheme

Modify the CSS variables in `styles.css`:
- Change `#00ff88` (green) to your preferred color
- Update gradient colors in the `body` background

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- IE11: ⚠️ Limited support

## Performance

- Lightweight (< 20KB total)
- Minimal CPU usage
- No external dependencies
- Pure vanilla JavaScript

## License

Free to use and modify for personal and commercial projects.
