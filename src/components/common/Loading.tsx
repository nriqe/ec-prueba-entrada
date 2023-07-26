import { memo } from 'react';

const Loading = () => {
    return (
        <article className="loading">
            <p className="loading__text">⏳ Cargando...</p>
        </article>
    )
}

export default memo(Loading);