//types
import { Note } from '../../types/types';

type CardProps = {
    note: Note
}

function Card({note}: CardProps) {

  const { title, autor, image, section }: Partial<Note> = note
  
  return (
    <article className="card">
      {image && 
        <img 
          src={image} 
          className="card__img" 
          alt={title ?? ''} 
          loading="lazy"
        />}
        <section className="card__body">
          {section && <h5 className="card__section">{section}</h5>}
          {title && <a className="card__title" href={image}>{title}</a>}
          {autor && <h6 className="card__author">{autor}</h6>}
        </section>
    </article>
  )
}

export default Card;