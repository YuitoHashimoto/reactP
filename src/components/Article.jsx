import { useState } from 'react';
import {Title, Content, PublishBtn} from './index';

const Article = (props) => {
    const [isPublished, setPublished] = useState(false)

    const publishArticle = () => {
        setPublished(true)
    }

    return (
        <article>
            <Title title={props.title} />
            <Content content={props.content} />
            <PublishBtn isPublished={isPublished} onClick={publishArticle} />
        </article>
    )
}

export default Article;