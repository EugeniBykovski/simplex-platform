import type { WorkOverviewCopy } from "../types";

/** Draft that needs review by a native editor. It stays noindex until russianTranslationStatus approves it. */
export const overview: WorkOverviewCopy = {
  meta: {
    title: "Проекты - SimpleX",
    description:
      "Продукты, которые SimpleX спроектировала и разработала: спорт, финансовые медиа, профессиональные сети, PropTech, B2B-торговля, тренировки, мобильность и путешествия с питомцами.",
  },
  breadcrumb: { label: "Навигационная цепочка", home: "Главная", current: "Проекты" },
  hero: {
    lines: ["Настоящие продукты,", "от начала до конца."],
    lead: "Веб-, мобильные и серверные платформы, которые мы проектируем и разрабатываем. На каждой странице указано, что уже сделано и что ещё в планах.",
    noticeTitle: "О чём эти страницы.",
    notice:
      "Они описывают инженерную работу. Большинство продуктов ещё в разработке, и мы не публикуем показатели использования или бизнеса.",
  },
  featured: { tag: "Главный", read: "Смотреть проект" },
  grid: {
    title: "Все проекты",
    platformLabel: "Платформа",
    platformGroup: "Фильтр по платформе",
    focusLabel: "Фокус",
    focusGroup: "Фильтр по фокусу",
    all: "Все",
    platforms: { mobile: "Мобильные", web: "Веб" },
    capabilities: {
      realtime: "Реальное время",
      payments: "Платежи",
      ai: "ИИ",
      marketplace: "Маркетплейсы",
    },
    count: {
      one: "{count} проект",
      few: "{count} проекта",
      many: "{count} проектов",
      other: "{count} проекта",
    },
    read: "Смотреть проект",
    empty: {
      title: "Нет проектов с такими фильтрами",
      body: "Попробуйте другое сочетание - или спросите нас напрямую.",
      clear: "Сбросить фильтры",
      ask: "Спросить о похожих проектах",
    },
  },
  cta: {
    title: "Расскажите о своём проекте.",
    lead: "Расскажите, что вы создаёте, и мы расскажем, как бы к этому подошли.",
    primary: "Начать проект",
  },
};
