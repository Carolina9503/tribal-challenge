import { Dispatch } from "react";
import {
  addPerson,
  AddPersonProps,
  deletePerson,
  getPersons,
  updatePerson,
} from "../../services/person";
import {
  PERSON_CREATE_ERROR,
  PERSON_CREATE_REQUEST,
  PERSON_CREATE_RESET,
  PERSON_CREATE_SUCCESS,
  PERSON_DELETE_ERROR,
  PERSON_DELETE_REQUEST,
  PERSON_DELETE_SUCCESS,
  PERSON_LIST_ERROR,
  PERSON_LIST_REQUEST,
  PERSON_LIST_SUCCESS,
  PERSON_UPDATE_ERROR,
  PERSON_UPDATE_REQUEST,
  PERSON_UPDATE_SUCCESS,
} from "../redux-types";
import { ReducerProps } from "../types";

export const getPersonList =
  (businessId: string) => (dispatch: Dispatch<ReducerProps>) => {
    dispatch({
      type: PERSON_LIST_REQUEST,
    });
    getPersons(businessId)
      .then((payload) => {
        dispatch({
          type: PERSON_LIST_SUCCESS,
          payload,
        });
      })
      .catch((error) => {
        console.error({ error });
        dispatch({
          type: PERSON_LIST_ERROR,
          payload: "Has occurred an error while get person data",
        });
      });
  };

export const createPerson =
  (businessId: string, person: AddPersonProps) =>
  (dispatch: Dispatch<ReducerProps>) => {
    dispatch({
      type: PERSON_CREATE_REQUEST,
    });
    addPerson(businessId, person)
      .then(() => {
        dispatch({
          type: PERSON_CREATE_SUCCESS,
        });
        getPersonList(businessId)(dispatch);
      })
      .catch((error) => {
        console.error({ error });
        dispatch({
          type: PERSON_CREATE_ERROR,
          payload: "Has occurred an error while create person",
        });
      });
  };

export const editPerson =
  (personId: string, businessId: string, person: AddPersonProps) =>
  (dispatch: Dispatch<ReducerProps>) => {
    dispatch({
      type: PERSON_UPDATE_REQUEST,
    });
    updatePerson(personId, businessId, person)
      .then(() => {
        dispatch({
          type: PERSON_UPDATE_SUCCESS,
        });
        getPersonList(businessId)(dispatch);
      })
      .catch((error) => {
        console.error({ error });
        dispatch({
          type: PERSON_UPDATE_ERROR,
          payload: "Has occurred an error while update person",
        });
      });
  };

export const removePerson =
  (personId: string, businessId: string) =>
  (dispatch: Dispatch<ReducerProps>) => {
    dispatch({
      type: PERSON_DELETE_REQUEST,
    });
    deletePerson(personId, businessId)
      .then(() => {
        dispatch({
          type: PERSON_DELETE_SUCCESS,
        });
        getPersonList(businessId)(dispatch);
      })
      .catch((error) => {
        console.error({ error });
        dispatch({
          type: PERSON_DELETE_ERROR,
          payload: "Has occurred an error while delete person",
        });
      });
  };

export const resetPerson = () => (dispatch: Dispatch<ReducerProps>) => {
  dispatch({
    type: PERSON_CREATE_RESET,
  });
};
