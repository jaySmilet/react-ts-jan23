import * as React from 'react';
import './style.css';
import AgoraRTC from 'agora-rtc-sdk-ng';

export default function App() {
  let options = {
    appId: '4004b0616f2f45eebb8656f1423f9846',
    channel: 'easy-solutions',
    token:
      '007eJxTYOBU6HG+G3Il8JpUP58Ae3G39bQVkm4tZzr+PT5R2yj0nVOBwcTAwCTJwMzQLM0ozcQ0NTUpycLM1CzN0MTIOM3SwsTsnvCB5IZARoaGd2KsjAwQCOLzMaQmFlfqFufnlJZk5ucVMzAAAAK4IfI=',
    uid: 0,
  };

  return (
    <div>
      <button>Join</button>
      <br />
      <br />
      <button>Leave</button>
    </div>
  );
}
