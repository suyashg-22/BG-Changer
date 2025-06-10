Background Color Changer 🎨


A simple React app that allows users to change the background color of the page with the click of a button.
Built using React + Vite + Tailwind CSS.

🛠️ Tech Stack


React
Vite
Tailwind CSS

🚀 Getting Started


1️⃣ Clone the repo
git clone https://github.com/suyashg-22/BG-Changer
cd your-repo-name
2️⃣ Install dependencies
npm install
3️⃣ Run the development server
npm run dev
4️⃣ Build for production
npm run build

📂 Project Structure


public/           # Static files (vite.svg)
src/              # Source code
  App.jsx         # App component with background color logic
  index.css       # Tailwind CSS styles
  main.jsx        # Entry point
index.html        # HTML template
vite.config.js    # Vite configuration
tailwind.config.js # Tailwind configuration


🎨 Features


Click on buttons to instantly change the background color of the page.

Smooth transition effect on background color.

Fully responsive UI with modern design.

Built using React functional components and hooks.


🔗 Live Demo

Coming soon...

📜 License


This project is licensed under the MIT License.

⭐ How it works


Uses the useState React hook to manage the color state.

The main container's background color is set dynamically with inline styles:

jsx
Copy
Edit
style={{backgroundColor: color}}
Buttons trigger setColor with the desired color value on click.
