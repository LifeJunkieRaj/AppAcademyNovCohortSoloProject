import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hide, createQuestion, getCurrentUserQuestions } from "../../store/ask_a_guru"
import "./AAGquestion.css"

const categoryList = ["Real Estate", "Cryptocurrency and Blockchain", "Amazon FBA", "Gig Economy", "Social Media Marketing", "Market Trader", "Freelancing", "eCommerce", "Dropshipping", "Entrepreneurship 101"]
const CreateQuestion = () => {
    const dispatch = useDispatch();
    const hideModal = () => dispatch(hide())

    const display = useSelector(state => state.questions.modal)
    const sessionUser = useSelector(state => state.session.user)
    const [body, updateBody] = useState("");
    const [category, setCategory] = useState(1);
    const [errors, setErrors] = useState([]);
    const onSubmit = (e) => {
        e.preventDefault()
        createQuestion(body, category, sessionUser.id)
            .then(() => {
                dispatch(getCurrentUserQuestions(1))
                dispatch(hide())
            })
            .catch((err) => console.log(err))
    }

    return display ? (
        <div className="modal_background" onClick={hideModal}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                <h1 className="AAG_title">Ask A Guru</h1>
                <form className="AAG_container">
                    <label>Enter Your Question</label>
                    <textarea className="AAG_question" 
                      rows="5"
                      cols="30"
                      placeHolder="Ask Your Question Here"
                      value={body}
                      onChange={({target:{value}}) => updateBody(value)}
                      />
                      <label>Select A Category</label>
                      <select className="AAG_categories" onChange={({target:{value}}) => setCategory(value)} value={category}>
                          {categoryList.map((cat, idx) => (
                              <option
                                value = {idx + 1}
                              >{cat}</option>
                          ))}
                      </select>
                      <button className="AAG_submit" onClick={onSubmit}>Submit</button>
                </form>
            </div>
        </div>
    ):null;
}

export default CreateQuestion;

