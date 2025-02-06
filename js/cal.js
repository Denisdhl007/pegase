document.addEventListener('DOMContentLoaded', function() {
    // Vérifie si l'élément existe
    const calendarElement = document.getElementById('my-cal-inline');
    if (!calendarElement) return;

    (function(C, A, L) {
        let p = function(a, ar) {
            a.q.push(ar);
        };
        let d = C.document;

        // Initialisation de Cal
        C.Cal = C.Cal || function() {
            let cal = C.Cal;
            let ar = arguments;
            
            if (!cal.loaded) {
                cal.ns = {};
                cal.q = cal.q || [];
                const script = d.createElement('script');
                script.async = true;
                script.src = A;
                script.onload = function() {
                    cal.loaded = true;
                    
                    // Configuration initiale
                    Cal("init", "reservation-en-ligne-pegase", {
                        origin: "https://cal.com"
                    });

                    // Configuration de l'affichage inline
                    Cal.ns["reservation-en-ligne-pegase"]("inline", {
                        elementOrSelector: "#my-cal-inline",
                        config: {
                            "layout": "month_view"
                        },
                        calLink: "cmoroz/reservation-en-ligne-pegase"
                    });

                    // Configuration UI
                    Cal.ns["reservation-en-ligne-pegase"]("ui", {
                        "cssVarsPerTheme": {
                            "light": {
                                "cal-brand": "#292929"
                            },
                            "dark": {
                                "cal-brand": "#fafafa"
                            }
                        },
                        "hideEventTypeDetails": true,
                        "layout": "month_view"
                    });
                };
                
                d.head.appendChild(script);
                cal.loaded = true;
            }

            if (ar[0] === L) {
                const api = function() {
                    p(api, arguments);
                };
                const namespace = ar[1];
                api.q = api.q || [];
                
                if (typeof namespace === "string") {
                    cal.ns[namespace] = cal.ns[namespace] || api;
                    p(cal.ns[namespace], ar);
                    p(cal, ["initNamespace", namespace]);
                } else {
                    p(cal, ar);
                }
                return;
            }
            p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");
});