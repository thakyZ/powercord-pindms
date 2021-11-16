const { open } = require('powercord/modal');
const newCategoryModal = require('../components/NewCategoryModal');

function addToNewCategoryModal (keys, id, callback) {
  open(newCategoryModal(keys, id, callback));
}

function addToServerList (settingsMgr, id) {
  console.log(id);
}

module.exports = {
  addToNewCategoryModal,
  addToServerList
};
