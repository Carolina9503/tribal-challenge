import React, { useEffect, useState } from "react";
import { ImPencil } from "react-icons/im";
import { MdDeleteOutline } from "react-icons/md";
import { Button } from "../../components/button/Button";
import icon from "../../assets/icon/Icon.png";
import "./BusinessPerson.css";
import ContainerHeader from "../../components/container-header/ContainerHeader";
import { PersonModal } from "../../components/modals/person/PersonModal";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { PersonReducersProps } from "../../redux/reducers/personReducers";
import { BusinessReducersProps } from "../../redux/reducers/businessReducers";
import { getBusinessDetails } from "../../redux/actions/businessActions";
import { getPersonList, resetPerson } from "../../redux/actions/personActions";
import { PersonAttr } from "../../services/person";
import { PersonDelete } from "../../components/modals/person/PersonDelete";
import Layout from "../../components/layout/Layout";
import { useTranslation } from "react-i18next";

export function BusinessPerson() {
  const [t, i18n] = useTranslation("global");
  const dispatch = useDispatch();
  const { id: businessId } = useParams<{ id: string }>();
  const businessDetails = useSelector(
    (state: RootState) => state.business as BusinessReducersProps
  );
  const businessPersonsData = useSelector(
    (state: RootState) => state.person as PersonReducersProps
  );
  const [showCreatePerson, setShowCreatePerson] = useState<boolean>(false);
  const [showDeletePerson, setShowDeletePerson] = useState<boolean>(false);
  const [selectedPerson, setSelectedPerson] = useState<
    PersonAttr | null | undefined
  >(null);
  const toggleCreatePerson = () => setShowCreatePerson((show) => !show);

  useEffect(() => {
    const loadData = async () => {
      dispatch(getBusinessDetails(businessId!));
      dispatch(getPersonList(businessId!));
    };
    loadData();
  }, [dispatch, businessId]);

  const onSuccess = () => {
    setShowCreatePerson(false);
    dispatch(resetPerson());
  };
  const openPersonModal = (person: PersonAttr | null | undefined) => {
    setSelectedPerson(person);
    toggleCreatePerson();
  };

  const toggleDeletePerson = () => setShowDeletePerson((show) => !show);
  const onSuccessDelete = () => {
    setShowDeletePerson(false);
    dispatch(resetPerson());
  };
  const openDeletePersonModal = (person: PersonAttr | null | undefined) => {
    setSelectedPerson(person);
    toggleDeletePerson();
  };

  return (
    <Layout>
      <div>
        <ContainerHeader
          title={businessDetails?.businessData?.name}
          rightContent={
            <>
              <img src={icon} alt="" width="24px" height="24px" />
              <Button
                name={t("button.create-person")}
                styleButton="primary"
                onClick={() => openPersonModal(null)}
              />
            </>
          }
        />

        <ul className="table-list">
          {businessPersonsData?.data?.map((businessItem) => (
            <li className="table-list__item" key={businessItem.name}>
              <div className="table-column">{businessItem.name}</div>
              <div className="table-column">{businessItem.role}</div>
              <div className="table-column actions">
                <button
                  className="icon"
                  onClick={() => openPersonModal(businessItem)}
                >
                  <ImPencil />
                </button>
                <button
                  className="icon"
                  onClick={() => openDeletePersonModal(businessItem)}
                >
                  <MdDeleteOutline />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <PersonModal
        show={showCreatePerson}
        person={selectedPerson}
        businessId={businessId!}
        onHide={toggleCreatePerson}
        onSuccess={onSuccess}
      />

      <PersonDelete
        show={showDeletePerson}
        person={selectedPerson}
        businessId={businessId!}
        onHide={toggleDeletePerson}
        onSuccess={onSuccessDelete}
      />
    </Layout>
  );
}
