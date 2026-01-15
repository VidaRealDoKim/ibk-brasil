import React, { useState } from 'react';
import { Mail, Phone, Menu, X, Lightbulb, Target, Rocket, Network } from 'lucide-react';

/**
 * Componente principal do site IBK Brasil
 * 
 * Estrutura:
 * - Navegação fixa com menu responsivo
 * - Seção Hero com CTA (chamada para ação)
 * - Seções: Áreas de Atuação, Institucional, Estatísticas, Contato
 * - Footer
 */
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ============================================================
  // DADOS DE ÁREAS DE ATUAÇÃO
  // ============================================================
  // Cada área tem: título, descrição, ícone e gradiente de cor
  const areas = [
    {
      title: 'Tecnologia da Informação',
      description: 'Soluções que visam a produção, armazenamento, transmissão, acesso, segurança e uso das informações.',
      icon: <Network className="w-8 h-8" />,
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Biotecnologia e Sustentabilidade',
      description: 'Tecnologia baseada nas ciências biológicas para manipulação de organismos vivos em diversos níveis.',
      icon: <Lightbulb className="w-8 h-8" />,
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      title: 'Inteligência Artificial',
      description: 'Estudo da computação que busca imitar o funcionamento dos neurônios humanos em máquinas.',
      icon: <Rocket className="w-8 h-8" />,
      gradient: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Sistema de Telecomunicação',
      description: 'Equipamentos na aquisição, armazenamento, manipulação, gestão e transmissão de voz e dados.',
      icon: <Network className="w-8 h-8" />,
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Redes Inteligentes',
      description: 'Controle preciso do consumo de eletricidade através de conexões com medidores inteligentes.',
      icon: <Lightbulb className="w-8 h-8" />,
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      title: 'Indústria Petroquímica',
      description: 'Área da química relacionada aos derivados de petróleo e gás natural.',
      icon: <Rocket className="w-8 h-8" />,
      gradient: 'from-orange-500 to-red-600'
    },
    {
      title: 'Energias Renováveis',
      description: 'Energias resultantes de recursos renováveis e inesgotáveis como solar, hídrica e eólica.',
      icon: <Lightbulb className="w-8 h-8" />,
      gradient: 'from-emerald-400 to-emerald-600'
    },
    {
      title: 'Tecnologias Alternativas',
      description: 'Uso de fatores de produção abundantes localmente e minimização dos recursos escassos.',
      icon: <Target className="w-8 h-8" />,
      gradient: 'from-teal-500 to-teal-600'
    }
  ];

  // ============================================================
  // DADOS DOS OBJETIVOS/FINALIDADES DO INSTITUTO
  // ============================================================
  // Descrição clara dos 7 pilares da instituição
  const objectives = [
    { title: 'APOIAR', description: 'Apoio técnico, financeiro e moral de acordo com cada caso e interesses do instituto.' },
    { title: 'INTEGRAR', description: 'Integração entre projetos de educação, pesquisa, desenvolvimento, ciência e tecnologia.' },
    { title: 'DESENVOLVER', description: 'Desenvolvimento econômico, cultural e educacional através da inovação.' },
    { title: 'REALIZAR', description: 'Realização de projetos que promovam avanços científicos e tecnológicos.' },
    { title: 'ARTICULAR', description: 'Articulação entre diferentes setores para fomentar a inovação.' },
    { title: 'PROMOVER', description: 'Promoção de pesquisas, ciência e tecnologia para o desenvolvimento.' },
    { title: 'ELABORAR', description: 'Elaboração de estratégias e projetos inovadores com impacto social.' }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* ============================================================ */}
      {/* EFEITOS DE FUNDO - Blobs animados */}
      {/* ============================================================ */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* ============================================================ */}
      {/* NAVEGAÇÃO - Menu fixa no topo */}
      {/* ============================================================ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:py-24 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Marca */}
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              IBK Brasil
            </div>

            {/* Menu Desktop - Visível apenas em telas médias e maiores */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
              <a href="#institucional" className="hover:text-emerald-400 transition-colors">Institucional</a>
              <a href="#areas" className="hover:text-emerald-400 transition-colors">Áreas de Atuação</a>
              <a href="#contato" className="hover:text-emerald-400 transition-colors">Contato</a>
            </div>

            {/* Botão do Menu Mobile - Visível apenas em telas pequenas */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Menu Mobile - Expandível em telas pequenas */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <a href="#home" className="block hover:text-emerald-400 transition-colors">Home</a>
              <a href="#institucional" className="block hover:text-emerald-400 transition-colors">Institucional</a>
              <a href="#areas" className="block hover:text-emerald-400 transition-colors">Áreas de Atuação</a>
              <a href="#contato" className="block hover:text-emerald-400 transition-colors">Contato</a>
            </div>
          )}
        </div>
      </nav>

      {/* ============================================================ */}
      {/* HERO SECTION - Seção principal com CTA */}
      {/* ============================================================ */}
      <section id="home" className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Título Principal */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            Instituto Brasil Koréia
          </h1>
          
          {/* Subtítulo / Descrição */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Apoio, desenvolvimento, fomentação, articulação e promoção de projetos de educação, pesquisa, desenvolvimento, ciência, tecnologia e inovação.
          </p>
          
          {/* Botões de Ação (CTA) */}
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+5547997060044" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-4 rounded-full font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all shadow-lg shadow-emerald-500/20"
            >
              <Phone className="w-5 h-5" />
              (+55) 47 9 9706-0044
            </a>
            <a 
              href="mailto:contato@ibkbrasil.org.br" 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20"
            >
              <Mail className="w-5 h-5" />
              contato@ibkbrasil.org.br
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ÁREAS DE ATUAÇÃO - Card grid com 4 colunas */}
      {/* ============================================================ */}
      <section id="areas" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Cabeçalho da seção */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Áreas de Atuação
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Expertise em múltiplas áreas estratégicas para o desenvolvimento tecnológico e científico
            </p>
          </div>

          {/* Grade de Cards - 1 coluna mobile, 2 tablet, 4 desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area, index) => (
              <div 
                key={index}
                className="group relative p-6 rounded-2xl bg-slate-800/30 backdrop-blur-lg border border-white/10 hover:border-emerald-500/30 transition-all hover:-translate-y-2 cursor-pointer"
              >
                {/* Background com gradiente que aparece ao hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>
                
                {/* Conteúdo do Card */}
                <div className="relative">
                  <div className="mb-4 text-emerald-400">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* INSTITUCIONAL - Objetivos/Finalidades (7 pilares) */}
      {/* ============================================================ */}
      <section id="institucional" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Cabeçalho da seção */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Objetos e Finalidade da Entidade
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              O Instituto IBK tem como missão o apoio, desenvolvimento, fomentação, articulação e a promoção de projetos de educação, pesquisa, desenvolvimento, ciência, tecnologia e inovação.
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Disponibilizamos uma equipe de profissionais multidisciplinar, aliados a equipamentos e softwares de alta tecnologia em uma vasta rede de contatos para fazer cumprir a nossa missão com primor.
            </p>
          </div>

          {/* Grade de Objetivos - 3 colunas desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((obj, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg border border-emerald-500/20 hover:border-emerald-500/50 transition-all"
              >
                <h3 className="text-2xl font-bold text-emerald-400 mb-3">{obj.title}</h3>
                <p className="text-gray-400 leading-relaxed">{obj.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ESTATÍSTICAS - "Brasil e a Tecnologia" */}
      {/* ============================================================ */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 rounded-3xl p-8 md:p-12 border border-emerald-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Brasil e a Tecnologia
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-4xl mx-auto text-center">
              Segundo a CNI (Confederação Nacional da Indústria, 2020), o Brasil ocupa a 62ª colocação no Índice Global de Inovação (IGI), quatro posições acima em comparação a 2019. O ranking abrange 131 países.
            </p>
            
            {/* Estatísticas em 3 colunas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">62º</div>
                <div className="text-gray-400">Posição no IGI</div>
              </div>
              <div className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">5º</div>
                <div className="text-gray-400">Importação - Coreia do Sul</div>
              </div>
              <div className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">11º</div>
                <div className="text-gray-400">Exportação - Coreia do Sul</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CONTATO - Formulário e informações de contato */}
      {/* ============================================================ */}
      <section id="contato" className="py-20 px-4 relative">
        <div className="max-w-3xl mx-auto">
          {/* Cabeçalho da seção */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Entre em Contato
            </h2>
            <p className="text-gray-400 text-lg">
              Nossa equipe técnica está pronta para lhe atender
            </p>
          </div>

          {/* Formulário de Contato */}
          <div className="bg-slate-800/30 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <form className="space-y-6">
              {/* Campo: Nome */}
              <div>
                <label className="block text-sm font-medium mb-2">Seu Nome</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-white/10 focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="Digite seu nome"
                />
              </div>
              
              {/* Campo: E-mail */}
              <div>
                <label className="block text-sm font-medium mb-2">Seu E-mail</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-white/10 focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              
              {/* Campo: Mensagem */}
              <div>
                <label className="block text-sm font-medium mb-2">Sua Mensagem (opcional)</label>
                <textarea 
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-white/10 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                  placeholder="Digite sua mensagem"
                ></textarea>
              </div>
              
              {/* Botão de Envio */}
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-4 rounded-full font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all shadow-lg shadow-emerald-500/20"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="mt-8 text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Phone className="w-5 h-5" />
              <a href="tel:+5547997060044" className="hover:text-emerald-400 transition-colors">
                (+55) 47 9 9706-0044
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Mail className="w-5 h-5" />
              <a href="mailto:contato@ibkbrasil.org.br" className="hover:text-emerald-400 transition-colors">
                contato@ibkbrasil.org.br
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* RODAPÉ */}
      {/* ============================================================ */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Instituto Brasil Koréia. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
