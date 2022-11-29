import React from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import RegisterCatPage from "@pages/registerCatPage/RegisterCatPage";

const CatinfoEditPage = () => {
  const { state } = useLocation();

  return <RegisterCatPage stateData={state} />;
};

export default CatinfoEditPage;
