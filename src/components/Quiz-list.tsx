import QuizListItem from "./quiz-list-item";

import './quiz-list.css';

const QuizList = ({ quizData }) => {
    const items = quizData.map((item, index) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className="list-group-item">
                <QuizListItem {...itemProps} />
            </li>
        )
    })

    return (

        <ul className="list-group quiz-list">
            {items}
        </ul>

    )
}

export default QuizList;