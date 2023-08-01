const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testdemo');
const crudSchema = new mongoose.Schema({ name: String, age: Number });

const addData = async (data) => {
    const crudModel = mongoose.model('crud', crudSchema);
    let dataToAdd = new crudModel(data);
    let result = await dataToAdd.save();
    console.log(result);
    return result;
}

const updateData = async (id, dataToUpdated) => {
    const crudModel = mongoose.model('crud', crudSchema);
    let data = await crudModel.updateOne({ _id: id }, { $set: dataToUpdated });
    console.log(data);
    return data;
}

const deleteData = async (id) => {
    const crudModel = mongoose.model('crud', crudSchema);
    let data = await crudModel.deleteOne({ _id: id });
    console.log(data);
    return data;
}

const getData = async () => {
    const crudModel = mongoose.model('crud', crudSchema);
    let data = await crudModel.find();
    console.log(data);
    return data;
}

const searchData = async (key) => {
    const crudModel = mongoose.model('crud', crudSchema);
    let data = await crudModel.find({ _id: key });
    console.log(data);
    return data;
}

module.exports = { addData, updateData, deleteData, getData, searchData };