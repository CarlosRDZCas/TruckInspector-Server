const { response } = require('express')
const { generarJWT } = require('../helpers/jwt')
const bcrypt = require('bcrypt');

const userSchema = require('../models/usersModel');
const usersModel = require('../models/usersModel');

const postUser = async (req, res = response) => {
    const { usuario, password } = req.body
    try {
        const existeusuario = await userSchema.findOne({ usuario })

        if (existeusuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya esta registrado'
            });
        }
        const user = userSchema(req.body)
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);
        await user.save()

        const token = await generarJWT(user.id);
        res.json({
            ok: true,
            user,
            token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

const login = async (req, res = response) => {
    const { usuario, password } = req.body

    try {
        const user = await userSchema.findOne({ usuario })

        if (!user) {
            return res.status(404).json(
                {
                    ok: false,
                    msg: "usuario no encontrado"
                });
        }

        const validPassword = bcrypt.compareSync(password, user.password);

        if (!validPassword) {
            return res.status(400).json(
                {
                    ok: false,
                    msg: 'La contraseña es invalida'
                });
        }

        const token = await generarJWT(user.id);

        res.json({
            ok: true,
            usuario: user,
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'

        })
    }
}

const renewToken = async (req, res) => {
    const uid = req.uid
    const token = await generarJWT(uid)
    const user = await userSchema.findById( uid)

    res.json({
        ok: true,
        usuario: user,
        token
    })
}

module.exports = {
    postUser,
    login,
    renewToken
}