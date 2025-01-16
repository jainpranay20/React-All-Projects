import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Accordion = () => {
    const [items, setItems] = useState([]);
    const [openIndex, setOpenIndex] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.log(error);
            }

        }
        fetchData();
    }, [])

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }
    return (
        <div>
            {items.map((item) => (
                <div key={item.id}>
                    <div onClick={() => handleToggle(item.id)} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                        {item.title}
                    </div>
                    {openIndex === item.id && (
                        <div style={{ padding: '10px', border: '1px solid #ccc' }}>
                            {item.body}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Accordion;