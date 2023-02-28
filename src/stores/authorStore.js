import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _authors = [];

class AuthorStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback); //not removeChangeListener
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getAuthors() {
    return _authors;
  }
}

const store = new AuthorStore();

dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.LOAD_AUTHORS:
      _authors = action.authors;
      store.emitChange();
      break;
    default:
    //nothing to do
  }
});
export default store;
