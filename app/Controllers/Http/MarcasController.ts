// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Marca from "App/Models/Marca";

export default class MarcasController {

   async index() {
        return await Marca.query().preload('modelos').paginate(1,2)
    }

    store({request}) {
        const dados = request.only(['nome'])

        return Marca.create(dados)
    }

    async show({request}) {
        const id = request.param('id')
        return await Marca.findOrFail(id)
    }

    async update({request}) {
        const id = request.param('id')
        const dados = request.only(['nome'])
        const marca = await Marca.findOrFail(id)

        marca.merge(dados)
        return marca.save()
    }

    async destroy({request}) {
        const id = request.param('id')
        const marca = await Marca.findOrFail(id)

        return marca.delete()
    }


}
