// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Cliente from "App/Models/Cliente"

export default class ClientesController {
    async index() {
        return await Cliente.query().paginate(1,2)
    }

    store({request}) {
        const dados = request.only(['nome'])

        return Cliente.create(dados)
    }

    async show({request}) {
        const id = request.param('id')
        return await Cliente.findOrFail(id)
    }

    async update({request}) {
        const id = request.param('id')
        const dados = request.only(['nome'])
        const cliente = await Cliente.findOrFail(id)

        cliente.merge(dados)
        return cliente.save()
    }

    async destroy({request}) {
        const id = request.param('id')
        const cliente = await Cliente.findOrFail(id)

        return cliente.delete()
    }
}