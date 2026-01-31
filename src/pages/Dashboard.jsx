import React, { useState, useEffect } from 'react';
import { Plus, Trash2, ExternalLink, Activity, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Pega a URL da Vercel (se configurada) ou usa localhost
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

const Dashboard = () => {
  const [links, setLinks] = useState([]);
  const [newUrl, setNewUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Pega o token real salvo no Login
  const token = localStorage.getItem('access_token');

  // Se não tiver token, chuta pro login (Proteção Extra)
  useEffect(() => {
    if (!token) navigate('/login');
  }, [token, navigate]);

  // BUSCAR SITES (Real)
  const fetchLinks = async () => {
    try {
      const response = await fetch(`${API_URL}/links/`, {
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 401) {
        handleLogout(); // Token venceu
        return;
      }
      const data = await response.json();
      setLinks(data);
    } catch (err) {
      console.error("Erro ao buscar links:", err);
    }
  };

  // ADICIONAR SITE (Real)
  const handleAddLink = async (e) => {
    e.preventDefault();
    if (!newUrl) return;
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_URL}/links/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: newUrl, name: newUrl }) // Usa a URL como nome inicial
      });

      if (!response.ok) throw new Error('Erro ao adicionar. Verifique a URL.');
      
      setNewUrl('');
      fetchLinks(); // Recarrega a lista
    } catch (err) {
      setError('Não foi possível adicionar este site.');
    } finally {
      setLoading(false);
    }
  };

  // DELETAR SITE (Real)
  const handleDelete = async (id) => {
    if (!confirm("Tem certeza que deseja parar de monitorar este site?")) return;
    try {
      await fetch(`${API_URL}/links/${id}/`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      setLinks(links.filter(link => link.id !== id));
    } catch (err) {
      alert("Erro ao deletar.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    navigate('/login');
  };

  useEffect(() => {
    if (token) fetchLinks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Topbar */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div className="bg-green-100 p-2 rounded-lg">
             <Activity className="text-green-600 w-5 h-5" />
          </div>
          <h1 className="text-lg font-bold text-gray-800 tracking-tight">Painel de Controle</h1>
        </div>
        <button 
          onClick={handleLogout}
          className="text-sm text-gray-500 hover:text-red-600 flex items-center gap-2 transition-colors"
        >
          Sair <LogOut size={16} />
        </button>
      </header>

      <main className="max-w-4xl mx-auto p-6 mt-4">
        
        {/* Adicionar Novo Site */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
          <h2 className="text-base font-semibold text-gray-700 mb-4">Monitorar Novo Site</h2>
          <form onSubmit={handleAddLink} className="flex gap-3">
            <input 
              type="url" 
              placeholder="https://exemplo.com.br" 
              className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
              required
            />
            <button 
              type="submit" 
              disabled={loading}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 disabled:opacity-50 flex items-center gap-2 transition-all shadow-lg shadow-green-900/10"
            >
              {loading ? 'Adicionando...' : <><Plus size={20} /> Adicionar</>}
            </button>
          </form>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        {/* Lista de Sites */}
        <div className="space-y-4">
          {links.length === 0 && !loading && (
            <div className="text-center py-12 text-gray-400">
              Nenhum site monitorado. Adicione o primeiro acima!
            </div>
          )}

          {links.map(link => (
            <div key={link.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 w-full">
                {/* Status Indicator */}
                <div className={`w-3 h-3 rounded-full shrink-0 ${link.last_status_code >= 200 && link.last_status_code < 300 ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.5)]'}`}></div>
                
                <div className="overflow-hidden">
                  <h3 className="font-bold text-gray-800 truncate">{link.name || link.url}</h3>
                  <a href={link.url} target="_blank" rel="noreferrer" className="text-xs text-gray-400 hover:text-green-600 hover:underline flex items-center gap-1 truncate">
                    {link.url} <ExternalLink size={10} />
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-6 w-full sm:w-auto justify-end border-t sm:border-t-0 pt-4 sm:pt-0 border-gray-100">
                <div className="text-right">
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Status</div>
                  <div className={`font-mono font-bold text-lg ${link.last_status_code >= 200 && link.last_status_code < 300 ? 'text-green-600' : 'text-red-600'}`}>
                    {link.last_status_code || '---'}
                  </div>
                </div>
                <button 
                  onClick={() => handleDelete(link.id)}
                  className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                  title="Parar monitoramento"
                >
                  <Trash2 size={20} />
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