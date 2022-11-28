import * as React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import GlobalStyles from "./style";
import { PrivateRoute, PublicRoute } from "../Route";
import { AllWrap, MainWrap } from "../styles/commonStyle";
import Splash from "../pages/splashPage/Splash";
import LoginPage from "../pages/loginPage/LoginPage";
import JoinPage from "../pages/joinPage/JoinPage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import ProfilePage from "../pages/profilePage/ProfilePage";
import JoinQuizPage from "../components/joinQuizPage/JoinQuizPage";
import RecordMapPage from "../pages/recordMapPage/RecordMapPage";
import RegisterCatPage from "../pages/registerCatPage/RegisterCatPage";
import CatLetterPage from "../pages/catLetterPage/CatLetterPage";
import CatLettersItem from "../components/catLettersItem/CatLettersItem";
import CatNewsPage from "../pages/catNewsPage/CatNewsPage";
import CatInfoPage from "../pages/catInfoPage/CatInfoPage";
import CatListPage from "../pages/catListPage/CatListPage";
import CatNewItem from "../components/catNewsItem/CatNewItem";
import CatinfoEditPage from "../pages/catInfoEditPage/CatinfoEditPage";
import ProfileEditPage from "../pages/profileEditPage/ProfileEditPage";
import TutorialBtn from '../components/tutorialButton/TutorialBtn';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <AllWrap>
          <TutorialBtn />
          <MainWrap>
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
                path="profileEdit"
                element={
                  <PrivateRoute>
                    <ProfileEditPage />
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
                path="/letters/:lettersId"
                element={
                  <PrivateRoute>
                    <CatLettersItem />
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
                    <CatListPage />
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
          </MainWrap>
        </AllWrap>
      </BrowserRouter>
    </>
  );
};
export default App;
