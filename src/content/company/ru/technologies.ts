import type { TechnologiesCopy } from "../en/technologies";

/** Draft that needs review by a native editor. It stays noindex until russianTranslationStatus approves it. */
export const technologies: TechnologiesCopy = {
  meta: {
    title: "Технологии — SimpleX",
    description:
      "Каталог технологий, на которые ориентируется SimpleX, по областям применения. Он описывает инженерную практику, а не сертификаты или партнёрства с вендорами.",
  },
  breadcrumb: {
    label: "Навигационная цепочка",
    home: "Главная",
    company: "Компания",
    current: "Технологии",
  },
  hero: {
    lines: ["Инструменты", "и как мы их применяем."],
    lead: "Каталог технологий, на которые мы ориентируемся, по областям применения. Он описывает инженерную практику, а не сертификаты или партнёрства с вендорами.",
    core: "Основные — наш обычный выбор",
    selective: "Выборочные — где уместно",
  },
  directory: {
    searchLabel: "Поиск технологий",
    searchPlaceholder: "Поиск — например, Kotlin, Terraform, RAG",
    categoryLabel: "Категория",
    all: "Все",
    coreTag: "Основная",
    selectiveTag: "Выборочная",
    count: {
      one: "{count} технология",
      few: "{count} технологии",
      many: "{count} технологий",
      other: "{count} технологии",
    },
    inCategory: "в категории «{category}»",
    matching: "по запросу «{query}»",
    empty: {
      title: "Нет совпадений для «{query}»",
      body: "Этот список охватывает инструменты, на которые мы ориентируемся чаще всего. О других спросите нас напрямую.",
      clear: "Сбросить поиск",
      ask: "Спросить о технологии",
    },
    groups: [
      {
        name: "Фронтенд",
        description: "Типобезопасные, доступные интерфейсы с бюджетами производительности.",
        items: [
          { name: "TypeScript", use: "Основной язык для фронтенда", core: true },
          { name: "React", use: "Продуктовые интерфейсы и дизайн-системы", core: true },
          { name: "Next.js", use: "Серверный рендеринг и контентные сайты", core: true },
          { name: "Vue", use: "Существующие системы и лёгкие приложения", core: false },
          { name: "Angular", use: "Корпоративные интерфейсы", core: false },
          { name: "Storybook", use: "Документация компонентов", core: true },
        ],
      },
      {
        name: "Бэкенд",
        description: "Чёткие границы доменов и хорошо описанные API.",
        items: [
          { name: "Node.js", use: "API и бэкенды для фронтенда", core: true },
          { name: "Java / Kotlin", use: "Транзакционные и событийные системы", core: true },
          { name: ".NET / C#", use: "Корпоративные платформы", core: true },
          { name: "Go", use: "Высоконагруженные сервисы", core: false },
          { name: "Python", use: "Сервисы данных и ML", core: true },
          { name: "GraphQL", use: "API для продуктов", core: false },
        ],
      },
      {
        name: "Мобайл",
        description: "Нативно, где важно, общий код, где выгодно.",
        items: [
          { name: "Swift / SwiftUI", use: "Нативный iOS", core: true },
          { name: "Kotlin / Compose", use: "Нативный Android", core: true },
          { name: "React Native", use: "Кроссплатформенные приложения", core: true },
          { name: "Flutter", use: "Кроссплатформенные приложения", core: false },
          { name: "Fastlane", use: "Автоматизация релизов", core: true },
        ],
      },
      {
        name: "Облако",
        description: "Всё как код; стоимость видна по каждому сервису.",
        items: [
          { name: "AWS", use: "Основная облачная платформа", core: true },
          { name: "Microsoft Azure", use: "Корпоративные системы", core: true },
          { name: "Google Cloud", use: "Нагрузки с большими данными", core: false },
          { name: "Terraform", use: "Инфраструктура как код", core: true },
          { name: "Kubernetes", use: "Оркестрация контейнеров", core: true },
          { name: "Serverless", use: "Событийные нагрузки", core: false },
        ],
      },
      {
        name: "Данные",
        description: "Конвейеры с контрактами, тестами и владельцами.",
        items: [
          { name: "PostgreSQL", use: "Основное реляционное хранилище", core: true },
          { name: "Kafka", use: "Потоковая передача событий", core: true },
          { name: "Snowflake", use: "Аналитическое хранилище", core: false },
          { name: "BigQuery", use: "Аналитическое хранилище", core: false },
          { name: "dbt", use: "Преобразование данных", core: true },
          { name: "Airflow", use: "Оркестрация", core: false },
        ],
      },
      {
        name: "ИИ",
        description: "Независимо от модели, с оценкой и наблюдаемостью.",
        items: [
          { name: "API базовых моделей", use: "Функции языка и зрения", core: true },
          { name: "RAG", use: "Обоснованные ответы с источниками", core: true },
          { name: "Векторные базы", use: "Семантический поиск", core: true },
          { name: "LangGraph", use: "Процессы агентов", core: false },
          { name: "PyTorch", use: "Собственные модели", core: false },
          { name: "MLflow", use: "Учёт экспериментов", core: false },
        ],
      },
      {
        name: "DevOps",
        description: "Релизы как рутина.",
        items: [
          { name: "GitHub Actions", use: "CI/CD", core: true },
          { name: "GitLab CI", use: "CI/CD", core: false },
          { name: "Argo CD", use: "Поставка GitOps", core: true },
          { name: "Docker", use: "Контейнеры", core: true },
          { name: "OpenTelemetry", use: "Трассировка и метрики", core: true },
          { name: "Grafana", use: "Панели и оповещения", core: true },
        ],
      },
      {
        name: "Качество",
        description: "Уверенность, которую можно измерить.",
        items: [
          { name: "Playwright", use: "Сквозное веб-тестирование", core: true },
          { name: "Cypress", use: "Компонентные и E2E-тесты", core: false },
          { name: "Appium", use: "Мобильная автоматизация", core: false },
          { name: "Pact", use: "Контрактное тестирование", core: true },
          { name: "k6", use: "Нагрузка и производительность", core: true },
          { name: "SonarQube", use: "Статический анализ", core: false },
        ],
      },
    ],
  },
  follows: {
    title: "Технологии следуют за задачей.",
    lead: "Мы рекомендуем зрелые, хорошо поддерживаемые инструменты, для которых ваша команда сможет нанимать людей, и письменно объясняем каждый выбор.",
    primary: "Архитектура и консалтинг",
    secondary: "Обсудить проект",
  },
  radar: {
    tag: "Технологический радар · пример",
    title: "Что мы применяем, пробуем, оцениваем и откладываем.",
    lead: "Иллюстративный радар, показывающий, как мы рассуждали бы о выборе стека для вас и почему. Это не опубликованная позиция.",
    label: "Кольцо радара",
    rings: {
      adopt: {
        label: "Применять",
        items: [
          { name: "TypeScript", why: "По умолчанию для веба и Node" },
          { name: "PostgreSQL", why: "Первый выбор для транзакций" },
          { name: "Kotlin", why: "Сервисы JVM и Android" },
          { name: "Terraform", why: "Вся инфраструктура как код" },
          { name: "OpenTelemetry", why: "Трассировка всех сервисов" },
        ],
      },
      trial: {
        label: "Пробовать",
        items: [
          { name: "Tauri", why: "Лёгкие десктоп-приложения" },
          { name: "Temporal", why: "Надёжные процессы и саги" },
          { name: "Bun", why: "Быстрые инструменты для JS-монорепо" },
          { name: "pgvector", why: "Поиск без новой базы" },
        ],
      },
      assess: {
        label: "Оценивать",
        items: [
          { name: "WebGPU", why: "ML и визуализация в браузере" },
          { name: "Rust на бэкенде", why: "Горячие участки и edge" },
          { name: "Локальные LLM", why: "Приватные офлайн-функции ИИ" },
        ],
      },
      hold: {
        label: "Отложить",
        items: [
          { name: "Микрофронтенды по умолчанию", why: "Только при чётких границах команд" },
          { name: "Своя авторизация", why: "Используйте проверенного провайдера" },
          { name: "Переписывание разом", why: "Лучше заменять постепенно" },
        ],
      },
    },
    note: "Пример радара, который заменит радар инженерных лидов SimpleX.",
  },
};
