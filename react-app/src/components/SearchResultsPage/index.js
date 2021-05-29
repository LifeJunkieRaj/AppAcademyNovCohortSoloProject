import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { show } from "../../store/ask_a_guru";
import AskAGuru from "../AskAGuru";
import "./SearchResultsPage.css";
import { search } from '../../store/nav_bar';



 
const SearchResultsPage = () => {
    const dispatch = useDispatch();
    let ask_a_guru = useSelector(state => state.found.found);
    let query=useSelector(state=>state.found.query);
    const user = useSelector(state => state.session.user);
    const commentsStore = useSelector(state => state.comments)
    const responseStore = useSelector(state => state.responses)
    ask_a_guru && (ask_a_guru = Object.values(ask_a_guru))
    const userLoaded = useSelector(state => state.session.loaded);

    const showModal = () => dispatch(show())

    
    useEffect(() => {
      dispatch(search(query))
      
    }, [dispatch, user, commentsStore, responseStore])

    if (userLoaded && !user) return <Redirect to="/"></Redirect>
        
    return  (
        
        <div className="search_page_image_container">
              <div></div>
                <h1 className="home_page_title">Search Results</h1>
                  <div className="question_button" onClick={showModal}>
                    <i class="fas fa-comment-dots"> Post Your Question</i>                      
                  </div>
                  <div className="flex_container">
            {ask_a_guru ? ask_a_guru.map(q => {
               return <AskAGuru key={q.id} question={q} />
          }): null }
          </div>
          
        </div>
          
    )
    
}

export default SearchResultsPage;