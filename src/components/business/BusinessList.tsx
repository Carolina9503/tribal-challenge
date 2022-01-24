import React, { useState } from "react";
import { useEffect } from "react";
import { ImPencil } from "react-icons/im";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getBusinessList,
  resetBusiness,
} from "../../redux/actions/businessActions";
import { RootState } from "../../redux/reducers";
import { BusinessReducersProps } from "../../redux/reducers/businessReducers";
import { BusinessAttr } from "../../services/business";
import "../business/BusinessList.css";
import { Button } from "../button/Button";
import ContainerHeader from "../container-header/ContainerHeader";
import { BusinessDelete } from "../modals/business/BusinessDelete";
import { BusinessModal } from "../modals/business/BusinessModal";

export const BusinessList = () => {
  const dispatch = useDispatch();
  const businessData = useSelector(
    (state: RootState) => state.business as BusinessReducersProps
  );
  const business = businessData.data;
  const [showCreateBusiness, setShowCreateBusiness] = useState<boolean>(false);
  const [showDeleteBusiness, setShowDeleteBusiness] = useState<boolean>(false);
  const [selectedBusiness, setSelectedBusiness] = useState<
    BusinessAttr | undefined
  >(undefined);

  useEffect(() => {
    const loadData = async () => {
      dispatch(getBusinessList());
    };
    loadData();
  }, [dispatch]);

  const toggleCreateBusiness = () => setShowCreateBusiness((show) => !show);
  const onSuccess = () => {
    toggleCreateBusiness();
    dispatch(resetBusiness());
  };
  const openBusinessModal = (business: BusinessAttr | undefined) => {
    setSelectedBusiness(business);
    toggleCreateBusiness();
  };

  const toggleDeleteBusiness = () => setShowDeleteBusiness((show) => !show);
  const onSuccessDelete = () => {
    toggleDeleteBusiness();
    dispatch(resetBusiness());
  };
  const openDeleteBusinessModal = (business: BusinessAttr | undefined) => {
    setSelectedBusiness(business);
    toggleDeleteBusiness();
  };

  return (
    <>
      <div>
        <div>
          <ContainerHeader
            title="Business"
            rightContent={
              <Button
                name="Create Business"
                styleButton="primary"
                onClick={() => openBusinessModal(undefined)}
              />
            }
          />
          <ul className="table-list">
            {business.map((businessItem) => (
              <li className="table-list__item" key={businessItem.businessId}>
                <div className="table-column">
                  <Link
                    to={`/business/${businessItem.businessId}`}
                    className="table-text"
                  >
                    {businessItem.name}
                  </Link>
                </div>
                <div className="table-column actions">
                  <button
                    className="icon"
                    onClick={() => openBusinessModal(businessItem)}
                  >
                    <ImPencil />
                  </button>
                  <button
                    className="icon"
                    onClick={() => openDeleteBusinessModal(businessItem)}
                  >
                    <MdDeleteOutline />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <BusinessModal
        show={showCreateBusiness}
        business={selectedBusiness}
        onSuccess={onSuccess}
        onHide={toggleCreateBusiness}
      />

      <BusinessDelete
        show={showDeleteBusiness}
        business={selectedBusiness}
        onSuccess={onSuccessDelete}
        onHide={toggleDeleteBusiness}
      />
    </>
  );
};
