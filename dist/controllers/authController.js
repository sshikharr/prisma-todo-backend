"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllerSignup = controllerSignup;
exports.controllerSignin = controllerSignin;
const authService_1 = require("../services/authService");
const validation_1 = require("../utils/validation");
async function controllerSignup(req, res) {
    try {
        const validation = validation_1.signupSchema.parse(req.body);
        console.log(validation);
        const user = await (0, authService_1.signup)(validation.username, validation.name, validation.password);
        res.status(201).json({
            user: user
        });
    }
    catch {
        res.status(400).json({ error: "Send correct inputs" });
    }
}
async function controllerSignin(req, res) {
    try {
        const validation = validation_1.signinSchema.parse(req.body);
        const token = await (0, authService_1.signin)(validation.username, validation.password);
        res.status(201).json({
            token: token
        });
    }
    catch {
        res.status(400).json({ error: "Invalid inputs" });
    }
}
