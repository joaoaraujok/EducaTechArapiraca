import { FormLinksConfig } from '../types/event';

/**
 * Configuração centralizada dos links externos dos formulários (Google Forms).
 *
 * Para ativar um botão de inscrição, substitua a string vazia "" pela URL
 * oficial do Google Forms correspondente (ex.: "https://forms.gle/...").
 * Enquanto permanecer vazio, a interface exibirá de forma transparente que o
 * link configurável será disponibilizado em breve.
 */
export const formLinksConfig: FormLinksConfig = {
  schoolRegistrationUrl: '',
  teamRegistrationUrls: {
    'nivel-1': '',
    'nivel-2': '',
    'nivel-3': '',
    'nivel-4': '',
  },
};
