import { memo } from 'react';

const Error = () => {
    return (
        <article className="loading">
            <p className="loading__text">❌ Error</p>
        </article>
    )
}

export default memo(Error);