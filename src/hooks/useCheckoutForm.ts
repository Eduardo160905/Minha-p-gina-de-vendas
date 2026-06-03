import { useState, useCallback } from 'react';

export interface FormData {
  nome: string;
  email: string;
  celular: string;
  cpf_cnpj: string;
  cidade: string;
  estado: string;
  servico_interesse: string;
  mensagem_personalizada: string;
}

export interface FormErrors {
  nome?: string;
  email?: string;
  celular?: string;
  cpf_cnpj?: string;
  cidade?: string;
  estado?: string;
  servico_interesse?: string;
  mensagem_personalizada?: string;
}

export type TipoMensagem = 'automatica' | 'personalizada';

export function useCheckoutForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    celular: '',
    cpf_cnpj: '',
    cidade: '',
    estado: '',
    servico_interesse: '',
    mensagem_personalizada: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [tipoMensagem, setTipoMensagem] = useState<TipoMensagem>('automatica');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = useCallback((field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }, [errors]);

  const formatarCelular = useCallback((value: string): string => {
    const numeros = value.replace(/\D/g, '');
    if (numeros.length <= 11) {
      return numeros
        .replace(/(\d{0})(\d)/, '$1')
        .replace(/(\d{2})(\d)/, '($1) ')
        .replace(/(\d{4,5})(\d{4})$/, '$1-$2');
    }
    return numeros.slice(0, 11).replace(/(\d{2})(\d)/, '($1) ').replace(/(\d{4,5})(\d{4})$/, '$1-$2');
  }, []);

  const formatarCpfCnpj = useCallback((value: string): string => {
    const numeros = value.replace(/\D/g, '');

    if (numeros.length <= 11) {
      return numeros
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }

    return numeros
      .slice(0, 14)
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d{1,2})$/, '$1-$2');
  }, []);

  const handleCelularChange = useCallback(
    (value: string) => {
      handleChange('celular', formatarCelular(value));
    },
    [handleChange, formatarCelular]
  );

  const handleCpfCnpjChange = useCallback(
    (value: string) => {
      handleChange('cpf_cnpj', formatarCpfCnpj(value));
    },
    [handleChange, formatarCpfCnpj]
  );

  const validarEmail = useCallback((email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }, []);

  const validarCpfCnpj = useCallback((valor: string): boolean => {
    const numeros = valor.replace(/\D/g, '');
    return numeros.length === 11 || numeros.length === 14;
  }, []);

  const validarCelular = useCallback((valor: string): boolean => {
    const numeros = valor.replace(/\D/g, '');
    return numeros.length === 11;
  }, []);

  const validar = useCallback((): boolean => {
    const novoErros: FormErrors = {};

    if (!formData.nome.trim()) {
      novoErros.nome = 'Nome é obrigatório';
    } else if (formData.nome.trim().length < 3) {
      novoErros.nome = 'Nome deve ter no mínimo 3 caracteres';
    }

    if (!formData.email.trim()) {
      novoErros.email = 'E-mail é obrigatório';
    } else if (!validarEmail(formData.email)) {
      novoErros.email = 'E-mail inválido';
    }

    if (!formData.celular.trim()) {
      novoErros.celular = 'Celular é obrigatório';
    } else if (!validarCelular(formData.celular)) {
      novoErros.celular = 'Celular deve ter 11 dígitos';
    }

    if (!formData.cpf_cnpj.trim()) {
      novoErros.cpf_cnpj = 'CPF ou CNPJ é obrigatório';
    } else if (!validarCpfCnpj(formData.cpf_cnpj)) {
      novoErros.cpf_cnpj = 'CPF ou CNPJ inválido';
    }

    if (!formData.cidade.trim()) {
      novoErros.cidade = 'Cidade é obrigatória';
    }

    if (!formData.estado) {
      novoErros.estado = 'Estado é obrigatório';
    }

    if (!formData.servico_interesse) {
      novoErros.servico_interesse = 'Selecione um serviço';
    }

    if (tipoMensagem === 'personalizada') {
      if (!formData.mensagem_personalizada.trim()) {
        novoErros.mensagem_personalizada = 'Mensagem é obrigatória';
      } else if (formData.mensagem_personalizada.trim().length < 20) {
        novoErros.mensagem_personalizada = 'Mensagem deve ter no mínimo 20 caracteres';
      } else if (formData.mensagem_personalizada.length > 500) {
        novoErros.mensagem_personalizada = 'Mensagem não pode exceder 500 caracteres';
      }
    }

    setErrors(novoErros);
    return Object.keys(novoErros).length === 0;
  }, [formData, tipoMensagem, validarEmail, validarCpfCnpj, validarCelular]);

  const resetForm = useCallback(() => {
    setFormData({
      nome: '',
      email: '',
      celular: '',
      cpf_cnpj: '',
      cidade: '',
      estado: '',
      servico_interesse: '',
      mensagem_personalizada: '',
    });
    setErrors({});
    setTipoMensagem('automatica');
    setShowSuccess(false);
  }, []);

  return {
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
  };
}
