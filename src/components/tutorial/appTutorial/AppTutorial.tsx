import React, { useEffect, useState } from 'react'
import { AppTutorWrap, TutorialImg, CloseBtn } from './style'

const AppTutorial = () => {
  const [tutorModal, setTutorModal] = React.useState<boolean>(true);

  // 이전방문 날짜
  const visitBeforeDate: any = localStorage.getItem('expiryDate');
  // 현재 날짜
  const visitNowDate: any = Math.floor(new Date().getDate());

  useEffect(() => {
    // 모달 그만보기 클릭
    if (visitBeforeDate !== null) {
      // 이전 날짜와 현재 날짜가 같을 경우 모달 켜기
      if (visitBeforeDate === visitNowDate) {
        localStorage.removeItem('expiryDate')
        setTutorModal(true)
      }
      // 이전 날짜와 현재 날짜가 다를경우 모달 끄기
      if (visitBeforeDate !== visitNowDate) {
        setTutorModal(false)
      }
    } else {
      setTutorModal(true);
    }
  }, [])

  // 로그인 상태에서 하루동안 팝업 닫기
  const Dayclose = (e: any) => {
    if (setTutorModal) {
      setTutorModal(e);
      const expiry = new Date();
      // 오늘 날짜에 +1 해서 만료 날짜 계산하기
      const expiryDate: any = expiry.getDate() + 1;
      // 만료 날짜 로컬스토리지에 저장
      localStorage.setItem('expiryDate', expiryDate)
    }
  }

  return (
    <div>
      {tutorModal === true && (
        <>
          <CloseBtn type='button' onClick={Dayclose}>
            <img src="assets/icons/icon-close-text.svg" alt="닫기 버튼" />
          </CloseBtn>
          <AppTutorWrap>
            <TutorialImg src="assets/images/mobile-tutorial.png" alt="모바일 튜토리얼" />
          </AppTutorWrap>
        </>
      )}
    </div>
  )
}

export default AppTutorial