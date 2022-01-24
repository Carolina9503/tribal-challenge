import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createPerson, editPerson } from "../../../redux/actions/personActions";
import { RootState } from "../../../redux/reducers";
import { PersonReducersProps } from "../../../redux/reducers/personReducers";
import { PERSON_CREATE, PERSON_UPDATE } from "../../../redux/redux-types";
import { AddPersonProps, PersonAttr } from "../../../services/person";

import { Button } from "../../button/Button";
import { Input } from "../../input/Input";
import "./PersonModal.css";

type PersonModalProps = {
  businessId: string;
  show: boolean;
  onHide: () => unknown;
  person?: PersonAttr | null;
  onSuccess: () => unknown;
};

const initialState: AddPersonProps = {
  email: "",
  join_date: "",
  name: "",
  role: "",
  phone: "",
};

export const PersonModal = ({
  businessId,
  show,
  onHide,
  onSuccess,
  person,
}: PersonModalProps) => {
  const personsData = useSelector(
    (state: RootState) => state.person as PersonReducersProps
  );
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddPersonProps>();

  const isEdit = !!person?.personId;

  const onSubmit = handleSubmit((data) => {
    if (isEdit) {
      dispatch(editPerson(person.personId, businessId, data));
    } else {
      dispatch(createPerson(businessId, data));
    }
  });

  useEffect(() => {
    if (
      !personsData.loading &&
      personsData.success &&
      [PERSON_CREATE, PERSON_UPDATE].includes(personsData.type || "")
    ) {
      onSuccess();
    }
  }, [personsData.loading, personsData.success, onSuccess, personsData.type]);

  useEffect(() => {
    if (person) {
      reset(person || undefined);
    } else {
      reset(initialState);
    }
  }, [person, reset]);

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Body>
        <Modal.Title>{isEdit ? "Edit" : "Create"} Person</Modal.Title>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label className="name">Name</label>
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
          <div className="form-group">
            <label className="name">Role</label>
            <Input
              type="text"
              register={{
                ...register("role", { required: "Role is required" }),
              }}
            />
            {errors.role && (
              <small className="text-danger">{errors.role.message}</small>
            )}
          </div>
          <div className="form-group">
            <label className="name">Email</label>
            <Input
              type="email"
              register={{
                ...register("email", { required: "Email is required" }),
              }}
            />
            {errors.email && (
              <small className="text-danger">{errors.email.message}</small>
            )}
          </div>
          <div className="form-group">
            <label className="name">Phone</label>
            <Input
              type="number"
              register={{
                ...register("phone", { required: "Phone is required" }),
              }}
            />
            {errors.phone && (
              <small className="text-danger">{errors.phone.message}</small>
            )}
          </div>
          <div className="form-group">
            <label className="name">Join Date</label>
            <Input
              type="date"
              register={{
                ...register("join_date", { required: "Date is required" }),
              }}
            />
            {errors.join_date && (
              <small className="text-danger">{errors.join_date.message}</small>
            )}
          </div>
          <div className="buttons">
            <Button
              name="Cancel"
              styleButton="secondary"
              onClick={() => onHide && onHide()}
            />
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
