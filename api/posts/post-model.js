const db = require('../../data/db-config');

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
}

async function get() {
  const sql = await db('posts').toString();
  console.log(sql);
  return db('posts');
  // return Promise.resolve('get wired')
}

function getById() {
  return Promise.resolve('getById wired')
}

function create() {
  return Promise.resolve('create wired')
}

function update() {
  return Promise.resolve('update wired')
}

function remove() {
  return Promise.resolve('delete wired')
}
