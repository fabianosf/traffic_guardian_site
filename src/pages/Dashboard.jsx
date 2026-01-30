import React, { useState, useEffect } from 'react';
import { Plus, Trash2, ExternalLink, Activity } from 'lucide-react';

// URL do Backend (ajuste se precisar)
const API_URL = "http://localhost:8000/api"; 

const Dashboard = () => {
  const [links, setLinks] = useState([]);
  const [newUrl, setNewUrl] = useState('');
  // Simulação de Login (num app real você teria login de verdade)
  const token = localStorage.getItem('access_token'); 

  // Função para buscar links
  const fetchLinks = async () => {
    // Aqui viria a lógica real de fetch com o token
    // Por enquanto, vou deixar mockado para você ver a tela
    console.log("Buscando links...");
    // Exemplo de dados fictícios para teste visual:
    setLinks([
      { id: 1, name: "Meu Site Principal", url: "https://meusite.com", is_active: true, last_status_code: 200 },
      { id: 2, name: "Loja Virtual", url: "https://minhaloja.com.br", is_active: false, last_status_code: 500 },
    ]);
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Topbar do Sistema */}
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-700 flex items-center gap-2">
          <Activity className="text-blue-600" />
          Painel de Controle
        </h1>
        <div className="text-sm text-gray-500">Logado como: Usuário</div>
      </header>

      <main className="max-w-5xl mx-auto p-6 mt-6">
        
        {/* Adicionar Novo Site */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8 border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Monitorar Novo Link</h2>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="https://exemplo.com.br" 
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 flex items-center gap-2">
              <Plus size={18} /> Adicionar
            </button>
          </div>
        </div>

        {/* Lista de Sites */}
        <div className="grid gap-4">
          {links.map(link => (
            <div key={link.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex justify-between items-center hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className={`w-3 h-3 rounded-full ${link.last_status_code === 200 ? 'bg-green-500' : 'bg-red-500 animate-pulse'}`}></div>
                <div>
                  <h3 className="font-bold text-gray-800">{link.name}</h3>
                  <a href={link.url} target="_blank" className="text-xs text-blue-500 hover:underline flex items-center gap-1">
                    {link.url} <ExternalLink size={10} />
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className="text-xs text-gray-400">Status Code</div>
                  <div className={`font-mono font-bold ${link.last_status_code === 200 ? 'text-green-600' : 'text-red-600'}`}>
                    {link.last_status_code || '---'}
                  </div>
                </div>
                <button className="text-gray-400 hover:text-red-500 transition-colors">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;