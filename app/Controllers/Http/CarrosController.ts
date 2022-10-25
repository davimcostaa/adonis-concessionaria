// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Carro from "App/Models/Carro"

export default class CarrosController {
    async index() {
        return await Carro.query().paginate(1,2)
    }

    store({request}) {
        const dados = request.only(['nome'])

        return Carro.create(dados)
    }

    async show({request}) {
        const id = request.param('id')
        return await Carro.findOrFail(id)
    }

    async update({request}) {
        const id = request.param('id')
        const dados = request.only(['nome'])
        const carro = await Carro.findOrFail(id)

        carro.merge(dados)
        return carro.save()
    }

    async destroy({request}) {
        const id = request.param('id')
        const carro = await Carro.findOrFail(id)

        return carro.delete()
    }
}
