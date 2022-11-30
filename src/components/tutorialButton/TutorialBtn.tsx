import React from 'react'
import { TutorBtn, ModalBg, ModalCloseBtn } from './style'
import Tutorial from '../tutorial/Tutorial';

const TutorialBtn = () => {
  const [tutorModal, setTutorModal] = React.useState<boolean>(false);
  const closeModal = () => {
    setTutorModal(false);
  }

  return (
    <>
      <TutorBtn type='button' onClick={() => { setTutorModal(!tutorModal) }} >
        밥줬냥 설명서 보기
      </TutorBtn>
      {tutorModal === true &&
        <ModalBg>
          <ModalCloseBtn type='button' onClick={closeModal} >
            <img src="assets/icons/icon-close.svg" alt="닫기 버튼" />
          </ModalCloseBtn>
          <Tutorial />
        </ModalBg>}
    </>
  )
}

export default TutorialBtn