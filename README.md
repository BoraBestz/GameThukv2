# GameThuk 🎮

**University Final Year Project**  
Project Title: GameThuk — A Web-Based Game Aggregator and Tracker

Author: Panupong Sornwiriya (BoraBestz), Tammawat (tammawatRa)  
Department: [Computer Science]  
University: [Kasetsart University]  
Academic Year: 2022

---

## 1. Introduction

GameThuk  is a web application designed to aggregate and track video game information from multiple online sources. Utilizing web scraping techniques implemented in Python, it collects and processes game data which is then served via a REST API. The frontend, built with Next.js and Tailwind CSS, provides a responsive and user-friendly interface for browsing game details.

The main goal of this project is to develop an automated system that helps gamers easily search, explore, and stay updated with the latest game releases and reviews all in one place.

---

## 2. Objectives

- Develop a web application that automatically gathers game data from various external websites  
- Display detailed game information including titles, cover images, release dates, ratings, and descriptions  
- Design a modern, intuitive UI using Next.js and Tailwind CSS to enhance user experience  
- Implement a RESTful API backend using Python for scalable and maintainable data management  
- Demonstrate full-stack development skills combining frontend, backend, and data processing

---

## 3. Technologies Used

- **Frontend:** Next.js, React, Tailwind CSS  
- **Backend & Scraping:** Python (with libraries such as BeautifulSoup and Requests)  
- **API:** RESTful API built with Flask or FastAPI  
- **State Management:** Redux for managing frontend state  
- **Others:** Node.js, npm/yarn, Git for version control

---

## 4. System Architecture

The system is composed of three main parts:  

1. **Web Scraper:** Python scripts that crawl target game websites, extract relevant data, and store it in a database or serve it via API.  
2. **Backend API:** A RESTful service that provides endpoints to query and deliver game data to the frontend.  
3. **Frontend:** Next.js application that fetches data from the backend and renders interactive pages for users to browse, search, and view game details.

---

## 5. Features

- Automated data scraping and update pipeline  
- Game listings with filters and search functionality  
- Detailed game pages with images, descriptions, and ratings  
- Responsive design for desktop and mobile  
- Expandable API endpoints for future enhancements

---

## 6. Installation & Setup

### Prerequisites

- Node.js v16 or higher  
- Python 3.8 or higher  
- npm or yarn package manager

### Steps

it clone https://github.com/BoraBestz/GameThuk.git
cd GameThuk/server

# Set up Python environment
python -m venv venv
source venv/bin/activate      # Linux/Mac
.\venv\Scripts\activate       # Windows

pip install -r requirements.txt

# Run backend API or scraper as needed
python app.py                 # Run API
# or
python scraper.py             # Run scraper

# Back to frontend folder
cd ..

npm install
npm run dev
Open your browser at http://localhost:3000
