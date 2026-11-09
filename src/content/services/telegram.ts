import type { Locale } from "@/i18n/routing";

type Status = "official" | "review" | "feasibility";

export type TelegramCopy = {
  platforms: {
    eyebrow: string;
    title: string;
    lead: string;
    status: Record<Status, string>;
    items: readonly { name: string; status: Status; body: string }[];
    note: string;
  };
  ai: { eyebrow: string; title: string; body: string; points: readonly string[]; link: string };
  integrations: { eyebrow: string; title: string; items: readonly string[]; note: string };
  security: { eyebrow: string; title: string; points: readonly string[] };
  faq: { eyebrow: string; title: string; items: readonly { q: string; a: string }[] };
  contactCta: string;
};

/**
 * Platform statements follow the official Telegram, Instagram and Threads documentation as of
 * writing. APIs and Meta's permissions change, so each scope is confirmed per project.
 */
const en: TelegramCopy = {
  platforms: {
    eyebrow: "Telegram, Instagram & Threads",
    title: "What the platforms allow, stated plainly.",
    lead: "We build on official APIs only. Some capabilities are open to any bot; others need Meta's permissions and app review; anything else we assess before promising it.",
    status: {
      official: "Official API",
      review: "Needs Meta app review",
      feasibility: "Feasibility check",
    },
    items: [
      {
        name: "Telegram bots",
        status: "official",
        body: "Messages, buttons, commands, inline mode, Mini Apps and payments through Telegram's supported providers. A bot can only message people who have started it.",
      },
      {
        name: "Instagram messages",
        status: "review",
        body: "Replies to messages sent to your Instagram professional account, routed to your team in Telegram or your CRM. Meta's messaging window applies, and a bot can't start conversations with people who haven't contacted you.",
      },
      {
        name: "Instagram comments & mentions",
        status: "review",
        body: "Notifications for comments on your own posts and for mentions, so your team can see and answer them from one place, with replies you've approved.",
      },
      {
        name: "Instagram publishing",
        status: "review",
        body: "Publishing to your own professional account through Meta's content publishing API, within its limits.",
      },
      {
        name: "Threads",
        status: "review",
        body: "Publishing posts, reading replies to your posts and managing those replies through the Threads API. Threads offers no direct-message API.",
      },
      {
        name: "Other channels and systems",
        status: "feasibility",
        body: "Anything else depends on what its API exposes. We check it before it enters a scope.",
      },
    ],
    note: "We don't build scraping of private accounts, unsolicited mass messaging or automated comments on other people's posts. Platform rules change, so we confirm what's available for your accounts before committing.",
  },
  ai: {
    eyebrow: "AI, where it helps",
    title: "A bot can be the front door to an AI assistant.",
    body: "Many bots need no AI at all: buttons and clear flows are faster and more predictable. Where open questions matter, the bot can sit in front of an assistant grounded in your own content and systems.",
    points: [
      "Answers drawn from your knowledge base, not from guesses",
      "Drafts a person approves before anything is sent",
      "Handover to your team when the assistant is unsure, or when asked",
      "Tested against real questions before launch",
    ],
    link: "How we engineer AI features",
  },
  integrations: {
    eyebrow: "Integrations",
    title: "Connected to the systems you already run.",
    items: [
      "Telegram Bot API",
      "Instagram Graph API and approved messaging APIs",
      "Threads API, where relevant",
      "CRM platforms",
      "Your website",
      "Internal APIs",
      "Booking systems",
      "Payment providers, where applicable",
    ],
    note: "These are integration targets. SimpleX has no partnership with these providers.",
  },
  security: {
    eyebrow: "Security & privacy",
    title: "Built like the rest of your systems.",
    points: [
      "Bot tokens and API keys kept on the server and rotated, never in the client",
      "Only the data each workflow needs, kept for as long as you decide",
      "Incoming webhooks verified and rate-limited",
      "A record of what the bot did, for review",
      "Personal data handled under your own privacy policy",
    ],
  },
  faq: {
    eyebrow: "Questions",
    title: "Before you ask.",
    items: [
      {
        q: "Can the bot message people first?",
        a: "Not on Telegram: a bot can only write to people who have started it. On Instagram, replies follow Meta's messaging rules, and starting new conversations isn't allowed.",
      },
      {
        q: "Does every bot need AI?",
        a: "No. Many workflows work best with buttons and clear steps. We add AI only where open questions justify it.",
      },
      {
        q: "Can you read Instagram or Threads direct messages?",
        a: "Only messages sent to your own Instagram professional account, with Meta's permissions approved. Threads has no direct-message API.",
      },
      {
        q: "Can the bot take payments?",
        a: "Telegram supports payments through its supported providers. Other checkouts can run in a Mini App or a secure link, depending on your provider.",
      },
      {
        q: "How long does a first version take?",
        a: "It depends on the integrations. We map the workflow first, then agree a scope and an estimate.",
      },
    ],
  },
  contactCta: "Discuss a Telegram bot",
};

