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

function getById(id) {
  const post = db('posts').where({id}).first();
  return post;
}

async function create(newPost) {
  const post = db('posts').insert(newPost);
  return post;
}

function update(id, newData) {
  return db('posts').update(newData).where({id});
}

function remove(id) {
  return db('posts').del().where({ id });
}
