export interface MessageData {
  nome: string;
  cidade: string;
  estado: string;
  servico_interesse: string;
}

const WHATSAPP_PHONE = '55996348863';

export function gerarMensagemAutomatica(data: MessageData): string {
  return `Olá Eduardo! Vim pelo site e tenho interesse em ${data.servico_interesse}. Meu nome é ${data.nome}, de ${data.cidade}/${data.estado}. Pode me passar mais informações?`;
}

export function redirecionarWhatsApp(mensagem: string): void {
  const mensagemCodificada = encodeURIComponent(mensagem);
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${mensagemCodificada}`;
  window.open(url, '_blank');
}
