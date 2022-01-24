import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removePerson } from "../../../redux/actions/personActions";

import { RootState } from "../../../redux/reducers";
import { PersonReducersProps } from "../../../redux/reducers/personReducers";

import { PERSON_DELETE } from "../../../redux/redux-types";
import { PersonAttr } from "../../../services/person";

import { Button } from "../../button/Button";

type PersonDeleteProps = {
  businessId: string;
  show: boolean;
  onHide: () => unknown;
  person?: PersonAttr | null;
  onSuccess: () => unknown;
};

export const PersonDelete = ({
  businessId,
  show,
  onHide,
  person,
  onSuccess,
}: PersonDeleteProps) => {
  const personData = useSelector(
    (state: RootState) => state.person as PersonReducersProps
  );
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removePerson(person?.personId!, businessId));
  };
  useEffect(() => {
    if (
      !personData.loading &&
      personData.success &&
      personData.type === PERSON_DELETE
    ) {
      onSuccess();
    }
  }, [personData.loading, personData.success, onSuccess, personData.type]);
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Body>
        <Modal.Title>Are you sure to delete {person?.name}?</Modal.Title>
        <div className="mt-3 d-flex justify-content-center gap-3">
          <Button name="Cancel" styleButton="secondary" onClick={onHide} />
          <Button name="Remove" styleButton="danger" onClick={handleDelete} />
        </div>
      </Modal.Body>
    </Modal>
  );
};
