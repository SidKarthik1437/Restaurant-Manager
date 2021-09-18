module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
    },
    theme: {
        colors: {
            background: {
                body: "#F2FFFF",
                "menu-item": "#d6ffff",
                sidebar: "#363740",
            },
            grey: {
                "res-head": "#A4A6B3",
            },
            blue: {
                nav: {
                    text: "#00FFFF66",
                    full: "#00FFFF",
                },
            },
            red: "#ff0000",
        },
        boxShadow: {
            "neu-resn":
                "-10px 10px 20px rgba(46, 47, 54, 0.2), 10px -10px 20px rgba(46, 47, 54, 0.2), -10px -10px 20px rgba(62, 63, 74, 0.9), 10px 10px 25px rgba(46, 47, 54, 0.9), inset 1px 1px 2px rgba(62, 63, 74, 0.3), inset -1px -1px 2px rgba(46, 47, 54, 0.5)",
            "neu-resn-active":
                "1px 1px 2px rgba(59, 60, 70, 0.3), -1px -1px 2px rgba(49, 50, 58, 0.5), inset -5px 5px 10px rgba(49, 50, 58, 0.2), inset 5px -5px 10px rgba(49, 50, 58, 0.2), inset -5px -5px 10px rgba(59, 60, 70, 0.9), inset 5px 5px 13px rgba(49, 50, 58, 0.9)",
            "neu-nav":
                "-10px 10px 20px rgba(46, 47, 54, 0.2), 10px -10px 20px rgba(46, 47, 54, 0.2), -10px -10px 20px rgba(62, 63, 74, 0.9), 10px 10px 25px rgba(46, 47, 54, 0.9), inset 1px 1px 2px rgba(62, 63, 74, 0.3), inset -1px -1px 2px rgba(46, 47, 54, 0.5)",
            "neu-quick-action":
                "-1px 1px 2px rgba(22, 22, 26, 0.2), 1px -1px 2px rgba(22, 22, 26, 0.2), -1px -1px 2px rgba(86, 88, 102, 0.9), 1px 1px 3px rgba(22, 22, 26, 0.9), inset 1px 1px 2px rgba(86, 88, 102, 0.3), inset -1px -1px 2px rgba(22, 22, 26, 0.5)",
            "neu-admin-input":
                "-15px 15px 30px rgba(206, 207, 207, 0.2), 15px -15px 30px rgba(206, 207, 207, 0.2), -15px -15px 30px rgba(255, 255, 255, 0.9), 15px 15px 38px rgba(206, 207, 207, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(206, 207, 207, 0.5)",
            "neu-menu-input":
                "-1px 1px 2px rgba(242, 255, 255, 0.2), 1px -1px 2px rgba(242, 255, 255, 0.2), -1px -1px 2px rgba(86, 88, 102, 0.6), 1px 1px 3px rgba(22, 22, 26, 0.6)",
        },
        dropShadow: {},
    },
    variants: {
        extend: {
            boxShadow: ["active"],
        },
    },
}
