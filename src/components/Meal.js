import React, { useEffect, useState } from "react";
import Mealitem from "./MealItem";
import './style.css';
import Button from 'react-bootstrap/Button';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Meal = () => {
    const [search, setSearch] = useState("");
    const [Mymeal, setMeal] = useState(null);
    const [searched, setSearched] = useState(false);
    const [loading, setLoading] = useState(false); 

    const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s';

    const searchMeal = () => {
        if (search) {
            setLoading(true);
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return res.json();
                })
                .then(data => {
                    setMeal(data.meals);
                    setSearched(true);
                })
                .catch(error => {
                    console.error('Error:', error);
                    setMeal([]);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }

    const fetchMeals = async (url) => {
        setLoading(true);
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if (data.meals) {
                setMeal([...data.meals]);
            } else {
                setMeal([]);
            }
        } catch (err) {
            console.log('Error:', err.message);
            setMeal([]);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchMeals(allMealsUrl);
    }, []);

    return (
        <>
            <div className="main">
                <div className="heading">
                    
                </div>
                <div className="search-bg">
                <Navbar />
                
                <div className="searchBox">
                
                    <input
                        type="search"
                        placeholder="Search Your Meal..."
                        className="search-bar"
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") {
                                searchMeal();
                            }
                        }}
                    />
                    <Button variant="primary" className="button" onClick={searchMeal}>
                        Search
                    </Button>
                </div>
            
                <div className="items">
                
                </div>
                
                </div>
                <div className="dish"><h1>Your Meals Here...</h1></div>
                <div className="container">
                    {searched && Mymeal === null ? (
                        <p className="notSearch">No result found</p>
                    ) : (
                        Mymeal && Mymeal.map((res) => {
                            return (
                                <Mealitem data={res} />
                            )
                        })
                    )}
                </div>
            </div>
            <div className="footers">
                        <Footer />
            </div>
        </>
    );
}

export default Meal;
