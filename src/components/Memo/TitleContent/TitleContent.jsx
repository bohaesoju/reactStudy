import React from 'react';
import Title from '../Title';
import Content from '../Content';

const TitleContent = () => {
  const [mainTitle, setMainTitle] = React.useState('제목');
  const [mainContent, setMainContent] = React.useState('메인 컨텐츠 입니다.');

  const handleInputTitle = (e) => {
    setMainTitle(e.target.value);
  };
  const handleInputContent = (e) => {
    setMainContent(e.target.value);
  };

  return (
    <div>
      <Title productTitle={ mainTitle } />
      <Content productContent={ mainContent } />
      <input type="text" onChange={ handleInputTitle }/>
      <input type="text" onChange={ handleInputContent }/>
    </div>
  );
};

export default TitleContent;