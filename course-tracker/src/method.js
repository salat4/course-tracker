const {getCourses} = require("./getCourse")
const {deleteCourse} = require("./deleteCourse")
const {updateCourse} = require("./updateCourse")
const {createCourse} = require("./createCourse")


const responseMethod = async(req) =>{
    if (req.method === 'GET') {
      return await getCourses(req)
    }
    if (req.method === 'POST') {
      return await createCourse(req)
    }
    if (req.method === 'PUT') {
      return await updateCourse(req)
    }
    if (req.method === 'DELETE') {
      return await deleteCourse(req)
    }
  }

  module.exports = {responseMethod}