import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, Zap, BellRing, ArrowRight, 
  Check, Lock, MonitorPlay, Mail, 
  Github, Linkedin, Globe, Phone, AlertTriangle 
} from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    // SETUP GERAL: Fundo escuro profissional e tipografia limpa
    <div className="min-h-screen bg-gray-950 text-gray-50 font-sans selection:bg-green-900 selection:text-white flex flex-col">
      
      {/* --- NAVBAR --- */}
      <nav className="border-b border-gray-800 bg-gray-950/90 backdrop-blur-sm fixed w-full z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-green-600/20 p-1.5 rounded-lg">
              <ShieldCheck className="w-6 h-6 text-green-500" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              Traffic<span className="text-green-500">Guardian</span>
            </span>
          </div>
          <button 
            onClick={() => navigate('/app')} 
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors border border-gray-700 hover:border-gray-500 px-4 py-2 rounded-md"
          >
            Acessar Painel
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="pt-32 pb-20 px-6 max-w-5xl mx-auto text-center flex-grow">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-900 border border-gray-800 text-gray-400 text-xs font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          Sistema Operacional v1.0
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Seu site caiu? <br />
          <span className="text-green-500">Nós avisamos primeiro.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Monitoramento de uptime 24/7 com alertas imediatos via <strong>Telegram e E-mail</strong>.
          Proteja sua receita e sua reputação sem configurações complexas.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button 
            onClick={() => navigate('/app')} 
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3.5 px-8 rounded-lg transition-all shadow-lg shadow-green-900/20"
          >
            Começar Agora <ArrowRight className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
            <Check className="w-4 h-4 text-green-500" /> Pagamento Único Vitalício
          </div>
        </div>

        {/* --- MOCKUP DO SISTEMA (Prova Visual) --- */}
        <div className="relative z-10 max-w-4xl mx-auto text-left">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl blur opacity-20"></div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-2xl relative">
            {/* Barra de Título Falsa */}
            <div className="bg-gray-950 px-4 py-3 border-b border-gray-800 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="mx-auto bg-gray-800/50 px-3 py-1 rounded-md text-xs text-gray-500 font-mono w-64 text-center">
                app.trafficguardian.com.br
              </div>
            </div>
            
            {/* Conteúdo do Dashboard Simulado */}
            <div className="p-6 md:p-8 bg-gray-900 grid gap-4">
              <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                <div>
                  <h3 className="text-white font-bold text-lg">Meus Sites</h3>
                  <p className="text-gray-500 text-xs">Atualizado há 10s</p>
                </div>
                <div className="bg-green-500/10 text-green-500 px-3 py-1 rounded text-xs font-bold border border-green-500/20">
                  ● Sistema Online
                </div>
              </div>
              
              {/* Site 1 - OK */}
              <div className="flex items-center justify-between bg-gray-950 p-4 rounded-lg border border-gray-800 border-l-4 border-l-green-500">
                <div className="flex items-center gap-4">
                  <div className="bg-green-500/10 p-2 rounded-full"><Check size={16} className="text-green-500"/></div>
                  <div>
                    <div className="text-white font-medium text-sm">loja-exemplo.com.br</div>
                    <div className="text-gray-500 text-xs">Uptime: 100%</div>
                  </div>
                </div>
                <div className="text-green-500 font-mono text-sm font-bold">200 OK</div>
              </div>

              {/* Site 2 - ERRO */}
              <div className="flex items-center justify-between bg-gray-950 p-4 rounded-lg border border-red-900/30 border-l-4 border-l-red-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-red-500/5 pointer-events-none"></div>
                <div className="flex items-center gap-4">
                  <div className="bg-red-500/10 p-2 rounded-full"><AlertTriangle size={16} className="text-red-500"/></div>
                  <div>
                    <div className="text-white font-medium text-sm">api.sistema-interno.com</div>
                    <div className="text-red-400 text-xs font-bold">Queda detectada!</div>
                  </div>
                </div>
                <div className="text-red-500 font-mono text-sm font-bold">500 Error</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- FEATURES --- */}
      <section className="py-24 bg-gray-900 border-y border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Simples como deve ser.</h2>
            <p className="text-gray-400">Três passos para blindar sua operação.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<MonitorPlay className="w-6 h-6 text-blue-400" />}
              title="1. Adicione o Site"
              desc="Cole a URL do seu site, landing page ou API no nosso painel intuitivo."
            />
            <FeatureCard 
              icon={<Zap className="w-6 h-6 text-yellow-400" />}
              title="2. Monitoramento Real"
              desc="Nosso robô verifica a resposta do servidor a cada 60 segundos, 24 horas por dia."
            />
            <FeatureCard 
              icon={<BellRing className="w-6 h-6 text-green-400" />}
              title="3. Alerta Instantâneo"
              desc="Receba um aviso via E-mail e Telegram no segundo exato em que uma queda ocorrer."
            />
          </div>
        </div>
      </section>

      {/* --- PREÇO --- */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto bg-gray-900 border border-gray-800 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
            Oferta Limitada
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-2">Acesso Vitalício</h2>
          <p className="text-gray-400 mb-8">Diga adeus às mensalidades em dólar.</p>

          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="text-gray-500 line-through text-lg">R$ 297</span>
            <span className="text-5xl font-extrabold text-white tracking-tight">R$ 47,90</span>
          </div>

          <ul className="text-left max-w-sm mx-auto space-y-3 mb-10 text-gray-300">
            <li className="flex gap-3"><Check className="text-green-500 w-5 h-5 shrink-0"/> Monitoramento ilimitado</li>
            <li className="flex gap-3"><Check className="text-green-500 w-5 h-5 shrink-0"/> Alertas Telegram & Email</li>
            <li className="flex gap-3"><Check className="text-green-500 w-5 h-5 shrink-0"/> Sem renovação mensal</li>
          </ul>

          <button 
            onClick={() => navigate('/app')} 
            className="w-full md:w-auto bg-white text-gray-900 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg transition-colors flex items-center justify-center gap-2 mx-auto"
          >
            <Lock className="w-4 h-4" /> Garantir Minha Vaga
          </button>
          
          <p className="mt-6 text-xs text-gray-500">
            Pagamento único via Pix. Garantia de 7 dias.
          </p>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-20 bg-gray-950 border-t border-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white text-center mb-12">Perguntas Frequentes</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-3">
              <h3 className="text-green-500 font-bold text-xs uppercase tracking-wider">Pagamento</h3>
              <h4 className="text-white font-semibold text-lg">É realmente pagamento único?</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Sim. Você paga R$ 47,90 uma única vez e tem acesso vitalício ao plano atual. Sem mensalidades surpresa.</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-green-500 font-bold text-xs uppercase tracking-wider">Suporte</h3>
              <h4 className="text-white font-semibold text-lg">Como recebo os alertas?</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Assim que nosso robô detecta a queda, enviamos uma mensagem no seu Telegram e um E-mail instantaneamente.</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-green-500 font-bold text-xs uppercase tracking-wider">Garantia</h3>
              <h4 className="text-white font-semibold text-lg">E se eu não gostar?</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Você tem 7 dias de garantia incondicional. Se não for útil para você, devolvemos 100% do seu dinheiro via Pix.</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-green-500 font-bold text-xs uppercase tracking-wider">Técnico</h3>
              <h4 className="text-white font-semibold text-lg">Preciso instalar algo no site?</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Não. Nosso monitoramento é externo. Apenas cole a URL do seu site e nós cuidamos do resto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER PROFISSIONAL --- */}
      <footer className="bg-gray-950 border-t border-gray-900 pt-16 pb-8 mt-auto">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            
            {/* Coluna 1: Desenvolvedor */}
            <div className="text-center md:text-left">
              <h4 className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-4">Desenvolvido por</h4>
              <div className="flex flex-col items-center md:items-start gap-1">
                <span className="text-xl font-bold text-white">Fabiano Freitas</span>
                <span className="text-xs text-green-500 font-mono bg-green-900/20 px-2 py-0.5 rounded border border-green-900/30">
                  Full Stack Developer
                </span>
              </div>
            </div>

            {/* Coluna 2: Redes Sociais */}
            <div className="flex flex-col items-center justify-start">
              <h4 className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-4">Conecte-se</h4>
              <div className="flex gap-4">
                <SocialLink href="https://github.com/fabianosf" icon={<Github size={20} />} label="Github" />
                <SocialLink href="https://www.linkedin.com/in/fabianosfreitas/" icon={<Linkedin size={20} />} label="Linkedin" />
                <SocialLink href="https://fabianosf.com" icon={<Globe size={20} />} label="Portfólio" />
              </div>
            </div>

            {/* Coluna 3: Contato Direto */}
            <div className="text-center md:text-right flex flex-col items-center md:items-end">
              <h4 className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-4">Contato</h4>
              <div className="space-y-3">
                <a href="mailto:fabiano.freitas@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm group">
                   <span className="group-hover:text-green-400 transition-colors">fabiano.freitas@gmail.com</span> 
                   <Mail size={16} className="text-gray-600 group-hover:text-green-500" />
                </a>
                <a href="https://wa.me/5521994078286" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm justify-end group">
                   <span className="group-hover:text-green-400 transition-colors">(21) 99407-8286</span> 
                   <Phone size={16} className="text-gray-600 group-hover:text-green-500" />
                </a>
              </div>
            </div>

          </div>

          {/* Copyright */}
          <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
            <p>&copy; 2026 Traffic Guardian. Todos os direitos reservados.</p>
            <p className="flex items-center gap-1">
              Feito com <span className="text-red-900">❤</span> e React.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- Componentes Auxiliares ---

const FeatureCard = ({ icon, title, desc }) => {
  return (
    <div className="bg-gray-950 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors group">
      <div className="bg-gray-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-gray-800 group-hover:border-green-500/30 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
    </div>
  );
};

const SocialLink = ({ href, icon, label }) => {
  return (
    <a 
      href={href} 
      title={label}
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-green-500/50 hover:bg-green-500/10 transition-all transform hover:-translate-y-1"
    >
      {icon}
    </a>
  )
}

export default LandingPage;