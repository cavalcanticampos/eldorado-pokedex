import React from 'react'
import './Search.css'

export default function Search() {
    return (
        <div className="group">
            <div className="search-container">
                <h1 className="search-title">800 Pokemons for you to choose your favorite</h1>
                <input type="text"  placeholder="Encuentra tu pokémon..." className="input-search"  />
            </div>
            
        </div>
    )
}
