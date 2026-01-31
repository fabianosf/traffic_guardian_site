import React, { useState, useEffect } from 'react';
import { Plus, Trash2, ExternalLink, Activity, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Como é React Puro no mesmo servidor, a API fica no /api relativo
const API_URL = "/api"; 

const Dashboard = () => {
  const [links, setLinks] = useState([]);
  const [newUrl, setNewUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('access_token');

  useEffect(() => {
    if (!token) navigate('/login');
    else fetchLinks();
  }, [token]);

  const fetchLinks = async () => {
    try {
      const res = await fetch(`${API_URL}/links/`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) setLinks(await res.json());
    } catch (err) { console.error(err); }
  };

  const handleAddLink = async (e) => {
    e.preventDefault();
    if (!newUrl) return;
    setLoading(true);
    try {
      await fetch(`${API_URL}/links/`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: newUrl, name: newUrl })
      });
      setNewUrl('');
      fetchLinks();
    } catch (err) { alert('Erro ao adicionar'); }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (confirm("Deletar este monitoramento?")) {
      await fetch(`${API_URL}/links/${id}/`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      fetchLinks();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-bold flex items-center gap-2"><Activity className="text-green-600"/> Painel</h1>
        <button onClick={() => {localStorage.clear(); navigate('/login')}} className="text-red-500 flex gap-1"><LogOut size={18}/> Sair</button>
      </header>
      <main className="max-w-4xl mx-auto p-6">
        <form onSubmit={handleAddLink} className="bg-white p-6 rounded-xl shadow-sm mb-6 flex gap-3">
          <input type="url" value={newUrl} onChange={e => setNewUrl(e.target.value)} placeholder="https://site.com" className="flex-1 border p-3 rounded" required />
          <button disabled={loading} className="bg-green-600 text-white px-6 py-3 rounded font-bold hover:bg-green-700">{loading ? '...' : 'Monitorar'}</button>
        </form>
        <div className="space-y-4">
          {links.map(link => (
            <div key={link.id} className="bg-white p-5 rounded-xl shadow-sm flex justify-between items-center">
              <div>
                <h3 className="font-bold">{link.name}</h3>
                <a href={link.url} target="_blank" className="text-xs text-blue-500 flex items-center gap-1">{link.url} <ExternalLink size={10}/></a>
              </div>
              <div className="flex items-center gap-4">
                <span className={`font-mono font-bold ${link.last_status_code===200?'text-green-600':'text-red-600'}`}>{link.last_status_code||'---'}</span>
                <button onClick={() => handleDelete(link.id)} className="text-gray-400 hover:text-red-500"><Trash2/></button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
export default Dashboard;