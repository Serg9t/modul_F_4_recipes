import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ search, setSearch }) => {
    return (
        <nav className='nav'>
            <form className='searchForm' onSubmit={e => e.preventDefault()}>
                <input
                    type="text"
                    id='search'
                    placeholder='Search recipe'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </form>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/category">Category</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav