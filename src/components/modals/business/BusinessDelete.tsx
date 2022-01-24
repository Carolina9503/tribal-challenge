import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeBusiness } from "../../../redux/actions/businessActions";
import { RootState } from "../../../redux/reducers";
import { BusinessReducersProps } from "../../../redux/reducers/businessReducers";
import { BUSINESS_DELETE } from "../../../redux/redux-types";
import { BusinessAttr } from "../../../services/business";
import { Button } from "../../button/Button";
import "./BusinessDelete.css";

type BusinessDeleteProps = {
  show: boolean;
  onHide: () => unknown;
  business?: BusinessAttr | null;
  onSuccess: () => unknown;
};

export const BusinessDelete = ({
  show,
  onHide,
  business,
  onSuccess,
}: BusinessDeleteProps) => {
  const businessData = useSelector(
    (state: RootState) => state.business as BusinessReducersProps
  );
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeBusiness(business?.businessId!));
  };
  useEffect(() => {
    if (
      !businessData.loading &&
      businessData.success &&
      businessData.type === BUSINESS_DELETE
    ) {
      onSuccess();
    }
  }, [
    businessData.loading,
    businessData.success,
    onSuccess,
    businessData.type,
  ]);
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Body>
        <Modal.Title>Are you sure to delete {business?.name}?</Modal.Title>
        <div className="mt-3 d-flex justify-content-center gap-3">
          <Button name="Cancel" styleButton="secondary" onClick={onHide} />
          <Button name="Remove" styleButton="danger" onClick={handleDelete} />
        </div>
      </Modal.Body>
    </Modal>
  );
};
