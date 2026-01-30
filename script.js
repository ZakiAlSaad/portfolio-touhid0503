

/*
 * ======================================================================================
 * Author:       S. M. ZAKI AL SAAD MARJAN
 * Qualification: BSc in CSE, VU
 * Position:     Owner & Founder Of HypnotiXstudio
 * ======================================================================================
 */
// 1. Configure Tailwind
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
};

// 2. Check Local Storage on Load
// This prevents flash of wrong theme
if (
  localStorage.getItem('theme') === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

// 3. Toggle Theme Function
function toggleTheme() {
  const html = document.documentElement;
  
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}