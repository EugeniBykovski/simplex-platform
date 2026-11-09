import type { GlyphName } from "@/components/ui/icon";
import type { WorkSlug } from "@/config/routes";
import type { Locale } from "@/i18n/routing";

/**
 * The eight real projects the founder approved for the portfolio (SF-157), replacing the design's
 * fictional cases. Every statement was checked read-only against each project's own repository:
 * "built" lists what the code implements, "next" what it plans or only partly implements. No
 * launch, user, store, revenue or outcome claim is made, because none is verified. Sources and
 * limits are in docs/content/portfolio-attribution-register.md.
 */
export type ProjectPlatform = "ios" | "android" | "web" | "backend";
export type ProjectCapability = "realtime" | "payments" | "ai" | "marketplace";
export type ProjectGround =
  "fintech" | "healthcare" | "ecommerce" | "saas" | "enterprise" | "logistics";

type Words = {
  category: string;
  tagline: string;
  summary: string;
  role: string;
  status: string;
  built: readonly string[];
  next: readonly string[];
  engineering: readonly string[];
  /** Attribution or scope that must be read with the project. */
  note?: string;
};

export type Project = {
  slug: WorkSlug;
  name: string;
  ground: ProjectGround;
  icon: GlyphName;
  platforms: readonly ProjectPlatform[];
  capabilities: readonly ProjectCapability[];
  stack: readonly string[];
  words: Record<Locale, Words>;
};

