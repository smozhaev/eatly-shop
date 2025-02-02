# React FSD Template

Современный шаблон для React-приложений, построенный по методологии Feature-Sliced Design (FSD). Шаблон предоставляет готовую архитектуру и набор инструментов для быстрого старта разработки масштабируемых приложений.

## Особенности шаблона

- **Feature-Sliced Design** - архитектурная методология для построения frontend-приложений
- **Vite** - современный сборщик с быстрым dev-сервером и сборкой
- **TypeScript** - типизация для масштабируемой разработки
- **Redux Toolkit** - управление состоянием приложения
- **Адаптивная архитектура** - готовая структура для любого масштаба приложения

## Технологический стек

### Основные технологии
- **React** (v19.0.0) - JavaScript библиотека для построения пользовательских интерфейсов
- **TypeScript** (v5.6.2) - типизированный JavaScript для более надёжной разработки
- **Vite** (v6.0.5) - современный инструмент сборки для быстрой разработки

### Маршрутизация и управление состоянием
- **React Router** (v7.1.4) - маршрутизация в приложении
- **Redux Toolkit** (v2.5.1) - управление состоянием приложения
- **React Redux** (v9.2.0) - интеграция Redux с React

### Стилизация
- **SASS** (v1.70.0) - препроцессор CSS для продвинутой стилизации

### Инструменты разработки
- **ESLint** (v9.17.0) - линтер для поддержания качества кода
- **Prettier** (v3.4.2) - форматирование кода
- **TypeScript ESLint** - проверка типов в процессе линтинга
- **Docker** - контейнеризация

## Структура проекта (FSD)

```
src/
├── app/       # Инициализация приложения, провайдеры, роутинг
├── processes/ # Процессы приложения
├── pages/     # Страницы приложения
├── widgets/   # Самодостаточные блоки для страниц
├── features/  # Действия пользователя
├── entities/  # Бизнес-сущности
└── shared/    # Переиспользуемый код
```

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

## Docker Setup

To run the application in Docker:
```bash
docker-compose up --build
```

## Скрипты

- `npm run dev` - запуск проекта в режиме разработки
- `npm run build` - сборка проекта для продакшена
- `npm run preview` - предварительный просмотр собранного проекта
- `npm run lint` - проверка кода линтером
- `npm run format` - форматирование кода
- `npm run check` - проверка форматирования кода

## Начало работы

1. Создайте проект используя этот шаблон:
```bash
npx degit your-username/react-fsd-template my-app
```

2. Установите зависимости:
```bash
cd my-app
npm install
```

3. Запустите проект в режиме разработки:
```bash
npm run dev
```

## Рекомендации по использованию

- Следуйте принципам FSD при добавлении нового функционала
- Используйте слайсы для Redux Toolkit
- Придерживайтесь TypeScript для типизации компонентов и данных
- Следуйте правилам ESLint и Prettier для поддержания качества кода

## Code Quality Tools

### ESLint

The project uses ESLint for code linting with the following configuration:
- TypeScript ESLint recommended rules
- React Hooks plugin
- React Refresh plugin

To run ESLint checks:
```bash
npm run lint
```

### Prettier

Code formatting is handled by Prettier. To format code:
```bash
npm run format
```

To check if files are formatted correctly:
```bash
npm run check
```
