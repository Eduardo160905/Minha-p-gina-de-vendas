import { motion } from 'framer-motion';
import { Zap, Edit3, Loader2, Check } from 'lucide-react';
import { useCheckoutForm } from '../hooks/useCheckoutForm';
import { saveLead } from '../lib/supabase';
import { gerarMensagemAutomatica, redirecionarWhatsApp } from '../utils/whatsappMessage';

const SERVICOS = [
  'Gestão de Tráfego Pago',
  'Landing Page',
  'Posicionamento Digital',
  'Copywriting',
  'Estrutura de Vendas',
  'Automação de Marketing',
  'Não sei ainda — quero uma indicação',
];

const ESTADOS = [
  { sigla: 'AC', nome: 'Acre' },
  { sigla: 'AL', nome: 'Alagoas' },
  { sigla: 'AP', nome: 'Amapá' },
  { sigla: 'AM', nome: 'Amazonas' },
  { sigla: 'BA', nome: 'Bahia' },
  { sigla: 'CE', nome: 'Ceará' },
  { sigla: 'DF', nome: 'Distrito Federal' },
  { sigla: 'ES', nome: 'Espírito Santo' },
  { sigla: 'GO', nome: 'Goiás' },
  { sigla: 'MA', nome: 'Maranhão' },
  { sigla: 'MT', nome: 'Mato Grosso' },
  { sigla: 'MS', nome: 'Mato Grosso do Sul' },
  { sigla: 'MG', nome: 'Minas Gerais' },
  { sigla: 'PA', nome: 'Pará' },
  { sigla: 'PB', nome: 'Paraíba' },
  { sigla: 'PR', nome: 'Paraná' },
  { sigla: 'PE', nome: 'Pernambuco' },
  { sigla: 'PI', nome: 'Piauí' },
  { sigla: 'RJ', nome: 'Rio de Janeiro' },
  { sigla: 'RN', nome: 'Rio Grande do Norte' },
  { sigla: 'RS', nome: 'Rio Grande do Sul' },
  { sigla: 'RO', nome: 'Rondônia' },
  { sigla: 'RR', nome: 'Roraima' },
  { sigla: 'SC', nome: 'Santa Catarina' },
  { sigla: 'SP', nome: 'São Paulo' },
  { sigla: 'SE', nome: 'Sergipe' },
  { sigla: 'TO', nome: 'Tocantins' },
];

