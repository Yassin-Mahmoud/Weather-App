import { useState } from "react";
import "./App.css";

type WeatherData = {
    name: string;
    sys: {
        country: string;
    };
    main: {
        temp: number;
        feels_like: number;
    };
    weather: {
        main: string;
        icon: string;
    }[];
};

const WeatherApp: React.FC = () => {
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const [city, setCity] = useState<string>("");
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const getWeatherData = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );
            const data = await response.json();

            if (data.cod == 404 || data.cod == 400) {
                setError(data.message);
            } else {
                setError("");
            }

            setWeather(data);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        getWeatherData();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    };

    return (
        <div className="bg-white text-black mx-auto max-w-1280 text-center p-7 rounded-lg h-auto">
            {/* Search form */}

            <form onSubmit={handleSubmit} className="flex">
                <input
                    type="text"
                    placeholder="Search"
                    value={city}
                    onChange={handleChange}
                    className="text-xl border-b p-1 border-gray-200 font-semibold up focus:border-b uppercase"
                />
                <button
                    className="rounded-3xl hover:shadow-md w-10"
                    type="submit"
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/3714/3714975.png"
                        alt="..."
                        className="w-7 m-auto"
                    />
                </button>
            </form>

            {loading && <p className="mt-5 text-x">Loading...</p>}

            {/* if (error) {show error} else {show weather} */}
            {error ? (
                <p className="font-bold mt-5 text-xl">{error}</p>
            ) : (
                weather && (
                    <div>
                        <p className="font-bold mt-4">
                            {weather?.name}, {weather?.sys.country}
                        </p>
                        <img
                            className="w-44 h-44 mx-auto"
                            src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                            alt="Weather icon"
                        />
                        <h1 className="text-2xl font-bold">
                            {weather.weather[0].main}
                        </h1>
                        <h1 className="text-4xl font-extrabold">
                            {weather.main.temp} &deg;C
                        </h1>
                        <p>Feels like: {weather.main.feels_like} &deg;C</p>
                    </div>
                )
            )}
        </div>
    );
};

export default WeatherApp;
