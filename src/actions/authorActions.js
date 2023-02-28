import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";
import * as authorApi from "../api/authorApi";

export default function loadAuthors() {
  return authorApi.getAuthors().then((_authors) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_AUTHORS,
      authors: _authors,
    });
  });
}
