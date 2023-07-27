import './Editor.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // 뒤로가기
import { getFormattedDate, emotionList } from '../util';
import Button from './Button'
import EmotionItem from './EmotionItem';

const Editor = ({ initData, onSubmit }) => {
  const navigate = useNavigate() // 경로가 아니라 -1하면 뒤로 가기 이벤트 1회 발생

  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 3,
    content: "",
  });

  const handleChangeDate = (event) => {  // date 변경
    setState({
      ...state,
      date: event.target.value,
    })
  }

  const handleChangeEmotion = (emotionId) => {
    setState({
      ...state,
      emotionId,
    })
  }

  const handleChangeContent = (event) => {
    setState({
      ...state,
      content: event.target.value,
    })
  }

  const handleSubmit = () => {
    onSubmit(state);
  }

  const handleOnGoBack = () => {
    navigate(-1)
  } 
  
  return (
    <div className='Editor'>
      <div className='editor_section'>
        <h4>Date of Today</h4>
        <div className='input_wrapper'>
          <input type="date" value={state.date}
                 onChange={handleChangeDate} />
        </div>
      </div>
      <div className='editor_section'>
        <h4>Emotion of Today</h4>
        <div className='input_wrapper emotion_list_wrapper'>
          {
            emotionList.map((it) => 
              <EmotionItem key={it.id} {...it} 
               onClick={handleChangeEmotion}
               isSelected={state.emotionId === it.id} 
              />
            )
          }
        </div>
      </div>
      <div className='editor_section'>
        <h4>Diary of Today</h4>
        <div className='input_wrapper'>
          <textarea 
            placeholder='How was it today?'
            value={state.content}
            onChange={handleChangeContent}
          />
        </div>
      </div>
      <div className='editor_section bottom_section'>
        <Button text={'cancel'} onClick={handleOnGoBack} />
        <Button text={'submit'} type={'positive'} onClick={handleSubmit} />
      </div>
    </div>
  );
}

export default Editor