const z = require("zod");

const user = z.object({
    email: z.string().email({ required_error: "email is Required" })
        .min(5, { message: "email is Required" }),

    password: z.string({ required_error: "Password is required" })
        .min(5, { message: "minimum size of 5 is requried" })
});

const todo = z.object({
    title: z.string({ required_error: "Title is Required" })
        .min(1, { message: "Title is Required" }),

    description: z.string({ required_error: "Description is Requried" })
        .min(1, { message: "Description is Required" }),

    tag: z.string({ required_error: "tag error" })
});

module.exports = { user, todo };