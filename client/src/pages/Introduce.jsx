import React, { useState, useEffect } from 'react';
import './Introduce.css'
import { motion } from "framer-motion";


import {BsGithub,BsInstagram} from 'react-icons/bs';

const memberInfo=[
  {id:0,name:"이은섭",stdId:201935100,info:"소프트웨어학과 3학년",git:"https://github.com/minchogreenT",sns:"https://www.instagram.com/eunsubscribe_/",img:"https://avatars.githubusercontent.com/u/107783650?v=4"},
  {id:1,name:"김도훈",stdId:201935014,info:"소프트웨어학과 3학년",git:"https://github.com/kdhhuns2000",sns:"https://www.instagram.com/win._.gun1108/",img:"https://avatars.githubusercontent.com/u/52370750?v=4"},
  {id:2,name:"류관곤",stdId:201935039,info:"소프트웨어학과 3학년",git:"https://github.com/RyuKwanKon",sns:"https://www.instagram.com/seungminister_/",img:"https://avatars.githubusercontent.com/u/97783148?v=4"},
  {id:3,name:"오진영",stdId:201935075,info:"소프트웨어학과 3학년",git:"https://github.com/OJOJIN",sns:"https://www.instagram.com//",img:"https://avatars.githubusercontent.com/u/99639919?v=4"},
  {id:4,name:"이승민",stdId:201935100,info:"소프트웨어학과 3학년",git:"https://github.com/1109min",sns:"https://www.instagram.com/seungminister_/",img:"https://avatars.githubusercontent.com/u/112641576?v=4"},
  {id:5,name:"최승우",stdId:2018,info:"글로벌경영학과 3학년",git:"https://github.com/",sns:"https://www.instagram.com/hyunsseekkk/",img:"https://blog.kakaocdn.net/dn/beMPSu/btrgnqCbc7y/BUAB9jEUnrK6me2f5WJnTk/img.jpg"}

]

const calculateBackgroundColor = (id) => {
  // 배경 색상을 계산하는 로직을 작성합니다.
  // 예를 들어, id를 기반으로 색상을 선택하거나
  // 특정 패턴을 사용할 수 있습니다.
  // 여기에서는 간단하게 id를 사용하여 색상을 선택합니다.
  const colors = ['#78c2f140', '#78c2f165', '#78c2f190', '#78a8f190', '#78a8f1b5', '#78a8f1FF'];
  return colors[id % colors.length];
};


const OneMember = (props) => {
  const [isGHovering, setIsGHovering] = useState(false);

  const mouseOverGit = (e) =>{
    setIsGHovering(true);
  } 
  const mouseOutGit = (e) =>{
    setIsGHovering(false);
  } 
  const [isIHovering, setIsIHovering] = useState(false);

  const mouseOverInsta = (e) =>{
    setIsIHovering(true);
  } 
  const mouseOutInsta = (e) =>{
    setIsIHovering(false);
  } 
    const handleClick = (link) => {
      window.open(link,'new');
    };

  const member = props.member;

  return(
    <div className="membership-member-frame"
    style={{ backgroundColor: calculateBackgroundColor(member.id) }}
    >
      <div className="membership-member-image" 
       style={{backgroundImage: `url(${member.img})`}}
      >
      </div>
      
      <div className="membership-member-content">
      <div className="membership-member-name">{member.name}</div>
      <div className="membership-member-stdId">{member.stdId}</div>
      <div className="membership-member-info">{member.info}</div>
      <div className="membership-member-git">
        <BsGithub onClick={() => handleClick(member.git)} onMouseOver={(e) => mouseOverGit(e)} onMouseOut={(e) => mouseOutGit(e)} style={{color:`${isGHovering ? `#2400FE` :`#000000`}`, width:`30px`, height:'30px', marginRight:`15px`}}/>
        <BsInstagram onClick={() => handleClick(member.sns)}onMouseOver={(e) => mouseOverInsta(e)} onMouseOut={(e) => mouseOutInsta(e)} style={{color:`${isIHovering ? `#dd2a7b` :`#000000`}`, width:`30px`, height:'30px', marginLeft:`15px`}}/>
        </div>
      </div>
    </div>
  );
}

const Introduce = () => {

  return (
    <>
      <motion.div
       initial={{opacity: 0}}
       animate={{opacity: 1}}
       exit={{opacity: 0}}
       transition={{ duration: 0.5 }}
    >
      <div className="membership-ship">
        <div className="membership-content-frame">
        {memberInfo.map(member => (
            <OneMember
            member={member}
            key={member.id} // 각 멤버에 고유한 키를 제공합니다.
          />))}
        </div>
      </div>
      </motion.div>

    </>
  );
}

export default Introduce;
