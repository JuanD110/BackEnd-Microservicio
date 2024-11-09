const mongoose = require('mongoose');
const Cliente = require('../models/Cliente'); // Importa el modelo Cliente
const TipoProyecto = require('../models/TipoProyecto'); // Importa el modelo TipoProyecto
const Universidad = require('../models/Universidad'); // Importa el modelo Universidad
const Etapa = require('../models/Etapa'); // Importa el modelo Etapa


const proyectoSchema = new mongoose.Schema({
    numero: { type: String, required: true, unique: true },
    titulo: { type: String, required: true },
    fecha_iniciacion: { type: Date, required: true },
    fecha_entrega: { type: Date, required: true },
    valor: { type: Number, required: true },
    fecha_creacion: { type: Date, default: Date.now },
    fecha_actualizacion: { type: Date, default: Date.now },
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' },
    tipo_proyecto: { type: mongoose.Schema.Types.ObjectId, ref: 'TipoProyecto' },
    universidad: { type: mongoose.Schema.Types.ObjectId, ref: 'Universidad' },
    etapa: { type: mongoose.Schema.Types.ObjectId, ref: 'Etapa' }
});

module.exports = mongoose.model('Proyecto', proyectoSchema);