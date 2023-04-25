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
    relations: {
        skill: {
            target: "Skill",
            type: "many-to-many",
            joinTable: true,
            eager: true,
        },
    },
});
