import {Title, Content} from './index';

const Article = (props) => {


    return (
        <article>
            <Title title={props.title} />
            <Content content={props.content} />
        </article>
    )
}

export default Article;