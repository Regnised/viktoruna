import './quiz-list-item.css';

const QuizListItem = ({ label, important = false }) => {
    const liStyle = {
        color: important ? 'tomato' : 'black'
    }
    return (
        <div className='row'>
            <span
                className="col-10 item"
                style={liStyle}>
                {label}
            </span>

            <span className='col-2'>
                <button type='button'
                    className='btn btn-outline-danger btn-sm'
                >
                    <i className='bi bi-trash3'></i>
                </button>

                <button type='button'
                    className='btn btn-outline-success btn-sm'
                >
                    <i className='bi bi-star'></i>
                </button>
            </span>

        </div>
    )
}

export default QuizListItem;