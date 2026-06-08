# Racing Project Motorsport — Website

A fully static, responsive sim racing team website built with HTML5, CSS, and JavaScript.
Designed for GitHub Pages hosting — no backend, no database, no server-side code.

## 📁 File Structure

```
racing-project/
├── index.html            ← Home page
├── calendar.html         ← Calendar page (Google Calendar embeds)
├── contact.html          ← Contact form (Formspree / mailto)
├── css/
│   └── styles.css        ← All styles
├── js/
│   ├── data.js           ← ★ EDIT THIS to manage drivers, sponsors, leagues, gallery
│   ├── main.js           ← Core JS (nav, animations, rendering, form)
│   └── gallery.js        ← Lightbox functionality
├── images/               ← Put your images here
│   ├── drivers/          ← Driver photos (e.g., alex.jpg)
│   ├── sponsors/         ← Sponsor logos (e.g., simtech.png)
│   ├── leagues/          ← League logos (e.g., simgrid.png)
│   └── gallery/          ← Gallery photos (e.g., race01.jpg)
└── README.md
```

## 🚀 How to Run

### Locally
Just open `index.html` in any browser. Everything works without a server.

### On GitHub Pages
1. Push this folder to a GitHub repository.
2. Go to Settings → Pages → Source: "Deploy from a branch" → pick `main` / `root`.
3. Your site will be live at `https://yourusername.github.io/repo-name/`.

## ✏️ How to Edit Content

### Drivers & Sponsors
Open `js/data.js`. You'll find clearly labeled arrays:
- `drivers` — Add/remove driver objects.
- `sponsors` — Add/remove sponsor objects.
- `leagues` — Add/remove leagues.
- `gallery` — Add/remove gallery images.

Each item has simple fields like `name`, `image`, `role`, etc.
Just copy an existing entry, change the values, and save.

### Images
Place images in the matching subfolder inside `images/`.
Reference them in `data.js` like: `"images/drivers/yourname.jpg"`.
If an image is missing or fails to load, a styled placeholder will appear automatically.

## 📅 Calendar Setup

1. Go to [Google Calendar](https://calendar.google.com).
2. Open Settings → pick your calendar → "Integrate calendar".
3. Copy the calendar ID (e.g., `abc123@group.calendar.google.com`).
4. In `calendar.html`, replace `YOUR_CALENDAR_ID_1` and `YOUR_CALENDAR_ID_2` in the iframe `src` URLs.
5. Set your timezone by changing `Europe%2FLondon` to your timezone.

## 📬 Contact Form Setup

### Option A: Formspree (Recommended)
1. Go to [formspree.io](https://formspree.io) and sign up (free).
2. Create a new form → set the recipient to `racingprojectmotorsport@gmail.com`.
3. Copy your form ID (e.g., `xyzabcde`).
4. In `contact.html`, replace `YOUR_FORMSPREE_ID` in the form `action` URL:
   ```html
   action="https://formspree.io/f/xyzabcde"
   ```
5. Done! Messages will arrive in your inbox.

### Option B: Mailto Fallback
If you don't set up Formspree, the form automatically falls back to opening the user's email client with the message pre-filled. No setup needed.

## 🎥 Video Setup

In `index.html`, find the YouTube iframe and replace `VIDEO_ID` with your actual YouTube video ID.
For example, if your video URL is `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, the ID is `dQw4w9WgXcQ`.

## 🎨 Brand Colors
- Black: `#000000`
- White: `#FFFFFF`
- Yellow: `#e6e16d`

## ⚡ Features
- Fully responsive (mobile, tablet, desktop)
- Smooth scroll animations (Intersection Observer)
- Parallax hero effect
- Animated number counters
- Lightbox gallery with keyboard navigation
- Mobile hamburger menu
- Sticky header with scroll effects
- Data-driven content from a single JS file
- Accessible (ARIA labels, semantic HTML, keyboard support)
- Custom scrollbar styling
- No dependencies — pure HTML/CSS/JS
