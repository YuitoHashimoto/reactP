const PublishBtn = (props) => {
    return (
        <button onClick={() => props.onClick()}>
            ε¬ιηΆζ : {props.isPublished.toString()}
        </button>
    )
}

export default PublishBtn;