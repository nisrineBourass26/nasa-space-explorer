# NASA Space Explorer

NASA Space Explorer is an interactive educational web application that enables users to explore real-time space data using official NASA APIs. The platform combines astronomy, scientific visualization, and modern web development to create an engaging learning experience for students, educators, and space enthusiasts.

The application integrates multiple public APIs and a lightweight Flask backend to display astronomy images, near-Earth asteroid information, and Solar System objects through an intuitive and responsive interface.

---

## Project Overview

NASA Space Explorer was developed as an academic web development project focused on API integration, frontend development, asynchronous programming, and client-server architecture.

The project demonstrates how real scientific datasets can be transformed into an interactive educational platform using modern web technologies.

---

## Features

### Home Page

- Interactive landing page
- Space-themed user interface
- Responsive navigation
- Project introduction

---

### NASA Image Gallery

Explore Astronomy Picture of the Day (APOD) images directly from NASA.

Features include:

- Dynamic image loading
- Search by title
- Search by date
- Responsive gallery cards
- Loading indicators
- Error handling

---

### Near-Earth Asteroids

Retrieve real-time asteroid information from NASA's Near Earth Object API.

Displayed information includes:

- Asteroid name
- Estimated diameter
- Relative velocity
- Miss distance
- Hazard classification

The page also includes interactive charts for visualizing asteroid sizes using Chart.js.

---

### Solar System Explorer

Explore planets and moons using a Flask backend connected to an external Solar System API.

Users can:

- Browse planets
- Discover moons
- View physical characteristics
- Filter celestial bodies
- Explore scientific information through interactive cards

---

## Technologies Used

### Frontend

- HTML5
- CSS3
- Bootstrap 5
- JavaScript (ES6)

### Backend

- Python
- Flask

### Libraries

- Chart.js

### APIs

- NASA APOD API
- NASA Near Earth Object (NEO) API
- Solar System Open API

---

## Project Structure

```
nasa-space-explorer/

│
├── css/
├── js/
├── images/
├── screenshots/
├── app.py
├── index.html
├── gallery.html
├── asteroids.html
├── solar-system.html
├── README.md
```

---

## Application Pages

### Home

Introduces the project with an immersive space-themed interface and provides navigation to the application's main features.

### NASA Gallery

Displays Astronomy Picture of the Day images retrieved dynamically from NASA's APOD API.

### Asteroids

Provides detailed information about Near-Earth Objects for the current day, including interactive data visualization using Chart.js.

### Solar System

Displays planets and moons retrieved through a Flask backend connected to an external Solar System API.

---

## Screenshots

Create a **screenshots/** folder and add images such as:

- Home Page
- NASA Gallery
- Asteroids Dashboard
- Asteroid Charts
- Solar System Explorer
- Planet Cards

Example:

```
screenshots/
│
├── home.png
├── gallery.png
├── asteroids.png
├── chart.png
└── solar-system.png
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/nasa-space-explorer.git
```

Navigate to the project directory:

```bash
cd nasa-space-explorer
```

Install the backend dependencies:

```bash
pip install flask requests flask-cors
```

Run the Flask server:

```bash
python app.py
```

Open the frontend in your browser and start exploring NASA's public datasets.

---

## Browser Compatibility

Compatible with:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

---

## Learning Outcomes

This project strengthened my practical experience in:

- REST API integration
- Asynchronous JavaScript (Fetch API)
- JSON data processing
- Frontend development
- Flask backend development
- Client-server architecture
- Responsive web design
- Interactive data visualization
- Scientific data presentation

---

## Future Improvements

Potential future enhancements include:

- User authentication
- Favorite astronomy images
- Space mission explorer
- Satellite tracking
- Mars rover explorer
- ISS live tracking
- Dark/Light theme
- AI-powered astronomy assistant

---

## Author

**Nisrine Bourass**

Artificial Intelligence & Full-Stack Developer

GitHub: https://github.com/nisrinebourass26
