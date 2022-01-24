import { Dispatch } from "react";
import {
  addBusiness,
  AddBusinessProps,
  deleteBusiness,
  getBusiness,
  getBusinessData,
  updateBusiness,
} from "../../services/business";
import {
  BUSINESS_CREATE_ERROR,
  BUSINESS_CREATE_REQUEST,
  BUSINESS_CREATE_RESET,
  BUSINESS_CREATE_SUCCESS,
  BUSINESS_DATA_ERROR,
  BUSINESS_DATA_REQUEST,
  BUSINESS_DATA_SUCCESS,
  BUSINESS_DELETE_ERROR,
  BUSINESS_DELETE_REQUEST,
  BUSINESS_DELETE_SUCCESS,
  BUSINESS_LIST_ERROR,
  BUSINESS_LIST_REQUEST,
  BUSINESS_LIST_SUCCESS,
  BUSINESS_UPDATE_ERROR,
  BUSINESS_UPDATE_REQUEST,
  BUSINESS_UPDATE_SUCCESS,
} from "../redux-types";
import { ReducerProps } from "../types";

export const getBusinessList = () => (dispatch: Dispatch<ReducerProps>) => {
  dispatch({
    type: BUSINESS_LIST_REQUEST,
  });
  getBusiness()
    .then((payload) => {
      dispatch({
        type: BUSINESS_LIST_SUCCESS,
        payload,
      });
    })
    .catch((error) => {
      console.error({ error });
      dispatch({
        type: BUSINESS_LIST_ERROR,
        payload: "Has occurred an error while get business data",
      });
    });
};

export const getBusinessDetails =
  (businessId: string) => (dispatch: Dispatch<ReducerProps>) => {
    dispatch({
      type: BUSINESS_DATA_REQUEST,
    });
    getBusinessData(businessId)
      .then((payload) => {
        dispatch({
          type: BUSINESS_DATA_SUCCESS,
          payload,
        });
      })
      .catch((error) => {
        console.error({ error });
        dispatch({
          type: BUSINESS_DATA_ERROR,
          payload: "Has occurred an error while get business data",
        });
      });
  };

export const createBusiness =
  (business: AddBusinessProps) => (dispatch: Dispatch<ReducerProps>) => {
    dispatch({
      type: BUSINESS_CREATE_REQUEST,
    });
    addBusiness(business)
      .then(() => {
        dispatch({
          type: BUSINESS_CREATE_SUCCESS,
        });
        getBusinessList()(dispatch);
      })
      .catch((error) => {
        console.error({ error });
        dispatch({
          type: BUSINESS_CREATE_ERROR,
          payload: "Has occurred an error while create business",
        });
      });
  };

export const editBusiness =
  (businessId: string, business: AddBusinessProps) =>
  (dispatch: Dispatch<ReducerProps>) => {
    dispatch({
      type: BUSINESS_UPDATE_REQUEST,
    });
    updateBusiness(businessId, business)
      .then(() => {
        dispatch({
          type: BUSINESS_UPDATE_SUCCESS,
        });
        getBusinessList()(dispatch);
      })
      .catch((error) => {
        console.error({ error });
        dispatch({
          type: BUSINESS_UPDATE_ERROR,
          payload: "Has occurred an error while update business",
        });
      });
  };

export const removeBusiness =
  (businessId: string) => (dispatch: Dispatch<ReducerProps>) => {
    dispatch({
      type: BUSINESS_DELETE_REQUEST,
    });
    deleteBusiness(businessId)
      .then(() => {
        dispatch({
          type: BUSINESS_DELETE_SUCCESS,
        });
        getBusinessList()(dispatch);
      })
      .catch((error) => {
        console.error({ error });
        dispatch({
          type: BUSINESS_DELETE_ERROR,
          payload: "Has occurred an error while remove business",
        });
      });
  };

export const resetBusiness = () => (dispatch: Dispatch<ReducerProps>) => {
  dispatch({
    type: BUSINESS_CREATE_RESET,
  });
};
