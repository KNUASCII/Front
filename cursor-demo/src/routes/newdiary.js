//감정 작성 화면

import React, { useState } from 'react';
import axios from 'axios';

const Newdiary = () => {
    const [diaryText, setdiaryText] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log();

        try {
            const token = localStorage.getItem('token');  // 또는 sessionStorage 등을 사용

            const response = await axios.post('http://localhost:8080/api/diary/newDiary', {
                diaryText: diaryText  // 요청 본문으로 데이터를 전달
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                 },
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1>오늘 하루 느낀 감정을 간단히 작성해주세요</h1>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                style={{width: '500px', height: '300px'}} 
                placeholder="감정을 작성해주세요" 
                value={diaryText}
                onChange={(e) => setdiaryText(e.target.value)}
                required
                />
                <button type="submit">작성</button>
            </form>
        </div>
    )
}

export default Newdiary;