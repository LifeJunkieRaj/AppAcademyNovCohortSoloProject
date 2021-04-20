import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUserQuestions, show } from "../../store/ask_a_guru";
import AskAGuru from "../../components/AskAGuru";

// import user_icon from "../../site-images/user_icon.png";
import "./HomePage.css";



 
const HomePage = () => {
    const dispatch = useDispatch();
    let ask_a_guru = useSelector(state => state.questions.questions);
    const user = useSelector(state => state.session.user);
    ask_a_guru && (ask_a_guru = Object.values(ask_a_guru))

    const showModal = () => dispatch(show())

    useEffect(() => {
        console.log("Look Mom, no hands------->", ask_a_guru)
        user && dispatch(getCurrentUserQuestions(user.id))
    }, [dispatch, user])

    return (
        
        <div className="image_container">
              <div></div>
                <h1 className="home_page_title">Ask A Guru</h1>
                  <div className="question_button" onClick={showModal}>
                      Post Your Question
                  </div>
                  <div className="flex_container">
            {ask_a_guru ? ask_a_guru.map(q => {
               return <AskAGuru key={q.id} question={q} />
          }): null }
          </div>
          
        </div>
          
    )
    
}

export default HomePage;


