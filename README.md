# Music Recommendation System based on Facial Emotion

## Description

This project is a web application that recommends music based on the facial emotion of the user. It utilizes ReactJS for the frontend, Node.js and Express for the backend, and MongoDB for the database. Additionally, it integrates PyTorch and TensorFlow for facial emotion recognition.

The application allows users to register and authenticate securely. Once authenticated, users can upload their images, and the system will analyze their facial expressions to recommend suitable music tracks.

## Features

- User authentication: Secure registration and login system.
- Facial emotion recognition: Analyzes user's facial expressions to determine mood.
- Music recommendation: Recommends music tracks based on the detected emotion.
- Database integration: Stores user data and music preferences in MongoDB.
- Responsive design: Frontend is built using ReactJS, ensuring a seamless experience across devices.

## Installation

1. Clone the repository:

git clone https://github.com/your-username/music-recommendation-system.git

2. Install dependencies for frontend and backend:
cd music-recommendation-system/frontend
npm install

cd ../backend
npm install


3. Configure environment variables:

   - Create a `.env` file in the `backend` directory.
   - Define the following variables:
     ```
     PORT=3001
     MONGODB_URI=your_mongodb_uri
     SECRET_KEY=your_secret_key
     ```

4. Start the frontend and backend servers:

cd ../frontend
npm start

cd ../backend
npm start


## Usage

1. Register or log in to the application.
2. Upload an image containing your face.
3. Wait for the system to analyze your facial expression.
4. Receive music recommendations based on your mood.

## Technologies Used

- ReactJS
- Node.js
- Express
- MongoDB
- PyTorch
- TensorFlow

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## Contact

For any inquiries or support, please contact [Your Name](mailto:your-email@example.com).



