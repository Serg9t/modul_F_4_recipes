import React from 'react';
import DishesList from '../components/DishesList';

const Home = ({ dishes }) => {

    return (
        <main className='home'>
            <h2 className="title">Все рецепты</h2>
            {dishes.length ? (
                <DishesList dishes={dishes} />
            ) : (
                <p style={{ margin: "20px" }}>
                    No post display...
                </p>
            )}

        </main>
    )
}

export default Home