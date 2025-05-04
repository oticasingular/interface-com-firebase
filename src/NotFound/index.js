import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404 - Página Não Encontrada</h1>
            <p>A URL que você tentou acessar não existe.</p>
            <div style={{ marginTop: '20px' }}>
                <button
                    onClick={() => navigate('/')}
                    style={{ padding: '10px 20px' }}
                >
                    Voltar para Home
                </button>
            </div>
        </div>
    );
};

export default NotFound;
