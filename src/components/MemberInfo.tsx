import React from "react";

function MemberInfo({name}: any) { //string타입으로 선언하면 의문 모를 타입 에러가 발생...
  return (
    <>
      <div>
        {name}
      </div>
    </>
  );
}
export default MemberInfo;
