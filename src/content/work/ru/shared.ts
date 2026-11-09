import type { WorkSharedCopy } from "../types";

/** Draft that needs review by a native editor. It stays noindex until russianTranslationStatus approves it. */
export const shared: WorkSharedCopy = {
  breadcrumb: { label: "Навигационная цепочка", home: "Главная", work: "Проекты" },
  meta: (name, tagline) => ({
    title: `${name} - Проект - SimpleX`,
    description: `${name}: ${tagline} Что сделала SimpleX, что ещё в работе и на каких технологиях это построено.`,
  }),
  platforms: { ios: "iOS", android: "Android", web: "Веб", backend: "Бэкенд" },
  labels: {
    details: "О проекте",
    category: "Категория",
    role: "Наша роль",
    status: "Статус",
    platforms: "Платформы",
    built: "Что сделано",
    builtLead: "Уже реализовано в коде.",
    next: "В работе и в планах",
    nextLead: "Сделано частично или запланировано и пока не входит в продукт.",
    engineering: "Инженерия",
    stack: "Технологии",
    note: "Принадлежность",
  },
  scope:
    "Описано по коду и документации проекта. Показатели использования, выручки и запуска не публикуются.",
  next: { label: "Следующий проект" },
  cta: {
    title: "Создаёте что-то похожее?",
    lead: "Мы расскажем, как бы к этому подошли и что хотели бы узнать в первую очередь.",
    primary: "Обсудить проект",
    secondary: "Все проекты",
  },
};
