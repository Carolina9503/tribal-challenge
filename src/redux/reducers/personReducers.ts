import { PersonAttr } from "../../services/person";
import {
  PERSON_CREATE,
  PERSON_CREATE_ERROR,
  PERSON_CREATE_REQUEST,
  PERSON_CREATE_RESET,
  PERSON_CREATE_SUCCESS,
  PERSON_DELETE,
  PERSON_DELETE_ERROR,
  PERSON_DELETE_REQUEST,
  PERSON_DELETE_RESET,
  PERSON_DELETE_SUCCESS,
  PERSON_LIST,
  PERSON_LIST_ERROR,
  PERSON_LIST_REQUEST,
  PERSON_LIST_SUCCESS,
  PERSON_UPDATE,
  PERSON_UPDATE_ERROR,
  PERSON_UPDATE_REQUEST,
  PERSON_UPDATE_RESET,
  PERSON_UPDATE_SUCCESS,
} from "../redux-types";
import { ReducerProps } from "../types";

export type PersonReducersProps = {
  loading: boolean;
  data: Array<PersonAttr>;
  error: null | string;
  success: null | string;
  type: null | string;
};
const initialState = {
  loading: false,
  data: [],
  error: null,
  type: null,
  success: null,
};

const personReducers = (
  state: PersonReducersProps = initialState,
  { type, payload }: ReducerProps
) => {
  switch (type) {
    case PERSON_LIST_REQUEST:
      return {
        ...state,
        data: [],
        loading: true,
        error: null,
        type: PERSON_LIST,
      };

    case PERSON_LIST_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: null,
        type: PERSON_LIST,
      };

    case PERSON_LIST_ERROR:
      return {
        ...state,
        data: [],
        loading: false,
        error: payload,
        type: PERSON_LIST,
      };

    case PERSON_CREATE_REQUEST:
      return { ...state, loading: true, type: PERSON_CREATE, success: null };

    case PERSON_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        type: PERSON_CREATE,
        success: "Person has been created successfully",
      };

    case PERSON_CREATE_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
        type: PERSON_CREATE,
        success: null,
      };

    case PERSON_CREATE_RESET:
      return {
        ...state,
        loading: false,
        type: PERSON_CREATE,
        success: null,
        error: null,
      };

    case PERSON_UPDATE_REQUEST:
      return { ...state, loading: true, type: PERSON_UPDATE, success: null };

    case PERSON_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        type: PERSON_UPDATE,
        success: "Person has been updated successfully",
      };

    case PERSON_UPDATE_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
        type: PERSON_UPDATE,
        success: null,
      };

    case PERSON_UPDATE_RESET:
      return {
        ...state,
        loading: false,
        type: PERSON_UPDATE,
        success: null,
        error: null,
      };

    case PERSON_DELETE_REQUEST:
      return { ...state, loading: true, type: PERSON_DELETE, success: null };

    case PERSON_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        type: PERSON_DELETE,
        success: "Person has been deleted successfully",
      };

    case PERSON_DELETE_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
        type: PERSON_DELETE,
        success: null,
      };

    case PERSON_DELETE_RESET:
      return {
        ...state,
        loading: false,
        type: PERSON_DELETE,
        success: null,
        error: null,
      };

    default:
      return state;
  }
};

export default personReducers;