const ru: TelegramCopy = {
  platforms: {
    eyebrow: "Telegram, Instagram и Threads",
    title: "Что позволяют платформы, без преувеличений.",
    lead: "Мы работаем только с официальными API. Часть возможностей доступна любому боту, часть требует разрешений Meta и проверки приложения, а остальное мы проверяем до того, как обещать.",
    status: {
      official: "Официальный API",
      review: "Нужна проверка Meta",
      feasibility: "Проверка возможности",
    },
    items: [
      {
        name: "Telegram-боты",
        status: "official",
        body: "Сообщения, кнопки, команды, инлайн-режим, Mini Apps и платежи через поддерживаемых провайдеров Telegram. Бот может писать только тем, кто его запустил.",
      },
      {
        name: "Сообщения Instagram",
        status: "review",
        body: "Ответы на сообщения, отправленные вашему профессиональному аккаунту Instagram, с передачей команде в Telegram или CRM. Действует окно переписки Meta, и бот не может начинать диалог с теми, кто вам не писал.",
      },
      {
        name: "Комментарии и упоминания Instagram",
        status: "review",
        body: "Уведомления о комментариях к вашим публикациям и упоминаниях, чтобы команда видела и отвечала в одном месте одобренными ответами.",
      },
      {
        name: "Публикации в Instagram",
        status: "review",
        body: "Публикация в ваш профессиональный аккаунт через API публикаций Meta, в пределах его ограничений.",
      },
      {
        name: "Threads",
        status: "review",
        body: "Публикация постов, чтение ответов на ваши посты и управление ими через Threads API. Личных сообщений в API Threads нет.",
      },
      {
        name: "Другие каналы и системы",
        status: "feasibility",
        body: "Всё остальное зависит от возможностей их API. Мы проверяем это до включения в объём работ.",
      },
    ],
    note: "Мы не делаем сбор данных закрытых аккаунтов, массовые рассылки без согласия и автоматические комментарии под чужими публикациями. Правила платформ меняются, поэтому мы подтверждаем доступные возможности для ваших аккаунтов заранее.",
  },
  ai: {
    eyebrow: "ИИ там, где он полезен",
    title: "Бот может быть входом к ИИ-ассистенту.",
    body: "Многим ботам ИИ не нужен: кнопки и понятные сценарии быстрее и предсказуемее. Там, где важны свободные вопросы, бот может работать перед ассистентом, опирающимся на ваши материалы и системы.",
    points: [
      "Ответы из вашей базы знаний, а не догадки",
      "Черновики, которые человек одобряет до отправки",
      "Передача команде, если ассистент не уверен или об этом просят",
      "Проверка на реальных вопросах до запуска",
    ],
    link: "Как мы разрабатываем ИИ-функции",
  },
  integrations: {
    eyebrow: "Интеграции",
    title: "Связь с системами, которые у вас уже есть.",
    items: [
      "Telegram Bot API",
      "Instagram Graph API и одобренные API сообщений",
      "Threads API, где это уместно",
      "CRM-платформы",
      "Ваш сайт",
      "Внутренние API",
      "Системы записи",
      "Платёжные провайдеры, где применимо",
    ],
    note: "Это цели интеграции. У SimpleX нет партнёрства с этими провайдерами.",
  },
  security: {
    eyebrow: "Безопасность и данные",
    title: "Как и остальные ваши системы.",
    points: [
      "Токены ботов и ключи API хранятся на сервере и обновляются, никогда не в клиенте",
      "Только данные, нужные процессу, и столько, сколько решите вы",
      "Входящие вебхуки проверяются и ограничиваются по частоте",
      "Журнал действий бота для проверки",
      "Персональные данные по вашей политике конфиденциальности",
    ],
  },
  faq: {
    eyebrow: "Вопросы",
    title: "Прежде чем спросить.",
    items: [
      {
        q: "Может ли бот написать первым?",
        a: "В Telegram нет: бот пишет только тем, кто его запустил. В Instagram ответы подчиняются правилам Meta, а начинать новые диалоги нельзя.",
      },
      {
        q: "Каждому боту нужен ИИ?",
        a: "Нет. Многие процессы лучше работают на кнопках и понятных шагах. ИИ мы добавляем только там, где это оправдано.",
      },
      {
        q: "Можно ли читать личные сообщения Instagram или Threads?",
        a: "Только сообщения, отправленные вашему профессиональному аккаунту Instagram, после одобрения разрешений Meta. У Threads нет API личных сообщений.",
      },
      {
        q: "Может ли бот принимать оплату?",
        a: "Telegram поддерживает платежи через своих провайдеров. Другие способы оплаты возможны в Mini App или по защищённой ссылке, в зависимости от провайдера.",
      },
      {
        q: "Сколько занимает первая версия?",
        a: "Зависит от интеграций. Сначала мы описываем процесс, затем согласуем объём и оценку.",
      },
    ],
  },
  contactCta: "Обсудить Telegram-бота",
};

export const getTelegramCopy = (locale: Locale) => (locale === "ru" ? ru : en);
