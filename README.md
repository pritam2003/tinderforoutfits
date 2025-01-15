# TinderForClothes

TinderForClothes is a unique web application that brings the convenience of swipe-based decision-making to online shopping. Instead of swiping for people, you swipe for fashion! Explore items from Amazon and other stores with a simple and intuitive interface.

## Features

- **Swipe Right**: Add the item to your cart.
- **Swipe Left**: Skip the item.
- **Swipe Up**: Instantly buy the item.
- **Item Discovery**: Browse a variety of fashion items with ease.

---

## Tech Stack

### Frontend

- **React** + **Vite**: For a fast and responsive user interface.
- **Tailwind CSS**: For modern and efficient styling.

### Backend

- **Python Django**: To handle server-side logic and APIs.
- **Firebase**: For authentication and database management.

---

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js
- Python 3.x
- Firebase CLI

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/pritam2003/tinderforclothes.git
   cd tinderforclothes
   ```

2. Install frontend dependencies:

   ```bash
   cd frontend
   npm install
   ```

3. Set up the backend:

   ```bash
   cd ../backend
   python -m venv env
   source env/bin/activate   # Use `env\Scripts\activate` on Windows
   pip install -r requirements.txt
   ```

4. Configure Firebase:

   - Set up a Firebase project.
   - Download and add the `firebaseConfig` details to the appropriate files in both frontend and backend.

5. Run the development servers:

   - Frontend:
     ```bash
     cd ../frontend
     npm run dev
     ```
   - Backend:
     ```bash
     cd ../backend
     python manage.py runserver
     ```

---

## Folder Structure

```
.
├── frontend/         # React + Vite + Tailwind CSS
├── backend/          # Django backend
├── README.md         # Project documentation
└── firebase_config/  # Firebase configuration files
```

---

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push to the branch:
   ```bash
   git commit -m "Add feature name"
   git push origin feature-name
   ```
4. Open a pull request on the main repository.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

##

For questions or suggestions, please contact:

## Contact

- Email: 