export const projects: readonly Project[] = [
  {
    slug: "simplefit-boxing",
    name: "SimpleFit Boxing",
    ground: "saas",
    icon: "teams",
    platforms: ["web", "ios", "android", "backend"],
    capabilities: ["realtime", "payments"],
    stack: [
      "Elixir",
      "Phoenix",
      "PostgreSQL",
      "Oban",
      "OpenAPI",
      "Next.js",
      "React",
      "Expo",
      "React Native",
      "Stripe",
    ],
    words: {
      en: {
        category: "Sports platform",
        tagline: "An operating system and professional network for boxing.",
        summary:
          "A platform connecting fighters, coaches and gyms, with a backend that owns all domain logic and web and mobile clients for each role. Gym, coaching and identity workflows are built in depth; the sponsor side is still being designed.",
        role: "Product design and full-stack engineering",
        status: "In development",
        built: [
          "Passwordless email, Google and Apple sign-in, with session refresh rotation and reuse detection",
          "Fighter and coach profiles with resumable onboarding",
          "Coach and fighter relationships, invitations and training sessions",
          "Multi-tenant gyms: locations, staff roles, members, class schedules, bookings and check-ins",
          "Gym billing on Stripe, tested in test mode",
          "Operator access with WebAuthn step-up, role-based permissions and an append-only audit log",
        ],
        next: [
          "Sponsor accounts and sponsor workflows",
          "Gym publication and the production operator setup",
          "Marketplace and payout features",
        ],
        engineering: [
          "An API-only modular monolith with the backend as the single authority, recorded in 28 architecture decision records",
          "Code-first OpenAPI with generated clients for web and mobile",
          "Background jobs on Oban, threat models and a secret-redaction contract",
        ],
      },
      ru: {
        category: "Спортивная платформа",
        tagline: "Операционная система и профессиональная сеть для бокса.",
        summary:
          "Платформа, которая связывает бойцов, тренеров и залы: вся бизнес-логика на бэкенде, веб- и мобильные клиенты для каждой роли. Процессы залов, тренировок и идентификации проработаны глубоко, сторона спонсоров пока проектируется.",
        role: "Продуктовый дизайн и full-stack-разработка",
        status: "В разработке",
        built: [
          "Вход без пароля по email, через Google и Apple, с ротацией и обнаружением повторного использования сессий",
          "Профили бойцов и тренеров с возобновляемым онбордингом",
          "Связи тренеров и бойцов, приглашения и тренировки",
          "Залы с изоляцией данных: локации, роли персонала, участники, расписание, бронирования и отметки",
          "Оплата для залов на Stripe, проверенная в тестовом режиме",
          "Доступ операторов с дополнительной проверкой WebAuthn, ролями и неизменяемым журналом аудита",
        ],
        next: [
          "Аккаунты и процессы спонсоров",
          "Публикация залов и запуск операторской панели в продакшене",
          "Маркетплейс и выплаты",
        ],
        engineering: [
          "Модульный монолит только с API, где бэкенд единственный источник истины; 28 архитектурных решений записаны",
          "OpenAPI из кода и сгенерированные клиенты для веба и мобильных приложений",
          "Фоновые задачи на Oban, модели угроз и правила скрытия секретов",
        ],
      },
    },
  },
  {
    slug: "financialpress",
    name: "FinancialPress",
    ground: "fintech",
    icon: "fintech",
    platforms: ["web", "backend"],
    capabilities: ["realtime", "ai"],
    stack: [
      "Elixir",
      "Phoenix",
      "PostgreSQL",
      "RabbitMQ",
      "OpenAPI",
      "Next.js",
      "React",
      "TypeScript",
      "Anthropic API",
    ],
    words: {
      en: {
        category: "Financial media platform",
        tagline: "Financial publishing, market data and prediction markets.",
        summary:
          "A financial media platform where a server-computed reputation score shapes how posts rank and how visible they are. Around it: publishing, market data, prediction-market discussion and an AI research assistant.",
        role: "Engineering leadership and product development engagement",
        status: "Pre-beta",
        built: [
          "A reputation-score engine with projections, bands and a gated recalculation process",
          "Publishing with autosaved drafts, atomic publishing and chart and video attachments",
          "Prediction-market discovery and discussion, with chart publishing",
          "Market data with a staged fallback pipeline and explicit data states",
          "An AI research assistant with streamed answers and per-user quotas",
          "Charting, including an integration of TradingView's licensed Advanced Charts library",
          "Admin tools for moderation, score overrides and an audit log",
        ],
        next: ["Notifications", "Beta hardening, including health and readiness checks"],
        engineering: [
          "A modular monolith: one Elixir and Phoenix API and one Next.js front end, joined by a generated OpenAPI contract",
          "All trust and ranking logic on the server; the client never computes a score",
          "Code-verified architecture documentation and test suites on both sides",
        ],
        note: "FinancialPress is a product of FinPress Communications Inc., which owns the platform and its brand. This page describes engineering work on it and implies no endorsement.",
      },
      ru: {
        category: "Финансовая медиаплатформа",
        tagline: "Финансовые публикации, рыночные данные и рынки прогнозов.",
        summary:
          "Финансовая медиаплатформа, где рейтинг репутации, рассчитываемый на сервере, определяет ранжирование и видимость публикаций. Вокруг него: публикации, рыночные данные, обсуждение рынков прогнозов и ИИ-ассистент для исследований.",
        role: "Инженерное руководство и разработка продукта",
        status: "До бета-версии",
        built: [
          "Движок рейтинга репутации с проекциями, уровнями и контролируемым пересчётом",
          "Публикации с автосохранением черновиков, атомарной публикацией и вложениями графиков и видео",
          "Поиск и обсуждение рынков прогнозов с публикацией графиков",
          "Рыночные данные с поэтапным резервным конвейером и явными состояниями данных",
          "ИИ-ассистент для исследований с потоковыми ответами и лимитами на пользователя",
          "Графики, включая интеграцию лицензированной библиотеки TradingView Advanced Charts",
          "Админ-инструменты для модерации, корректировки рейтинга и журнала аудита",
        ],
        next: ["Уведомления", "Подготовка к бета-версии, включая проверки работоспособности"],
        engineering: [
          "Модульный монолит: один API на Elixir и Phoenix и один фронтенд на Next.js, связанные сгенерированным контрактом OpenAPI",
          "Вся логика доверия и ранжирования на сервере, клиент рейтинг не вычисляет",
          "Проверенная по коду архитектурная документация и тесты с обеих сторон",
        ],
        note: "FinancialPress - продукт компании FinPress Communications Inc., которой принадлежат платформа и бренд. Здесь описана инженерная работа над ней, без какой-либо рекомендации с её стороны.",
      },
    },
  },
  {
    slug: "hobworks",
    name: "Hobworks",
    ground: "enterprise",
    icon: "teams",
    platforms: ["ios", "android", "web", "backend"],
    capabilities: ["realtime", "payments", "marketplace"],
    stack: [
      "NestJS",
      "Nx",
      "NATS",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Socket.IO",
      "Stripe",
      "Expo",
      "React Native",
      "Next.js",
    ],
    words: {
      en: {
        category: "Professional networking",
        tagline: "Professional networking, talent discovery and matching.",
        summary:
          "A mobile networking and job-marketplace app for candidates, employers and companies, combining a social feed, swipe-style discovery with mutual matching, chat and vacancies. SimpleX built the MVP backend and mobile app.",
        role: "MVP backend and mobile app development",
        status: "MVP in development",
        built: [
          "Nine NestJS services behind an API gateway, communicating over NATS",
          "Email, Google and SMS sign-in with two-factor authentication and Redis sessions",
          "Rule-based match scoring with explained reasons",
          "Real-time chat on a Socket.IO gateway",
          "A social feed model with seven post types",
          "Stripe checkout with tiered plans",
        ],
        next: [
          "File storage and push delivery",
          "Search and an admin service",
          "Mobile chat, feed posting and payments screens",
        ],
        engineering: [
          "An Nx monorepo with shared database and utility libraries",
          "An API gateway in front of message-driven services",
          "A typed client generated from the OpenAPI specification",
        ],
      },
      ru: {
        category: "Профессиональная сеть",
        tagline: "Профессиональная сеть, поиск талантов и подбор.",
        summary:
          "Мобильное приложение для профессиональных знакомств и вакансий для кандидатов, работодателей и компаний: лента, поиск со свайпами и взаимным совпадением, чат и вакансии. SimpleX разработала бэкенд и мобильное приложение MVP.",
        role: "Разработка бэкенда и мобильного приложения MVP",
        status: "MVP в разработке",
        built: [
          "Девять сервисов на NestJS за API-шлюзом, обмен через NATS",
          "Вход по email, через Google и SMS с двухфакторной аутентификацией и сессиями в Redis",
          "Подбор по правилам с объяснением причин совпадения",
          "Чат в реальном времени на Socket.IO",
          "Модель ленты с семью типами публикаций",
          "Оплата через Stripe с тарифами",
        ],
        next: [
          "Хранение файлов и push-уведомления",
          "Поиск и админ-сервис",
          "Экраны чата, публикаций и оплаты в мобильном приложении",
        ],
        engineering: [
          "Монорепозиторий на Nx с общими библиотеками базы данных и утилит",
          "API-шлюз перед сервисами, работающими через сообщения",
          "Типизированный клиент, сгенерированный из спецификации OpenAPI",
        ],
      },
    },
  },
  {
    slug: "simple-house",
    name: "Simple House",
    ground: "enterprise",
    icon: "building",
    platforms: ["web", "backend"],
    capabilities: ["realtime", "payments", "ai"],
    stack: [
      "NestJS",
      "Nx",
      "NATS",
      "RabbitMQ",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Socket.IO",
      "Next.js",
      "Stripe",
      "Gemini API",
    ],
    words: {
      en: {
        category: "PropTech",
        tagline: "A platform for residential communities and resident services.",
        summary:
          "A web platform for residential buildings and the people who live in them. Residents and owners create spaces for a house, entrance, floor or apartment, invite members with roles, and get chat, polls, a calendar, parking and pets inside each space.",
        role: "Product design and full-stack engineering",
        status: "In development",
        built: [
          "Spaces that model a building's structure, with invitations and roles",
          "Sign-in with Google, two-step verification and Redis sessions",
          "Real-time chat, polls and voting",
          "A calendar, parking spaces and rentals, and a pet registry",
          "Document checks with Gemini, extracting details from property documents",
          "Stripe checkout and subscriptions",
        ],
        next: [
          "Maintenance requests and utilities",
          "Document storage and e-signing",
          "Mobile apps",
        ],
        engineering: [
          "An API gateway in front of 16 services, with NATS requests and RabbitMQ events",
          "One shared data model of about 60 entities",
          "A front end consolidated from many micro-frontends into one Next.js app",
        ],
      },
      ru: {
        category: "PropTech",
        tagline: "Платформа для жилых сообществ и сервисов для жителей.",
        summary:
          "Веб-платформа для жилых домов и их жителей. Жители и собственники создают пространства для дома, подъезда, этажа или квартиры, приглашают участников с ролями и получают внутри чат, опросы, календарь, парковку и раздел о питомцах.",
        role: "Продуктовый дизайн и full-stack-разработка",
        status: "В разработке",
        built: [
          "Пространства, повторяющие структуру дома, с приглашениями и ролями",
          "Вход через Google, двухэтапная проверка и сессии в Redis",
          "Чат в реальном времени, опросы и голосования",
          "Календарь, парковочные места и их аренда, реестр питомцев",
          "Проверка документов с Gemini: извлечение данных из документов на недвижимость",
          "Оплата и подписки через Stripe",
        ],
        next: [
          "Заявки на обслуживание и коммунальные услуги",
          "Хранение документов и электронная подпись",
          "Мобильные приложения",
        ],
        engineering: [
          "API-шлюз перед 16 сервисами: запросы через NATS, события через RabbitMQ",
          "Единая модель данных примерно из 60 сущностей",
          "Фронтенд, объединённый из множества микрофронтендов в одно приложение на Next.js",
        ],
      },
    },
  },
  {
    slug: "simple-market",
    name: "Simple Market",
    ground: "ecommerce",
    icon: "commerce",
    platforms: ["web", "backend"],
    capabilities: ["marketplace"],
    stack: [
      "NestJS",
      "Nx",
      "RabbitMQ",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Next.js",
      "React",
      "TypeScript",
      "Docker",
    ],
    words: {
      en: {
        category: "B2B marketplace",
        tagline: "Supplier catalogs and wholesale ordering between businesses.",
        summary:
          "A web marketplace for wholesale buying between businesses. Suppliers publish catalogs and import them in bulk; buyers follow suppliers, get alerts on price and stock changes, and place one order that splits per supplier.",
        role: "Product design and full-stack engineering",
        status: "In development",
        built: [
          "Google sign-in with buyer and supplier roles and supplier company profiles",
          "Supplier catalogs with bulk import from XLSX, CSV and JSON, with import history",
          "Supplier subscriptions with price-drop, price-range and stock alerts",
          "A cart and checkout that create one order split into per-supplier orders",
          "Order management and status updates for suppliers",
          "Saved items, reservations and in-app notifications",
        ],
        next: [
          "Quotes, approvals and returns",
          "Contracts, pricing rules and supplier analytics",
          "Integrations and API keys",
        ],
        engineering: [
          "An API gateway calling four services over RabbitMQ, with shared message contracts",
          "A database per service, and correlation IDs carried through structured logs",
          "Multi-stage Docker builds and CI for lint, format checks and unit tests",
        ],
      },
      ru: {
        category: "B2B-маркетплейс",
        tagline: "Каталоги поставщиков и оптовые заказы между компаниями.",
        summary:
          "Веб-маркетплейс для оптовых закупок между компаниями. Поставщики публикуют каталоги и загружают их массово, покупатели подписываются на поставщиков, получают уведомления об изменении цен и остатков и оформляют один заказ, который делится по поставщикам.",
        role: "Продуктовый дизайн и full-stack-разработка",
        status: "В разработке",
        built: [
          "Вход через Google с ролями покупателя и поставщика и профилями компаний",
          "Каталоги поставщиков с массовым импортом из XLSX, CSV и JSON и историей загрузок",
          "Подписки на поставщиков с уведомлениями о снижении цены, ценовом диапазоне и остатках",
          "Корзина и оформление, создающие один заказ с разделением по поставщикам",
          "Управление заказами и статусами для поставщиков",
          "Избранное, резервирование товаров и уведомления в приложении",
        ],
        next: [
          "Запросы цен, согласования и возвраты",
          "Договоры, правила ценообразования и аналитика поставщиков",
          "Интеграции и ключи API",
        ],
        engineering: [
          "API-шлюз, вызывающий четыре сервиса через RabbitMQ, с общими контрактами сообщений",
          "Отдельная база для каждого сервиса и идентификаторы корреляции в структурированных логах",
          "Многоэтапные сборки Docker и CI с линтингом, проверкой форматирования и юнит-тестами",
        ],
      },
    },
  },
  {
    slug: "deeply",
    name: "Deeply",
    ground: "healthcare",
    icon: "mobile",
    platforms: ["ios", "android", "web", "backend"],
    capabilities: ["payments"],
    stack: [
      "Expo",
      "React Native",
      "TypeScript",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "RevenueCat",
      "Next.js",
    ],
    words: {
      en: {
        category: "Mobile training app",
        tagline: "Breath-hold training for freedivers.",
        summary:
          "A mobile app for breathing, breath-hold and freediving training, with guided programs, a dive timer, progress tracking and an article library. It comes with its own backend and a marketing website.",
        role: "Product design and full-stack engineering",
        status: "In development",
        built: [
          "Guided training programs built from inhale, hold, exhale and rest phases, plus personal trainings",
          "A breath-hold and dive timer that restores an attempt after a crash",
          "Dive templates with depth profiles",
          "Results, streaks and achievements",
          "Sign in with Apple, with token rotation",
          "Subscriptions through RevenueCat, checked on the server",
          "English and Russian in both the app and the API",
        ],
        next: ["Further offline support beyond the timer"],
        engineering: [
          "A Turborepo with a shared database package",
          "A pure, unit-tested timer engine",
          "Entitlements checked on the server from subscription webhooks",
        ],
      },
      ru: {
        category: "Мобильное приложение для тренировок",
        tagline: "Тренировки задержки дыхания для фридайверов.",
        summary:
          "Мобильное приложение для дыхательных тренировок, задержки дыхания и фридайвинга: программы, таймер погружений, прогресс и библиотека статей. У него собственный бэкенд и сайт.",
        role: "Продуктовый дизайн и full-stack-разработка",
        status: "В разработке",
        built: [
          "Программы тренировок из фаз вдоха, задержки, выдоха и отдыха, а также личные тренировки",
          "Таймер задержки дыхания и погружений, восстанавливающий попытку после сбоя",
          "Шаблоны погружений с профилями глубины",
          "Результаты, серии и достижения",
          "Вход через Apple с ротацией токенов",
          "Подписки через RevenueCat с проверкой на сервере",
          "Английский и русский языки в приложении и API",
        ],
        next: ["Расширенная офлайн-поддержка помимо таймера"],
        engineering: [
          "Turborepo с общим пакетом базы данных",
          "Чистый движок таймера, покрытый юнит-тестами",
          "Права доступа проверяются на сервере по вебхукам подписок",
        ],
      },
    },
  },
  {
    slug: "wait",
    name: "Wait",
    ground: "logistics",
    icon: "pin",
    platforms: ["ios", "android", "web", "backend"],
    capabilities: ["realtime", "payments"],
    stack: [
      "Expo",
      "React Native",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Socket.IO",
      "Next.js",
      "Turborepo",
    ],
    words: {
      en: {
        category: "Mobility",
        tagline: "QR-based communication for vehicle owners.",
        summary:
          "A vehicle owner links a QR card to their car. Anyone who scans it, even without the app, can send a parking notification, and the owner can acknowledge, reply with an estimate, or block and report the sender.",
        role: "Product design and full-stack engineering",
        status: "In development",
        built: [
          "Scan-to-notify for app users and guests, with statuses and threaded replies",
          "Push notifications and a real-time socket gateway",
          "Sender blocking and abuse reports",
          "Phone sign-in with one-time codes",
          "QR box ordering, printable batches and activation tracking",
          "Online payment and yearly subscriptions with reminders",
          "A guest scan page on the web, so no install is needed to notify",
        ],
        next: ["Message-queue processing beyond logging", "Further payment providers"],
        engineering: [
          "A Turborepo with the API and the web app",
          "A mobile API client generated from the Swagger specification",
          "Universal and app links that open a scanned code in the app",
        ],
      },
      ru: {
        category: "Мобильность",
        tagline: "Связь с владельцами автомобилей через QR-код.",
        summary:
          "Владелец привязывает QR-карточку к автомобилю. Любой, кто её отсканирует, даже без приложения, может отправить уведомление о парковке, а владелец может подтвердить, ответить со временем или заблокировать отправителя и пожаловаться.",
        role: "Продуктовый дизайн и full-stack-разработка",
        status: "В разработке",
        built: [
          "Уведомления по сканированию для пользователей и гостей, со статусами и ответами",
          "Push-уведомления и шлюз реального времени",
          "Блокировка отправителей и жалобы",
          "Вход по номеру телефона с одноразовым кодом",
          "Заказ QR-боксов, печать партиями и отслеживание активации",
          "Онлайн-оплата и годовая подписка с напоминаниями",
          "Гостевая страница сканирования на сайте, без установки приложения",
        ],
        next: [
          "Обработка очереди сообщений сверх логирования",
          "Дополнительные платёжные провайдеры",
        ],
        engineering: [
          "Turborepo с API и веб-приложением",
          "Мобильный клиент API, сгенерированный из спецификации Swagger",
          "Универсальные ссылки, открывающие отсканированный код в приложении",
        ],
      },
    },
  },
  {
    slug: "anyway",
    name: "AnyWay",
    ground: "saas",
    icon: "pin",
    platforms: ["ios", "android", "web", "backend"],
    capabilities: ["ai"],
    stack: ["NestJS", "Drizzle ORM", "PostgreSQL", "OpenAPI", "Expo", "React Native", "Next.js"],
    words: {
      en: {
        category: "PetTech",
        tagline: "A travel companion for pets and their owners.",
        summary:
          "A mobile-first planner for travelling and relocating with pets: pet profiles, vaccination and document tracking, country and airline rules, trip checklists and travel packs. It is at an early stage.",
        role: "Product design and full-stack engineering",
        status: "Early stage",
        built: [
          "Sign-in with email, Google and Apple, with token rotation and rate limiting",
          "A data model for pets, documents, vaccinations, countries, airlines and travel rules",
          "An OpenAPI contract with generation, validation and drift checks",
          "The mobile app's screens for pets, trips, documents and tools",
          "A landing site in English and Russian",
        ],
        next: [
          "Pet, trip and document services behind the app's screens",
          "AI trip checklists and PDF travel packs",
          "Subscriptions and rule monitoring",
        ],
        engineering: [
          "A modular monolith with clear adapters for storage, email and document extraction",
          "Configuration that fails closed in production",
          "An OpenAPI-first mobile client",
        ],
      },
      ru: {
        category: "PetTech",
        tagline: "Помощник в путешествиях для питомцев и их владельцев.",
        summary:
          "Мобильный планировщик поездок и переездов с питомцами: профили, учёт прививок и документов, правила стран и авиакомпаний, чек-листы и пакеты документов. Проект на ранней стадии.",
        role: "Продуктовый дизайн и full-stack-разработка",
        status: "Ранняя стадия",
        built: [
          "Вход по email, через Google и Apple с ротацией токенов и ограничением частоты",
          "Модель данных для питомцев, документов, прививок, стран, авиакомпаний и правил",
          "Контракт OpenAPI с генерацией, валидацией и проверкой расхождений",
          "Экраны мобильного приложения: питомцы, поездки, документы и инструменты",
          "Лендинг на английском и русском",
        ],
        next: [
          "Сервисы питомцев, поездок и документов за экранами приложения",
          "ИИ-чек-листы поездок и PDF-пакеты документов",
          "Подписки и отслеживание правил",
        ],
        engineering: [
          "Модульный монолит с чёткими адаптерами для хранения, почты и извлечения данных",
          "Конфигурация, которая в продакшене безопасно отказывает при ошибке",
          "Мобильный клиент на основе OpenAPI",
        ],
      },
    },
  },
];

/** The project for a slug. Every WorkSlug has exactly one record. */
export function getProject(slug: WorkSlug): Project {
  const project = projects.find((item) => item.slug === slug);
  if (!project) throw new Error(`No project for ${slug}`);
  return project;
}

/** The project after this one, wrapping round, for the next-project link. */
export function nextProject(slug: WorkSlug): Project {
  const index = projects.findIndex((item) => item.slug === slug);
  return projects[(index + 1) % projects.length] ?? getProject(slug);
}
