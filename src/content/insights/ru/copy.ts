import type { InsightsCopy } from "../types";

/** Draft that needs review by a native editor. It stays noindex until russianTranslationStatus approves it. */
export const copy: InsightsCopy = {
  meta: {
    title: "Статьи — SimpleX",
    description:
      "Практические материалы об архитектуре, поставке, дизайне и прикладном ИИ от SimpleX. Статьи пока не опубликованы.",
  },
  breadcrumb: { label: "Навигационная цепочка", home: "Главная", current: "Статьи" },
  hero: {
    lines: ["Заметки", "из работы."],
    lead: "Практические материалы об архитектуре, поставке, дизайне и прикладном ИИ.",
  },
  featuredTag: "Главная статья",
  latest: {
    title: "Последние",
    searchLabel: "Поиск статей",
    searchPlaceholder: "Поиск статей",
    categoryLabel: "Категория",
    all: "Все",
    count: {
      one: "{count} статья",
      few: "{count} статьи",
      many: "{count} статей",
      other: "{count} статьи",
    },
    inCategory: "в категории «{category}»",
    none: {
      title: "Статьи пока не опубликованы",
      body: "Когда статья будет готова, она появится здесь с автором и датой.",
    },
    noMatch: {
      title: "Ничего не найдено",
      body: "Попробуйте более общий запрос или другую категорию.",
      reset: "Сбросить фильтры",
    },
  },
  categories: {
    architecture: "Архитектура",
    "ai-in-practice": "ИИ на практике",
    leadership: "Лидерство",
    "product-design": "Продуктовый дизайн",
    delivery: "Поставка",
    cloud: "Облако",
    quality: "Качество",
    modernisation: "Модернизация",
  },
  minutes: "{count} мин чтения",
  cta: {
    title: "Есть задача, о которой нам стоит написать или которую стоит решить?",
    lead: "Расскажите, в чём вы хотите разобраться.",
    primary: "Обсудить проект",
  },
  article: {
    breadcrumb: "Статьи",
    shareLabel: "Поделиться статьёй",
    copy: "Скопировать ссылку",
    copied: "Ссылка скопирована",
    linkedIn: "Поделиться в LinkedIn",
    x: "Поделиться в X",
    email: "Отправить по почте",
    onThisPage: "На этой странице",
    related: "Похожие статьи",
    all: "Все статьи",
  },
};
