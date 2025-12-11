# 🎵 Music Integration Guide

Music has been successfully integrated into your GTA 6 PM Tycoon game!

## 🎼 Required Music File

Just add **ONE** music file to your project root:

```
GTA 6 v1.2/
├── music.mp3       ← Your background music file
├── index.html
├── game.js
└── styles.css
```

## 🆓 Where to Get Free Music

### **1. Pixabay Music** (Recommended)
- **URL:** https://pixabay.com/music/
- **License:** Free for commercial use, no attribution required
- **Search Terms:**
  - "cyberpunk ambient", "corporate electronic", "futuristic tech"
  - "electronic upbeat", "cinematic game music"

### **2. Incompetech (Kevin MacLeod)**
- **URL:** https://incompetech.com/music/
- **License:** Free with attribution (or $30 for license)
- **Recommended Tracks:**
  - "Cipher", "District Four", "Hyperfun", "Decisions"

### **3. Free Music Archive**
- **URL:** https://freemusicarchive.org/
- **License:** Varies (check each track)
- **Filter:** CC BY or CC0 licenses

### **4. YouTube Audio Library**
- **URL:** https://www.youtube.com/audiolibrary
- **License:** Free to use
- **Filter:** Genre: Electronic, Ambient, Cinematic

### **5. Bensound**
- **URL:** https://www.bensound.com/
- **License:** Free with attribution
- **Recommended:**
  - Menu: "Creative Minds", "Evolution"
  - Gameplay: "Going Higher", "The Elevator"

## 🎚️ Music Specifications

### Recommended Settings:
- **Format:** MP3 (best browser compatibility)
- **Bitrate:** 128-192 kbps (good quality, reasonable file size)
- **Length:**
  - Menu: 1-2 minutes (loops)
  - Gameplay: 2-3 minutes (loops)
  - Postmortem: 2-3 minutes (plays once)
- **Volume:** Normalized to -14 LUFS (prevents loud/quiet inconsistencies)

### Mood Guide:
- **Menu Music:** Atmospheric, mysterious, cyberpunk vibes
- **Gameplay Music:** Energetic but not distracting, corporate/tech feel
- **Postmortem Music:** Reflective, dramatic, satisfying conclusion

## 🔧 Technical Implementation

### Current Features:
✅ Automatic music transitions (Menu → Gameplay → Postmortem)
✅ Looping for menu and gameplay
✅ Volume control (default 30%)
✅ Mute/unmute toggle button (top-right corner)
✅ Smooth track switching
✅ Browser autoplay handling

### Controls:
- **Toggle Button:** Top-right corner (🔊/🔇)
- **Volume:** Currently 30% (can adjust in code)
- **Tracks:** Auto-loop menu and gameplay, postmortem plays once

## 📝 Quick Setup Steps

1. Create `music` folder in project root
2. Download 3 music files (menu, gameplay, postmortem)
3. Rename them as: `menu.mp3`, `gameplay.mp3`, `postmortem.mp3`
4. Place in `music/` folder
5. Refresh the game - music will play automatically!

## 🎨 Customization

### Change Volume (in game.js):
```javascript
this.volume = 0.3; // Change to 0.5 for 50%, 0.7 for 70%, etc.
```

### Add More Tracks:
```html
<!-- Add to index.html -->
<audio id="music-tense" loop>
  <source src="music/tense.mp3" type="audio/mpeg">
</audio>
```

```javascript
// Add to MusicManager constructor
this.tracks = {
  menu: document.getElementById('music-menu'),
  gameplay: document.getElementById('music-gameplay'),
  postmortem: document.getElementById('music-postmortem'),
  tense: document.getElementById('music-tense') // New track
};
```

Then play with: `musicManager.play('tense');`

## 🚨 Troubleshooting

**Music not playing?**
- Check browser console for errors
- Ensure files are named correctly (case-sensitive)
- Some browsers require user interaction before playing audio
- Click the mute/unmute button to trigger playback

**Music too loud/quiet?**
- Adjust `this.volume` in MusicManager constructor
- Use audio editing software to normalize volume

**Wrong music playing?**
- Check file names match exactly: `menu.mp3`, `gameplay.mp3`, `postmortem.mp3`
- Ensure they're in the `music/` folder at project root

## 💡 Pro Tips

1. **Seamless Loops:** Use tracks designed to loop (fade out at end matches fade in at start)
2. **Consistent BPM:** Keep gameplay music around 120-140 BPM for good energy
3. **Test Muted:** Game should work perfectly with music off too
4. **File Size:** Keep each track under 3MB for faster loading
5. **Licenses:** Always check music licenses before publishing your game!

---

**Need Help?** Check the browser console (F12) for music-related logs and errors.
