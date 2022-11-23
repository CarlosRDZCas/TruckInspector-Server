const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const intercambiosSchema = mongoose.Schema({
    datos: {
        folio: {
            type: Number,
            required: true,
            unique: true
        },
        eos: {
            type: String,
            required: true
        },
        fechaintercambio: {
            type: Date,
            required: true
        },
        movimiento: {
            type: String,
            required: true
        },
        unidad: {
            type: Number,
            required: true
        },
        placasunidad: {
            type: String,
            required: true
        },
        tipoplacas: {
            type: String,
            required: true
        },
        operador: {
            type: String,
            required: true
        },
        linea: {
            type: String,
            required: true
        },
        cliente: {
            type: String,
            required: true
        },
        origen: {
            type: String,
            required: true
        },
        destino: {
            type: String,
            required: true
        },
        comentarios: {
            type: String,
            required: true
        }
    },

    trailer: {
        tipo: {
            type: String,
            required: true
        },
        numerotrailer: {
            type: String,
            required: true
        },
        placastrailer: {
            type: String,
            required: true
        },
        estadoprocedencia: {
            type: String,
            required: true
        },
        propietario: {
            type: String,
            required: true
        },
        chasis: {
            type: String,
            required: true
        },
        cajon: {
            type: Number,
            required: true
        },
        bloqueado: {
            type: Boolean,
            required: true
        },
        apto: {
            type: Boolean,
            required: true
        },
        cargado: {
            type: Boolean,
            required: true
        },
        sellos: {
            type: String,
            required: true
        }
    },
    llantas: {
        posicion1: {
            marca: {
                type: String,
                required: true
            },
            estado: {
                type: String,
                required: true
            },
            profundidad: {
                type: Number,
                required: true
            }
        },
        posicion2: {
            marca: {
                type: String,
                required: true
            },
            estado: {
                type: String,
                required: true
            },
            profundidad: {
                type: Number,
                required: true
            }
        },
        posicion3: {
            marca: {
                type: String,
                required: true
            },
            estado: {
                type: String,
                required: true
            },
            profundidad: {
                type: Number,
                required: true
            }
        },
        posicion4: {
            marca: {
                type: String,
                required: true
            },
            estado: {
                type: String,
                required: true
            },
            profundidad: {
                type: Number,
                required: true
            }
        },
        posicion5: {
            marca: {
                type: String,
                required: true
            },
            estado: {
                type: String,
                required: true
            },
            profundidad: {
                type: Number,
                required: true
            }
        },
        posicion6: {
            marca: {
                type: String,
                required: true
            },
            estado: {
                type: String,
                required: true
            },
            profundidad: {
                type: Number,
                required: true
            }
        },
        posicion7: {
            marca: {
                type: String,
                required: true
            },
            estado: {
                type: String,
                required: true
            },
            profundidad: {
                type: Number,
                required: true
            }
        },
        posicion8: {
            marca: {
                type: String,
                required: true
            },
            estado: {
                type: String,
                required: true
            },
            profundidad: {
                type: Number,
                required: true
            },
        }
    },
    imagenes: {
        frontalderecho: {
            type: String,
            required: true
        },
        lateralderecho: {
            type: String,
            required: true
        },
        puertas: {
            type: String,
            required: true
        },
        sello: {
            type: String,
            required: true
        },
        lateralizquierdo: {
            type: String,
            required: true
        },
        frontalizquierdo: {
            type: String,
            required: true
        },
        llantaseje1: [{
            type: String,
            required: true
        }],
        llantaseje2: [{
            type: String,
            required: true
        }],
        daños: [{
            type: String,
            required: true
        }]
    },
    accesorios: {
        lucestraseras: {
            type: Boolean,
            required: true
        },
        lucesfrente: {
            type: Boolean,
            required: true
        },
        luceslaterales: {
            type: Boolean,
            required: true
        },
        lucesreflejantes: {
            type: Boolean,
            required: true
        },
        manivela: {
            type: Boolean,
            required: true
        },
        patines: {
            type: Boolean,
            required: true
        },
        zoqueteras: {
            type: Boolean,
            required: true
        },
        estribo: {
            type: Boolean,
            required: true
        },
        lucesalto: {
            type: Boolean,
            required: true
        },
        luzplaca: {
            type: Boolean,
            required: true
        },
        gomas: {
            type: Boolean,
            required: true
        },
        coples: {
            type: Boolean,
            required: true
        },
        quintarueda: {
            type: Boolean,
            required: true
        },
        mangueras: {
            type: Boolean,
            required: true
        },
        lineasdeaire: {
            type: Boolean,
            required: true
        }
    }
});



intercambiosSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    return object;
});

intercambiosSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('intercambios', intercambiosSchema);