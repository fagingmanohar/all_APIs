import { API, Category } from './types';

export const categories: Category[] = [
  {
    name: 'Authentication',
    icon: 'Key',
    description: 'User authentication and authorization services'
  },
  {
    name: 'Payment',
    icon: 'CreditCard',
    description: 'Payment processing and financial services'
  },
  {
    name: 'Storage',
    icon: 'Database',
    description: 'Data storage and cloud services'
  },
  {
    name: 'Communication',
    icon: 'MessageCircle',
    description: 'Messaging and communication services'
  },
  {
    name: 'AI & ML',
    icon: 'Brain',
    description: 'Artificial Intelligence and Machine Learning APIs'
  }
];

export const apis: API[] = [
  {
    id: '1',
    name: 'Supabase',
    description: 'Open source Firebase alternative with authentication, database, and storage',
    category: 'Authentication',
    pricing: 'Freemium',
    url: 'https://supabase.com',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=300',
    tags: ['Database', 'Auth', 'Storage'],
    country: 'USA',
    type: 'REST'
  },
  {
    id: '2',
    name: 'Stripe',
    description: 'Payment processing platform for internet businesses',
    category: 'Payment',
    pricing: 'Paid',
    url: 'https://stripe.com',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=300',
    tags: ['Payments', 'Finance'],
    country: 'USA',
    type: 'REST'
  },
  {
    id: '3',
    name: 'OpenAI',
    description: 'Advanced AI models for natural language processing and more',
    category: 'AI & ML',
    pricing: 'Paid',
    url: 'https://openai.com',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=300',
    tags: ['AI', 'Machine Learning'],
    country: 'USA',
    type: 'REST'
  },
  {
    id: '4',
    name: 'Auth0',
    description: 'Secure authentication and authorization platform',
    category: 'Authentication',
    pricing: 'Freemium',
    url: 'https://auth0.com',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-bf19f8fd1085?auto=format&fit=crop&q=80&w=300',
    tags: ['Auth', 'Security', 'SSO'],
    country: 'Argentina',
    type: 'REST'
  },
  {
    id: '5',
    name: 'AWS S3',
    description: 'Scalable object storage service',
    category: 'Storage',
    pricing: 'Paid',
    url: 'https://aws.amazon.com/s3',
    imageUrl: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?auto=format&fit=crop&q=80&w=300',
    tags: ['Cloud', 'Storage', 'AWS'],
    country: 'USA',
    type: 'REST'
  },
  {
    id: '6',
    name: 'Twilio',
    description: 'Cloud communications platform for SMS, voice, and messaging',
    category: 'Communication',
    pricing: 'Paid',
    url: 'https://twilio.com',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=300',
    tags: ['SMS', 'Voice', 'Messaging'],
    country: 'USA',
    type: 'REST'
  },
  {
    id: '7',
    name: 'PayPal',
    description: 'Online payment system for digital payments',
    category: 'Payment',
    pricing: 'Paid',
    url: 'https://paypal.com',
    imageUrl: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80&w=300',
    tags: ['Payments', 'Finance', 'E-commerce'],
    country: 'USA',
    type: 'REST'
  },
  {
    id: '8',
    name: 'Google Cloud Storage',
    description: 'Enterprise object storage solution',
    category: 'Storage',
    pricing: 'Paid',
    url: 'https://cloud.google.com/storage',
    imageUrl: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&q=80&w=300',
    tags: ['Cloud', 'Storage', 'Google'],
    country: 'USA',
    type: 'REST'
  },
  {
    id: '9',
    name: 'Hugging Face',
    description: 'State of the art machine learning models platform',
    category: 'AI & ML',
    pricing: 'Freemium',
    url: 'https://huggingface.co',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=300',
    tags: ['AI', 'Machine Learning', 'NLP'],
    country: 'France',
    type: 'REST'
  },
  {
    id: '10',
    name: 'SendGrid',
    description: 'Email delivery platform for marketing',
    category: 'Communication',
    pricing: 'Freemium',
    url: 'https://sendgrid.com',
    imageUrl: 'https://images.unsplash.com/photo-1526554850534-7c78330d5f90?auto=format&fit=crop&q=80&w=300',
    tags: ['Email', 'Marketing', 'Communication'],
    country: 'USA',
    type: 'REST'
  },
  {
    id: '11',
    name: 'GitHub GraphQL API',
    description: 'API for GitHub services integration',
    category: 'Storage',
    pricing: 'Free',
    url: 'https://docs.github.com/en/graphql',
    imageUrl: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=300',
    tags: ['Version Control', 'Developer Tools'],
    country: 'USA',
    type: 'GraphQL'
  },
  {
    id: '12',
    name: 'Pusher',
    description: 'Real-time communication infrastructure',
    category: 'Communication',
    pricing: 'Freemium',
    url: 'https://pusher.com',
    imageUrl: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=300',
    tags: ['Real-time', 'WebSocket', 'Messaging'],
    country: 'UK',
    type: 'WebSocket'
  },
  {
    id: '13',
    name: 'Adyen',
    description: 'Global payment platform for enterprises',
    category: 'Payment',
    pricing: 'Paid',
    url: 'https://www.adyen.com',
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=300',
    tags: ['Payments', 'Finance', 'Enterprise'],
    country: 'Netherlands',
    type: 'REST'
  },
  {
    id: '14',
    name: 'Azure Cognitive Services',
    description: 'AI services for vision, speech, and language',
    category: 'AI & ML',
    pricing: 'Paid',
    url: 'https://azure.microsoft.com/services/cognitive-services',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=300',
    tags: ['AI', 'Machine Learning', 'Cloud'],
    country: 'USA',
    type: 'REST'
  },
  {
    id: '15',
    name: 'Firebase Authentication',
    description: 'Easy-to-use authentication service',
    category: 'Authentication',
    pricing: 'Freemium',
    url: 'https://firebase.google.com/products/auth',
    imageUrl: 'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?auto=format&fit=crop&q=80&w=300',
    tags: ['Auth', 'Google', 'Mobile'],
    country: 'USA',
    type: 'REST'
  },
  {
    id: '16',
    name: 'Mercado Pago',
    description: 'Latin American payment processing platform',
    category: 'Payment',
    pricing: 'Paid',
    url: 'https://www.mercadopago.com',
    imageUrl: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=300',
    tags: ['Payments', 'Finance', 'Latin America'],
    country: 'Brazil',
    type: 'REST'
  },
  {
    id: '17',
    name: 'WeChat Pay API',
    description: 'Chinese mobile payment service',
    category: 'Payment',
    pricing: 'Paid',
    url: 'https://pay.weixin.qq.com',
    imageUrl: 'https://images.unsplash.com/photo-1556742208-999815fca738?auto=format&fit=crop&q=80&w=300',
    tags: ['Payments', 'Mobile', 'China'],
    country: 'China',
    type: 'REST'
  },
  {
    id: '18',
    name: 'LINE Messaging API',
    description: 'Messaging platform popular in Asia',
    category: 'Communication',
    pricing: 'Freemium',
    url: 'https://developers.line.biz',
    imageUrl: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=300',
    tags: ['Messaging', 'Chat', 'Asia'],
    country: 'Japan',
    type: 'REST'
  },
  {
    id: '19',
    name: 'Yandex.Cloud',
    description: 'Russian cloud computing platform',
    category: 'Storage',
    pricing: 'Paid',
    url: 'https://cloud.yandex.com',
    imageUrl: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?auto=format&fit=crop&q=80&w=300',
    tags: ['Cloud', 'Storage', 'Russia'],
    country: 'Russia',
    type: 'REST'
  },
  {
    id: '20',
    name: 'Paytm API',
    description: 'Indian digital payment platform',
    category: 'Payment',
    pricing: 'Paid',
    url: 'https://paytm.com',
    imageUrl: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80&w=300',
    tags: ['Payments', 'Digital Wallet', 'India'],
    country: 'India',
    type: 'REST'
  },
  {
    id: '21',
    name: 'Alibaba Cloud',
    description: 'Chinese cloud computing services',
    category: 'Storage',
    pricing: 'Paid',
    url: 'https://www.alibabacloud.com',
    imageUrl: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?auto=format&fit=crop&q=80&w=300',
    tags: ['Cloud', 'Storage', 'China'],
    country: 'China',
    type: 'REST'
  },
  {
    id: '22',
    name: 'Africa\'s Talking',
    description: 'Pan-African communication APIs',
    category: 'Communication',
    pricing: 'Paid',
    url: 'https://africastalking.com',
    imageUrl: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=300',
    tags: ['SMS', 'Voice', 'Africa'],
    country: 'Kenya',
    type: 'REST'
  },
  {
    id: '23',
    name: 'Klarna API',
    description: 'Swedish payment and banking platform',
    category: 'Payment',
    pricing: 'Paid',
    url: 'https://www.klarna.com',
    imageUrl: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80&w=300',
    tags: ['Payments', 'Banking', 'Europe'],
    country: 'Sweden',
    type: 'REST'
  },
  {
    id: '24',
    name: 'Kakao API',
    description: 'South Korean social platform APIs',
    category: 'Communication',
    pricing: 'Freemium',
    url: 'https://developers.kakao.com',
    imageUrl: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=300',
    tags: ['Social', 'Messaging', 'Korea'],
    country: 'South Korea',
    type: 'REST'
  },
  {
    id: '25',
    name: 'Wise API',
    description: 'International money transfer platform',
    category: 'Payment',
    pricing: 'Paid',
    url: 'https://wise.com',
    imageUrl: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80&w=300',
    tags: ['Payments', 'Transfer', 'International'],
    country: 'UK',
    type: 'REST'
  }
];