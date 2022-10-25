// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Modelo from "App/Models/Modelo"

export default class ModelosController {
    async index() {
        return await Modelo.query()
                .preload('marca')
                .paginate(1,2)
    }

    store({request}) {
        const dados = request.only(['nome'])

        return Modelo.create(dados)
    }

    async show({request}) {
        const id = request.param('id')
        return await Modelo.findOrFail(id)
    }

    async update({request}) {
        const id = request.param('id')
        const dados = request.only(['nome'])
        const modelo = await Modelo.findOrFail(id)

        modelo.merge(dados)
        return modelo.save()
    }

    async destroy({request}) {
        const id = request.param('id')
        const modelo = await Modelo.findOrFail(id)

        return modelo.delete()
    }
}
