// src/components/Items.js
// src/components/Items.js
import React from 'react';
import item1 from '../assets/c1.jpg'; // Import local images
import item2 from '../assets/c2.jpeg'; // Import local images
import item3 from '../assets/c3.jpeg'; // Import local images
import item4 from '../assets/c4.jpeg'; // Import local images

// Sample items data with imported images
const items = [
    { id: 1, name: 'Item 1', description: 'This is Item 1', image: item1 },
    { id: 2, name: 'Item 2', description: 'This is Item 2', image: item2 },
    { id: 3, name: 'Item 3', description: 'This is Item 3', image: item3 },
    { id: 4, name: 'Item 4', description: 'This is Item 4', image: item4 },
];

// Inline CSS styles
const styles = {
    container: {
        padding: '20px',
        textAlign: 'center',
    },
    item: {
        border: '1px solid #ccc',
        padding: '10px',
        margin: '10px',
        borderRadius: '5px',
    },
    image: {
        maxWidth: '100%',
        height: 'auto',
    },
    button: {
        marginTop: '10px',
        padding: '10px 20px',
        backgroundColor: '#4CAF50', // Green background
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

const Items = () => {
    const handleBuyClick = (itemName) => {
        alert(`You have bought ${itemName}!`); // Alert on button click
    };

    return (
        <div style={styles.container}>
            <h2>Items List</h2>
            {items.map((item) => (
                <div key={item.id} style={styles.item}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <img src={item.image} alt={item.name} style={styles.image} />
                    {/* Buy button added here */}
                    <button 
                        style={styles.button} 
                        onClick={() => handleBuyClick(item.name)} // Button click handler
                    >
                        Buy
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Items;
