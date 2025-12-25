(function byPassFizika() {
    // ЛОЛ видео считается просмотренным (только если вы его включили до этого)
    const videos = document.querySelectorAll('video');
    if (videos.length > 0) {
        videos.forEach((vid) => {
            try {
                vid.muted = true;
                if (window.jQuery) {
                    const $el = window.jQuery(vid).closest('.video');
                    const state = $el.data('video-player-state');
                    if (state && state.completionHandler) {
                        state.completionHandler.markCompletion();
                        console.log("Видео отмечено просмотренным.");
                    }
                }
            } catch (e) {
                console.error("Ошибка обработки видео:", e);
            }
        });
    }

    // Открыть вопросы
    const problems = document.querySelectorAll('.in-video-problem-wrapper, .xblock-student_view-problem');
    
    problems.forEach((problem) => {
        problem.style.cssText = `
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
            height: auto !important;
            width: 100% !important;
            margin: 20px 0 !important;
            padding: 15px !important;
            background-color: #ffffff !important;
            border: 3px solid #007bff !important; /* Нейтральная синяя рамка */
            border-radius: 8px !important;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1) !important;
            position: relative !important;
            z-index: 100 !important;
        `;
        
        problem.classList.remove('is-hidden');

        const hiddenInner = problem.querySelectorAll('[style*="display: none"]');
        hiddenInner.forEach(el => el.style.display = 'block');
    });

    if (problems.length > 0) {

        problems[0].scrollIntoView({behavior: "smooth", block: "center"});
        console.log(`Открыто  ${problems.length} блоков`);
    } else {
        console.log("ТУТ ЗАДАЧ НЕТ");
    }
})();
