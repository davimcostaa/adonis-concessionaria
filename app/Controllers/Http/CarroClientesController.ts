// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import CarroCliente from "App/Models/CarroCliente"

export default class CarroClientesController {
    async index() {
        return await CarroCliente.query().paginate(1,2)
    }

    store({request}) {
        const dados = request.only(['nome'])

        return CarroCliente.create(dados)
    }

    async show({request}) {
        const id = request.param('id')
        return await CarroCliente.findOrFail(id)
    }

    async update({request}) {
        const id = request.param('id')
        const dados = request.only(['nome'])
        const carrocliente = await CarroCliente.findOrFail(id)

        carrocliente.merge(dados)
        return carrocliente.save()
    }

    async destroy({request}) {
        const id = request.param('id')
        const carrocliente = await CarroCliente.findOrFail(id)

        return carrocliente.delete()
    }
}
