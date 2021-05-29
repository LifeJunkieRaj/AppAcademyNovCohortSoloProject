import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { getCurrentUserQuestions, getQuestionsByCommentsAndResponses, show } from "../../store/ask_a_guru";
import AskAGuru from "../../components/AskAGuru";
import "./ProfilePage.css";
import {authenticate} from "../../store/session"
//Change class names and copy CSS to the ProfilePage.css
 
const ProfilePage = () => {
    const dispatch = useDispatch();
    let ask_a_guru = useSelector(state => state.questions.questions);
    const user = useSelector(state => state.session.user);
    const commentsStore = useSelector(state => state.comments)
    const responseStore = useSelector(state => state.responses)
    ask_a_guru && (ask_a_guru = Object.values(ask_a_guru))
    const userLoaded = useSelector(state => state.session.loaded);
    const filtered_questions = useSelector(state => state.questions.filtered_questions);
    // const showModal = () => dispatch(show())
    
    useEffect(() => {
      
     user && dispatch(getCurrentUserQuestions(user.id))
     user && dispatch(getQuestionsByCommentsAndResponses(user.id))
        
    }, [dispatch, user, commentsStore, responseStore])

    if (userLoaded && !user) return <Redirect to="/"></Redirect>
        
    return  (
        
        <div className="profile_page_image_container">
              <div></div>
                <h1 className="home_page_title">Profile Page</h1>
                  <div className="user_info">
                  
                    <p>Name: {user.first_name} {user.last_name} </p>           
                    <p>email: {user.email}</p>
                    <div className="profilePageFlexContainer">
                    {user.guru && <i className="fas fa-award"></i>}  <p>Guru Status: {user.guru?"Guru":"Not a Guru"}</p>    </div> 
                  </div>
                    <div className="user_questions">
                      <h1 className="home_page_title">{user.username} Questions</h1>
                      <div className="profile_page_questions_container">
                        {ask_a_guru ? ask_a_guru.map(q => {
                          return <AskAGuru key={q.id} question={q} />
                      }): <p>No Questions Posted Yet!</p> }
                      </div>
                    </div>
                    <div className="user_comments_responses">
                      <h1 className="home_page_title">{user.username} Comments & Responses</h1>
                      <div className="profile_page_questions_container">
                      {filtered_questions ? filtered_questions.map(q => {
                        
                          return <AskAGuru key={"cr"+q.id} question={q} />
                      }): <p>No Questions Posted Yet!</p> }
                      </div>
                    </div>
            
          
        </div>
          
    )
    
}

export default ProfilePage;


