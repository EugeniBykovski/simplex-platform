import type { IndustrySharedCopy } from "../types";

/** Draft that needs review by a native editor. It stays noindex until russianTranslationStatus approves it. */
export const shared: IndustrySharedCopy = {
  breadcrumb: { label: "Навигационная цепочка", home: "Главная", industries: "Отрасли" },
  hero: { eyebrow: "Отрасль", primary: "Поговорить с инженером", secondary: "Связанные работы" },
  challengesEyebrow: "Вызовы рынка",
  opportunities: {
    tag: "Возможности цифровой инженерии",
    title: "Где инженерия даёт больше всего ценности.",
  },
  scenarios: {
    eyebrow: "Сценарии решений",
    title: "Что мы можем построить.",
    label: "Сценарии решений",
    scenario: "Сценарий",
    discuss: "Обсудить этот сценарий",
    components: "Типичные компоненты",
  },
  considerations: { eyebrow: "Инженерные соображения", title: "Заложено с первого спринта." },
  capabilities: {
    eyebrow: "Подходящие компетенции",
    projects: "Связанный проект",
    read: "Смотреть проект",
  },
  services: {
    "custom-software-development": "Заказная разработка",
    "enterprise-software": "Корпоративное ПО",
    "web-development": "Веб-разработка",
    "mobile-development": "Мобильная разработка",
    "ai-engineering": "Инженерия ИИ",
    "cloud-devops": "Облако и DevOps",
    "architecture-consulting": "Архитектура и консалтинг",
    "product-design": "Продуктовый дизайн",
    "legacy-modernization": "Модернизация legacy",
    "quality-engineering": "Инженерия качества",
  },
  compliance: {
    tag: "С учётом требований",
    lead: "Контроли, журналы аудита и доказательства закладываются в архитектуру с первого спринта, поэтому соответствие требованиям реже блокирует релиз.",
    note: "Стандарты, на которые мы ориентируемся при проектировании, - не сертификаты SimpleX и не гарантия соответствия.",
  },
  cta: {
    lead: "Поговорите с инженерами о своих ограничениях. Без скриптов продаж - просто полезный первый разговор.",
    primary: "Обсудить проект",
  },
};
