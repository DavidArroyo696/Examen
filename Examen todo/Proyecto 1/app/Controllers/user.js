const { default: mongoose } = require('mongoose');
const model = require('../models/user')

const options = {
    page: 1,
    limit: 10
};

const parseId = (id) => {
    return mongoose.Types.ObjectId(id)
}

exports.getData = (req, res) => {
    model.paginate({}, options, (err, docs) => {
        res.send({
            items: docs
        })
    })
}

exports.getSingles = (req, res) => {
    model.findOne({ _id: parseId(req.params.id) },
        (err, docs) => {
            res.send({
                items: docs
            })
        })
}

exports.updateSingles = (req, res) => {
    const { id } = req.params
    const body = req.body
    model.updateOne({ _id: parseId(id) },
        body,
        (err, docs) => {
            res.send({
                items: docs
            })
        })

}

exports.insertData = (req, res) => {
    const data = req.body
    console.log(data)
    model.create(data, (err, docs) => {
        if (err) {
            console.log(err)
            return res.send({ error: err }, 422)
        } else {
            return res.send({ data: docs })
        }
        return res.send({ data: docs })
    })
}

exports.deleteSingles = (req, res) => {
    const { id } = req.params
    model.deleteOne({ _id: parseId(id) },
        (err, docs) => {
            res.send({
                items: docs
            })
        })
}