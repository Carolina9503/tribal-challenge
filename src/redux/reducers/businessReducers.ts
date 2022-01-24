import { BusinessAttr } from "../../services/business";
import {
  BUSINESS_CREATE,
  BUSINESS_CREATE_ERROR,
  BUSINESS_CREATE_REQUEST,
  BUSINESS_CREATE_RESET,
  BUSINESS_CREATE_SUCCESS,
  BUSINESS_DATA,
  BUSINESS_DATA_ERROR,
  BUSINESS_DATA_REQUEST,
  BUSINESS_DATA_SUCCESS,
  BUSINESS_DELETE,
  BUSINESS_DELETE_ERROR,
  BUSINESS_DELETE_REQUEST,
  BUSINESS_DELETE_RESET,
  BUSINESS_DELETE_SUCCESS,
  BUSINESS_LIST,
  BUSINESS_LIST_ERROR,
  BUSINESS_LIST_REQUEST,
  BUSINESS_LIST_SUCCESS,
  BUSINESS_UPDATE,
  BUSINESS_UPDATE_ERROR,
  BUSINESS_UPDATE_REQUEST,
  BUSINESS_UPDATE_RESET,
  BUSINESS_UPDATE_SUCCESS,
} from "../redux-types";
import { ReducerProps } from "../types";

export type BusinessReducersProps = {
  loading: boolean;
  data: Array<BusinessAttr>;
  businessData: BusinessAttr | null;
  error: null | string;
  success: null | string;
  type: null | string;
};
const initialState = {
  loading: false,
  data: [],
  businessData: null,
  error: null,
  type: null,
  success: null,
};

const businessReducers = (
  state: BusinessReducersProps = initialState,
  { type, payload }: ReducerProps
) => {
  switch (type) {
    case BUSINESS_LIST_REQUEST:
      return {
        ...state,
        data: [],
        loading: true,
        error: null,
        type: BUSINESS_LIST,
      };

    case BUSINESS_LIST_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: null,
        type: BUSINESS_LIST,
      };

    case BUSINESS_LIST_ERROR:
      return {
        ...state,
        data: [],
        loading: false,
        error: payload,
        type: BUSINESS_LIST,
      };

    case BUSINESS_DATA_REQUEST:
      return {
        ...state,
        businessData: null,
        loading: true,
        error: null,
        type: BUSINESS_DATA,
      };

    case BUSINESS_DATA_SUCCESS:
      return {
        ...state,
        businessData: payload,
        loading: false,
        error: null,
        type: BUSINESS_DATA,
      };

    case BUSINESS_DATA_ERROR:
      return {
        ...state,
        businessData: null,
        loading: false,
        error: payload,
        type: BUSINESS_DATA,
      };

    case BUSINESS_CREATE_REQUEST:
      return { ...state, loading: true, type: BUSINESS_CREATE, success: null };

    case BUSINESS_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        type: BUSINESS_CREATE,
        success: "Business has been created successfully",
      };

    case BUSINESS_CREATE_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
        type: BUSINESS_CREATE,
        success: null,
      };

    case BUSINESS_CREATE_RESET:
      return {
        ...state,
        loading: false,
        type: BUSINESS_CREATE,
        success: null,
        error: null,
      };

    case BUSINESS_UPDATE_REQUEST:
      return { ...state, loading: true, type: BUSINESS_UPDATE, success: null };

    case BUSINESS_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        type: BUSINESS_UPDATE,
        success: "Business has been updated successfully",
      };

    case BUSINESS_UPDATE_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
        type: BUSINESS_UPDATE,
        success: null,
      };

    case BUSINESS_UPDATE_RESET:
      return {
        ...state,
        loading: false,
        type: BUSINESS_UPDATE,
        success: null,
        error: null,
      };

    case BUSINESS_DELETE_REQUEST:
      return { ...state, loading: true, type: BUSINESS_DELETE, success: null };

    case BUSINESS_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        type: BUSINESS_DELETE,
        success: "Business has been DELETEd successfully",
      };

    case BUSINESS_DELETE_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
        type: BUSINESS_DELETE,
        success: null,
      };

    case BUSINESS_DELETE_RESET:
      return {
        ...state,
        loading: false,
        type: BUSINESS_DELETE,
        success: null,
        error: null,
      };

    default:
      return state;
  }
};

export default businessReducers;