export default function CheckoutSection() {
  const {
    formData,
    errors,
    tipoMensagem,
    isLoading,
    showSuccess,
    handleChange,
    handleCelularChange,
    handleCpfCnpjChange,
    setTipoMensagem,
    setIsLoading,
    setShowSuccess,
    validar,
    resetForm,
  } = useCheckoutForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validar()) return;

    setIsLoading(true);

    try {
      const mensagem =
        tipoMensagem === 'automatica'
          ? gerarMensagemAutomatica({
              nome: formData.nome,
              cidade: formData.cidade,
              estado: formData.estado,
              servico_interesse: formData.servico_interesse,
            })
          : formData.mensagem_personalizada;

      const leadData = {
        nome: formData.nome,
        email: formData.email,
        celular: formData.celular,
        cpf_cnpj: formData.cpf_cnpj,
        cidade: formData.cidade,
        estado: formData.estado,
        servico_interesse: formData.servico_interesse,
        mensagem_personalizada: tipoMensagem === 'personalizada' ? formData.mensagem_personalizada : null,
        tipo_mensagem: tipoMensagem,
      };

      await saveLead(leadData);

      setShowSuccess(true);

      setTimeout(() => {
        redirecionarWhatsApp(mensagem);
        resetForm();
      }, 1500);
    } catch (error) {
      console.error('Erro ao enviar:', error);
      alert('Erro ao enviar. Tente novamente.');
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#07090e] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Pronto para começar?
          </h2>
          <p className="text-gray-400 text-lg">
            Deixe seus dados e vamos conversar sobre como podemos transformar seus resultados
          </p>
        </motion.div>

        {/* Success Message */}
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mb-8 p-4 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center gap-3"
          >
            <Check className="w-5 h-5 text-green-400" />
            <p className="text-green-400 font-medium">
              Dados salvos! Redirecionando para o WhatsApp...
            </p>
          </motion.div>
        )}

        {/* Form Container */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 space-y-8"
        >
          {/* Form Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Nome */}
            <div className="md:col-span-1">
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-3">
                Nome Completo
              </label>
              <input
                type="text"
                placeholder="Seu nome completo"
                value={formData.nome}
                onChange={(e) => handleChange('nome', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg bg-white/5 border transition-all duration-200 outline-none ${
                  errors.nome
                    ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/30'
                    : 'border-white/10 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30'
                } text-white placeholder:text-gray-500`}
              />
              {errors.nome && <p className="text-red-400 text-sm mt-2">{errors.nome}</p>}
            </div>

            {/* Email */}
            <div className="md:col-span-1">
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-3">
                E-mail
              </label>
              <input
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg bg-white/5 border transition-all duration-200 outline-none ${
                  errors.email
                    ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/30'
                    : 'border-white/10 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30'
                } text-white placeholder:text-gray-500`}
              />
              {errors.email && <p className="text-red-400 text-sm mt-2">{errors.email}</p>}
            </div>

            {/* Celular */}
            <div className="md:col-span-1">
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-3">
                Celular
              </label>
              <input
                type="text"
                placeholder="(00) 00000-0000"
                value={formData.celular}
                onChange={(e) => handleCelularChange(e.target.value)}
                maxLength={15}
                className={`w-full px-4 py-3 rounded-lg bg-white/5 border transition-all duration-200 outline-none ${
                  errors.celular
                    ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/30'
                    : 'border-white/10 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30'
                } text-white placeholder:text-gray-500`}
              />
              {errors.celular && <p className="text-red-400 text-sm mt-2">{errors.celular}</p>}
            </div>

            {/* CPF/CNPJ */}
            <div className="md:col-span-1">
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-3">
                CPF / CNPJ
              </label>
              <input
                type="text"
                placeholder="000.000.000-00 ou 00.000.000/0001-00"
                value={formData.cpf_cnpj}
                onChange={(e) => handleCpfCnpjChange(e.target.value)}
                maxLength={18}
                className={`w-full px-4 py-3 rounded-lg bg-white/5 border transition-all duration-200 outline-none ${
                  errors.cpf_cnpj
                    ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/30'
                    : 'border-white/10 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30'
                } text-white placeholder:text-gray-500`}
              />
              {errors.cpf_cnpj && <p className="text-red-400 text-sm mt-2">{errors.cpf_cnpj}</p>}
            </div>

            {/* Cidade */}
            <div className="md:col-span-1">
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-3">
                Cidade
              </label>
              <input
                type="text"
                placeholder="Sua cidade"
                value={formData.cidade}
                onChange={(e) => handleChange('cidade', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg bg-white/5 border transition-all duration-200 outline-none ${
                  errors.cidade
                    ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/30'
                    : 'border-white/10 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30'
                } text-white placeholder:text-gray-500`}
              />
              {errors.cidade && <p className="text-red-400 text-sm mt-2">{errors.cidade}</p>}
            </div>

            {/* Estado */}
            <div className="md:col-span-1">
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-3">
                Estado
              </label>
              <select
                value={formData.estado}
                onChange={(e) => handleChange('estado', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border appearance-none cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 ${
                  errors.estado
                    ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50'
                    : 'border-white/10 focus:ring-cyan-400/50 focus:border-cyan-400/50'
                } text-white`}
                style={{
                  backgroundColor: '#1a1a2e',
                  color: '#ffffff',
                  colorScheme: 'dark',
                }}
              >
                <option value="" style={{ backgroundColor: '#1a1a2e', color: '#ffffff' }}>
                  Selecione um estado
                </option>
                {ESTADOS.map((est) => (
                  <option key={est.sigla} value={est.sigla} style={{ backgroundColor: '#1a1a2e', color: '#ffffff' }}>
                    {est.sigla} — {est.nome}
                  </option>
                ))}
              </select>
              {errors.estado && <p className="text-red-400 text-sm mt-2">{errors.estado}</p>}
            </div>

            {/* Serviço */}
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-3">
                Serviço de Interesse
              </label>
              <select
                value={formData.servico_interesse}
                onChange={(e) => handleChange('servico_interesse', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border appearance-none cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 ${
                  errors.servico_interesse
                    ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50'
                    : 'border-white/10 focus:ring-cyan-400/50 focus:border-cyan-400/50'
                } text-white`}
                style={{
                  backgroundColor: '#1a1a2e',
                  color: '#ffffff',
                  colorScheme: 'dark',
                }}
              >
                <option value="" style={{ backgroundColor: '#1a1a2e', color: '#ffffff' }}>
                  Selecione um serviço
                </option>
                {SERVICOS.map((srv) => (
                  <option key={srv} value={srv} style={{ backgroundColor: '#1a1a2e', color: '#ffffff' }}>
                    {srv}
                  </option>
                ))}
              </select>
              {errors.servico_interesse && (
                <p className="text-red-400 text-sm mt-2">{errors.servico_interesse}</p>
              )}
            </div>
          </div>

          {/* Message Type Selection */}
          <div className="border-t border-white/10 pt-8">
            <h3 className="text-lg font-bold text-white mb-6">Como prefere iniciar a conversa?</h3>

            <div className="grid md:grid-cols-2 gap-4 md:col-span-2">
              {/* Automática */}
              <button
                type="button"
                onClick={() => setTipoMensagem('automatica')}
                className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                  tipoMensagem === 'automatica'
                    ? 'border-cyan-400/50 bg-cyan-400/10 ring-1 ring-cyan-400/30'
                    : 'border-white/10 bg-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  <span className="font-semibold text-white">Usar mensagem automática</span>
                </div>
                <p className="text-sm text-gray-400">Rápido e objetivo</p>
              </button>

              {/* Personalizada */}
              <button
                type="button"
                onClick={() => setTipoMensagem('personalizada')}
                className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                  tipoMensagem === 'personalizada'
                    ? 'border-cyan-400/50 bg-cyan-400/10 ring-1 ring-cyan-400/30'
                    : 'border-white/10 bg-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Edit3 className="w-5 h-5 text-cyan-400" />
                  <span className="font-semibold text-white">Escrever minha mensagem</span>
                </div>
                <p className="text-sm text-gray-400">Prefiro explicar minha situação</p>
              </button>
            </div>

            {/* Textarea para mensagem personalizada */}
            {tipoMensagem === 'personalizada' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6"
              >
                <div className="relative">
                  <textarea
                    placeholder="Olá Eduardo! Gostaria de saber mais sobre... (escreva o que quiser, como preferir)"
                    value={formData.mensagem_personalizada}
                    onChange={(e) => handleChange('mensagem_personalizada', e.target.value)}
                    maxLength={500}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border transition-all duration-200 outline-none resize-none ${
                      errors.mensagem_personalizada
                        ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/30'
                        : 'border-white/10 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30'
                    } text-white placeholder:text-gray-500`}
                  />
                  <div className="absolute bottom-3 right-3 text-xs text-gray-500">
                    {formData.mensagem_personalizada.length}/500
                  </div>
                </div>
                {errors.mensagem_personalizada && (
                  <p className="text-red-400 text-sm mt-2">{errors.mensagem_personalizada}</p>
                )}
              </motion.div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading || showSuccess}
            className="w-full md:w-auto md:ml-auto block px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-[#07090e] font-semibold hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed glow-cyan-sm flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                Enviar e Falar no WhatsApp
                <span>→</span>
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
