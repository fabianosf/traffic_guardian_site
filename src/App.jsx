import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Importe suas páginas (ajuste o caminho se necessário)
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';

// Função auxiliar para proteger rotas (simples)
const PrivateRoute = ({ children }) => {
  // Lógica: Se tem token, deixa passar. Se não, manda pra Home.
  // Para testes agora, vamos deixar passar sempre (return children). 
  // Depois mude para: return localStorage.getItem('access_token') ? children : <Navigate to="/" />;
  return children; 
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota Raiz: A Vitrine de Vendas */}
        <Route path="/" element={<LandingPage />} />

        {/* Rota do App: O Sistema Protegido */}
        <Route 
          path="/app" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } 
        />
        
        {/* Qualquer rota desconhecida volta pra Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;