import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getOCID } from "./api";

interface Iocid {
  ocid: string;
}

function App() {
  const [characterName, set_characterName] = useState<string | any>();
  const test = (name: any) => {
    set_characterName(name.target.value);
  }
  const { isLoading, data } = useQuery<Iocid>(["my_ocid", characterName],
    () => getOCID(characterName)
  );
  return (
    <div className='flex flex-col justify-center items-center mt-72'>
      <input type="text" placeholder='닉네임을 입력하세요' className='p-5 rounded-full text-xl border border-gray-500 my-10 w-[30rem]' onChange={test} />
      <div>
        {isLoading ? "" : data?.ocid}
      </div>
    </div>
  );
}

export default App;
