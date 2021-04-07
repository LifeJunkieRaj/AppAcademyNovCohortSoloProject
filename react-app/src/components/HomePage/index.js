import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUserQuestions } from "../../store/ask_a_guru";
// import AskAGuru from "../../components/AskAGuru";
// import user_icon from "../../site-images/user_icon.png";
import "./HomePage.css";




const HomePage = () => {
    const dispatch = useDispatch();
    const ask_a_guru = useSelector(state => state.questions.questions);
    const user = useSelector(state => state.session.user);

    // const unique = new Set(ask_a_guru?.map(ask_a_guru => ask_a_guru.category_id));

    useEffect(() => {
        dispatch(getCurrentUserQuestions(user.id))
    }, [dispatch, user])

    return ask_a_guru && (
        <div className="home-container">
            <div className="home-feed-container">
                <div className="home-feed-title">My Recent Activity
                </div>
                <div className="home-ask_a_guru-container">
                    {ask_a_guru.map(ask_a_guru => (
                        <h1>Hello</h1>
                        // <AskAGuru key={ask_a_guru.id} ask_a_guru={ask_a_guru} />
                    ))}
                </div>
            </div>
            <div className="home-user-container">
                <div className="home-user-icon">
                    {/* <img src={user_icon} alt=""/> */}
                </div>
                <div className="home-user-name">
                    <p>{`${user?.first_name} ${user?.last_name}`}</p>
                </div>
                <div className="home-user-username">
                    <i className="fas fa-user" />
                    <p>{user?.username}</p>
                </div>
                <div className="home-user-ask_a_guru-container">
                    <div className="home-user-ask_a_guru-count">
                        {/* <p>{ask_a_guru.length}</p> */}
                        <div className="home-user-ask_a_guru-count-subtitle">
                            <p>TOTAL</p>
                        </div>
                    </div>
                    <div className="home-user-ask_a_guru-unique-count">
                        {/* <p>{unique.size}</p> */}
                        <div className="home-user-ask_a_guru-unique-count-subtitle">
                            <p>UNIQUE</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
