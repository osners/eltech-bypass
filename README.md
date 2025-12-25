# Eltech Bypass

Утилита для оптимизации работы с образовательной платформой Open edX (LETIteach). Скрипт предназначен для быстрого прохождения лекций.

![Демонстрация работы](https://github.com/user-attachments/assets/61c9ded1-baa4-4160-bb8a-4521a4b360df)

![Демонстрация работы](https://github.com/user-attachments/assets/80ed6f26-0d98-4dfe-b650-053bb1b51030)

## Функционал

1. **Отображение скрытых заданий:** Извлекает блоки с вопросами, которые по умолчанию скрыты внутри видеоплеера, и отображает их списком под видео.
2. **Автоматический просмотр:** Отправляет на сервер сигнал о завершении просмотра видеоматериала (`markCompletion`), обновляя прогресс курса (срабатывает, если воспроизведение видео было инициировано).

---

## Установка (Букмарклет)

Наиболее удобный способ использования — создание **букмарклета** (активной закладки). Это позволяет запускать скрипт в один клик без открытия инструментов разработчика.

1. Откройте панель закладок в браузере (сочетание клавиш `Ctrl` + `Shift` + `B` для Windows/Linux или `Cmd` + `Option` + `B` для macOS).
2. Нажмите правой кнопкой мыши на свободное место панели закладок и выберите пункт **«Добавить страницу»** (или «Добавить закладку»).
3. В поле **Имя** укажите название, например: `Eltech Tools`.
4. В поле **URL (Адрес)** скопируйте и вставьте код ниже:

```javascript
javascript:(function(){const v=document.querySelectorAll('video');if(v.length>0)v.forEach(e=>{try{e.muted=!0,window.jQuery&&window.jQuery(e).closest('.video').data('video-player-state')?.completionHandler?.markCompletion()}catch(e){console.error(e)}});const p=document.querySelectorAll('.in-video-problem-wrapper, .xblock-student_view-problem');if(0===p.length)alert("Видео просмотренно.Задач нет.");else{p.forEach(e=>{e.style.cssText="display:block !important;visibility:visible !important;opacity:1 !important;height:auto !important;width:100% !important;margin:20px 0 !important;padding:15px !important;background:#fff !important;border:3px solid #007bff !important;border-radius:8px !important;box-shadow:0 4px 15px rgba(0,0,0,.1)!important;position:relative!important;z-index:100 !important",e.classList.remove('is-hidden'),e.querySelectorAll('[style*="display: none"]').forEach(e=>e.style.display='block')});p[0].scrollIntoView({behavior:"smooth",block:"center"})}})();
```
## Инструкция по использованию

1. Перейдите на страницу курса, содержащую видеолекцию.
2. Запустите видео (достаточно нажать Play на секунду).
3. Нажмите на созданную ранее закладку Eltech Tools.
4. Скрытые задания появятся под видео, а статус лекции обновится на "Просмотрено".

## Альтернативный запуск (через консоль)

Если вы предпочитаете использовать инструменты разработчика:

1. На странице с лекцией нажмите F12.
2. Перейдите во вкладку Console.
3. Вставьте код из файла script.js (находится в этом репозитории) и нажмите Enter.
   
---

## ⚠️ Disclaimer
Данный скрипт предоставляется "как есть" в образовательных целях. Использование скрипта может нарушать правила пользования платформой LETIteach. Автор не несет ответственности за возможные последствия использования данного программного обеспечения.
