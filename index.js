const plugin = require("tailwindcss/plugin");

const percentageUtils = plugin(({e, addUtilities}) => {
    const lista = [...Array(101).keys()];

    const newUtilities = lista.map((x) => {
        return {
            [`.${e(`w-${x}/100`)}`]: {
                width: `${x}%`,
            },
            [`.${e(`h-${x}/100`)}`]: {
                height: `${x}%`,
            },
            [`.${e(`min-w-${x}/100`)}`]: {
                "min-width": `${x}%`,
            },
            [`.${e(`max-w-${x}/100`)}`]: {
                "max-width": `${x}%`,
            },
            [`.${e(`min-h-${x}/100`)}`]: {
                "min-height": `${x}%`,
            },
            [`.${e(`max-h-${x}/100`)}`]: {
                "max-height": `${x}%`,
            },
            [`.${e(`p-${x}/100`)}`]: {
                padding: `${x}%`,
            },
            [`.${e(`pl-${x}/100`)}`]: {
                "padding-left": `${x}%`,
            },
            [`.${e(`pr-${x}/100`)}`]: {
                "padding-right": `${x}%`,
            },
            [`.${e(`pt-${x}/100`)}`]: {
                "padding-top": `${x}%`,
            },
            [`.${e(`pb-${x}/100`)}`]: {
                "padding-bottom": `${x}%`,
            },
            [`.${e(`m-${x}/100`)}`]: {
                margin: `${x}%`,
            },
            [`.${e(`ml-${x}/100`)}`]: {
                "margin-left": `${x}%`,
            },
            [`.${e(`mr-${x}/100`)}`]: {
                "margin-right": `${x}%`,
            },
            [`.${e(`mt-${x}/100`)}`]: {
                "margin-top": `${x}%`,
            },
            [`.${e(`mb-${x}/100`)}`]: {
                "margin-bottom": `${x}%`,
            },
            [`.${e(`my-${x}/100`)}`]: {
                "margin-top": `${x}%`,
                "margin-bottom": `${x}%`,
            },
            [`.${e(`mx-${x}/100`)}`]: {
                "margin-left": `${x}%`,
                "margin-right": `${x}%`,
            },
            [`.${e(`py-${x}/100`)}`]: {
                "padding-top": `${x}%`,
                "padding-bottom": `${x}%`,
            },
            [`.${e(`px-${x}/100`)}`]: {
                "padding-left": `${x}%`,
                "padding-right": `${x}%`,
            },
        };
    });

    addUtilities(newUtilities);
});

module.exports = percentageUtils;
