import React from "react";
import { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  createBusiness,
  editBusiness,
} from "../../../redux/actions/businessActions";
import { RootState } from "../../../redux/reducers";
import { BusinessReducersProps } from "../../../redux/reducers/businessReducers";
import { BUSINESS_CREATE, BUSINESS_UPDATE } from "../../../redux/redux-types";
import { AddBusinessProps, BusinessAttr } from "../../../services/business";
import { Button } from "../../button/Button";
import { Input } from "../../input/Input";

type BusinessModalProps = {
  show: boolean;
  onHide: () => unknown;
  business?: BusinessAttr | null;
  onSuccess: () => unknown;
};

const initialState: AddBusinessProps = {
  name: "",
};
export const BusinessModal = ({
  show,
  onHide,
  business,
  onSuccess,
}: BusinessModalProps) => {
  const businessData = useSelector(
    (state: RootState) => state.business as BusinessReducersProps
  );
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddBusinessProps>();

  const isEdit = !!business?.businessId;

  const onSubmit = handleSubmit((data) => {
    if (isEdit) {
      dispatch(editBusiness(business.businessId, data));
    } else {
      dispatch(createBusiness(data));
    }
  });

  useEffect(() => {
    if (
      !businessData.loading &&
      businessData.success &&
      [BUSINESS_CREATE, BUSINESS_UPDATE].includes(businessData.type || "")
    ) {
      onSuccess();
    }
  }, [
    businessData.loading,
    businessData.success,
    onSuccess,
    businessData.type,
  ]);

  useEffect(() => {
    if (!show) {
      reset(initialState);
    } else if (business) {
      reset(business || undefined);
    } else {
      reset(initialState);
    }
  }, [business, reset, show]);

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Body>
        <Modal.Title>{isEdit ? "Edit" : "Create"} Business</Modal.Title>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label className="form-label">Name</label>
            <Input
              type="text"
              register={{
                ...register("name", { required: "Name is required" }),
              }}
            />
            {errors.name && (
              <small className="text-danger">{errors.name.message}</small>
            )}
          </div>
          <div className="d-flex justify-content-center gap-3">
            <Button name="Cancel" styleButton="secondary" onClick={onHide} />
            <Button
              name={isEdit ? "Save" : "Create"}
              styleButton="primary"
              type="submit"
            />
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};
