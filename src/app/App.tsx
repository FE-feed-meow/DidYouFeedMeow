import * as React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import GlobalStyles from "./style";
import { AllWrap } from "../styles/commonStyle";
import { PrivateRoute, PublicRoute } from "../Route";
import Splash from "../pages/splashPage/Splash";
import LoginPage from "../pages/loginPage/LoginPage";
import JoinPage from "../pages/joinPage/JoinPage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import ProfilePage from "../pages/profilePage/ProfilePage";
import JoinQuizPage from "../components/joinQuizPage/JoinQuizPage";
import RecordMapPage from "../pages/recordMapPage/RecordMapPage";
import RegisterCatPage from "../pages/registerCatPage/RegisterCatPage";
import CatInfo from "../components/catInfo/CatInfo";
import CatLetterPage from "../pages/catLetterPage/CatLetterPage";
import CatNewsPage from "../pages/catNewsPage/CatNewsPage";
import CatInfoPage from "../pages/catInfoPage/CatInfoPage";
import CatList from "../components/catList/CatList";
import CatNewItem from "../components/catNewsItem/CatNewItem";
import CatinfoEditPage from "../pages/catInfoEditPage/CatinfoEditPage";

const App = () => {
  const token = localStorage.getItem("token");
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <AllWrap>
          <Routes>
            {/* public page */}
            <Route
              path="/"
              element={
                <PublicRoute>
                  <Splash />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="/join"
              element={
                <PublicRoute>
                  <JoinPage />
                </PublicRoute>
              }
            />
            <Route
              path="/quiz"
              element={
                <PublicRoute>
                  <JoinQuizPage />
                </PublicRoute>
              }
            />
            <Route path="/profile" element={<ProfilePage />} />

            {/* private page */}
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <RecordMapPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/addCat"
              element={
                <PrivateRoute>
                  <RegisterCatPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/catInfo/:catid"
              element={
                <PrivateRoute>
                  <CatInfoPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/catInfoEdit/:catid"
              element={
                <PrivateRoute>
                  <CatinfoEditPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/letters"
              element={
                <PrivateRoute>
                  <CatLetterPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/news"
              element={
                <PrivateRoute>
                  <CatNewsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/news/:newsId"
              element={
                <PrivateRoute>
                  <CatNewItem />
                </PrivateRoute>
              }
            />
            <Route
              path="/catList"
              element={
                <PrivateRoute>
                  <CatList />
                </PrivateRoute>
              }
            />
            {/* <Route
              path="/newsDetail:id"
              element={
                <PrivateRoute>
                  <CatNewsPage />
                </PrivateRoute>
              }
            /> */}
            {/* <Route
              path="/letter:id"
              element={
                <PrivateRoute>
                  <CatLetterPage />
                </PrivateRoute>
              }
            /> */}
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </AllWrap>
      </BrowserRouter>
    </>
  );
};
export default App;
