# Weather-App
A simple weather app built with React, TypeScript, Tailwind css, and OpenWeatherMap API.

# Features
* Displays the current weather information (temperature, feels like, etc.) for a specified city.
* Allows users to search for a city and get the weather information for that city.
* Displays an appropriate icon based on the weather condition.

# Installation
1. Clone the repo by running the following command:
```
git clone https://github.com/Yassin-Mahmoud/Weather-App.git
```
2. Navigate to the project directory:
```
cd Weather-App
```
3. Install dependencies:
```
npm install
```
4. Create a .env file in the root directory with the following format:
```.env
VITE_API_KEY=<your OpenWeatherMap API key>
```
Replace `<your OpenWeatherMap API key>` with your own [API key] which you can obtain by creating an account on the [OpenWeatherMap website](https://home.openweathermap.org/users/sign_up).

5. Start the app:
```
npm run dev
```
The app should now be running on `http://localhost:5173/`.

# Usage
1. Enter a city name in the search bar and press Enter or click the search button. The weather information for the specified city should be displayed.
2. To get the weather information for another city, simply enter the city name in the search bar and press Enter or click the search button again.

**Note:** The app uses the OpenWeatherMap API to retrieve the weather information, and there is a limit on the number of API calls that can be made per day (1000 call/day). If you exceed this limit, the app may not be able to retrieve the weather information for the specified city.

# Contributing
Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.
