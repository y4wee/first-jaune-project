const EntityShema = require("typeorm").EntitySchema;

module.exports = new EntityShema({
    name: "Skill",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        name: {
            type: "text",
            unique: true,
        },
    },
});
