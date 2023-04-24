const EntityShema = require("typeorm").EntitySchema;

module.exports = new EntityShema({
    name: "Wilder",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        name: {
            type: "text",
        },
    },
});
