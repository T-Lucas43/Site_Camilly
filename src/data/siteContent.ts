import { FileText, HeartHandshake, Landmark, Scale } from 'lucide-react'

// Dados de contato centralizados para manutenção futura.
export const WHATSAPP_NUMBER = '559185701561'
export const WHATSAPP_DISPLAY = '(91) 8570-1561'
export const CONTACT_EMAIL = ''
export const OFFICE_ADDRESS = ''
export const INSTAGRAM_HANDLE = '@advcamillyoliveira'
export const INSTAGRAM_URL = 'https://www.instagram.com/advcamillyoliveira/'

export const navigation = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Áreas de atuação', href: '#atuacao' },
  { label: 'Atendimento', href: '#atendimento' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Contato', href: '#contato' },
]

export const practiceAreas = [
  {
    id: 'direito-de-familia',
    icon: HeartHandshake,
    number: '01',
    title: 'Direito de Família',
    description: 'Orientação jurídica em questões familiares, sempre com atendimento cuidadoso, responsável e humanizado.',
    detailTitle: 'Questões familiares pedem análise cuidadosa e orientação individual',
    detailDescription: 'Demandas familiares envolvem relações pessoais, direitos e deveres que precisam ser compreendidos dentro do contexto de cada pessoa. A orientação jurídica ajuda a esclarecer possibilidades, documentos necessários e caminhos adequados, sempre com discrição e responsabilidade.',
    guidance: ['Compreensão do contexto familiar', 'Análise das informações e documentos', 'Orientação clara sobre os próximos passos'],
  },
  {
    id: 'direito-civil',
    icon: Landmark,
    number: '02',
    title: 'Direito Civil',
    description: 'Atuação preventiva e contenciosa em relações civis, obrigações, responsabilidade civil e proteção de direitos.',
    detailTitle: 'Segurança para compreender relações, obrigações e direitos',
    detailDescription: 'Questões civis podem surgir em relações cotidianas, obrigações assumidas, situações de responsabilidade e proteção de direitos. A análise jurídica considera os fatos e os documentos disponíveis para apresentar orientações compatíveis com a realidade do caso.',
    guidance: ['Leitura responsável da situação apresentada', 'Esclarecimento de direitos e obrigações', 'Avaliação das medidas juridicamente adequadas'],
  },
  {
    id: 'contratos-consultoria',
    icon: FileText,
    number: '03',
    title: 'Contratos e consultoria',
    description: 'Elaboração, análise e revisão de contratos, com foco em clareza, prevenção de riscos e segurança jurídica.',
    detailTitle: 'Clareza contratual para decisões mais conscientes',
    detailDescription: 'A leitura jurídica de um contrato contribui para identificar direitos, deveres, condições e riscos antes ou durante uma relação contratual. Cada documento deve ser avaliado de acordo com sua finalidade e com as circunstâncias das partes envolvidas.',
    guidance: ['Leitura e compreensão das cláusulas', 'Identificação de direitos, deveres e riscos', 'Orientação preventiva e individualizada'],
  },
]

export const serviceSteps = [
  { number: '01', title: 'Primeiro contato', description: 'Você apresenta, de forma inicial, a situação que precisa de orientação.' },
  { number: '02', title: 'Entendimento da situação', description: 'O contexto e os documentos disponíveis são analisados com atenção.' },
  { number: '03', title: 'Orientação jurídica', description: 'As possibilidades jurídicas são explicadas de maneira clara e responsável.' },
  { number: '04', title: 'Próximos passos', description: 'A estratégia adequada é definida em conjunto, respeitando as particularidades do caso.' },
]

export const differentials = [
  { icon: HeartHandshake, title: 'Atendimento individualizado', text: 'Cada situação é recebida com atenção e tratada a partir de suas particularidades.' },
  { icon: FileText, title: 'Comunicação clara', text: 'Orientações objetivas para que você compreenda cada etapa e decisão.' },
  { icon: Scale, title: 'Responsabilidade e ética', text: 'Uma atuação séria, discreta e comprometida com os princípios da advocacia.' },
  { icon: Landmark, title: 'Análise cuidadosa', text: 'Estudo atento das informações e documentos antes da definição dos próximos passos.' },
]

export const faqs = [
  {
    question: 'Como posso agendar um atendimento?',
    answer: 'O primeiro contato pode ser feito pelo WhatsApp ou pelo formulário deste site. As informações sobre disponibilidade serão confirmadas durante a conversa.',
  },
  {
    question: 'O atendimento pode ser realizado on-line?',
    answer: 'A modalidade de atendimento adequada será informada no primeiro contato, considerando a necessidade apresentada e a disponibilidade profissional.',
  },
  {
    question: 'Quais documentos devo apresentar?',
    answer: 'Os documentos necessários variam conforme cada situação. Após uma breve contextualização, você receberá uma orientação objetiva sobre o que deverá reunir.',
  },
  {
    question: 'Como funciona a primeira conversa?',
    answer: 'A primeira conversa serve para compreender a situação inicial e explicar como o atendimento poderá prosseguir. Evite enviar informações sensíveis antes da confirmação.',
  },
]
