import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Página de login</h1>
            <div style={{ marginTop: '20px' }}>
                <button
                    onClick={() => navigate('/cadastro')}
                    style={{ marginRight: '10px', padding: '10px 20px' }}
                >
                    Ir para Cadastro
                </button>
            </div>
        </div>
    );
};

export default Home;
