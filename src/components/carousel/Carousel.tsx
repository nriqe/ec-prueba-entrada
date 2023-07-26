import { useState } from 'react';

//types
import { Note } from '../../types/types';
import CarouselButton from './CarouselButton';

type CarouselProps = {
    classCarousel: string,
    notes: Note[]
}

const Carousel = ({ notes, classCarousel }: CarouselProps) => {

  const [index, setIndex] = useState<number>(0); 
  const length = notes.length;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  const handleCurrent = (id: number) => {
    setIndex(id);
  }

  return (
    <>
      {notes && 
        <section className={classCarousel}>
          <section className="carousel-header">
            <h2 className="carousel-header__subtitle">Lorem Ipsum dolor sit amet, consectetur adispicing elit.</h2>
            <section className="carousel-header__btn-container">
              <CarouselButton classButton="carousel-header__prev" handleFuction={handlePrevious} icon="<" />
              <CarouselButton classButton="carousel-header__next" handleFuction={handleNext} icon=">" />
            </section>  
          </section>
          <section className="carousel-items">
            <section className="carousel-items__indicators">
              {notes.map((note, i) =>
                <button 
                  key={note.id} 
                  className={`carousel-items__indicator${(i === index) ? ' carousel-items__indicator--active' : '' }`}              
                  onClick={() => handleCurrent(i)}
                  type="button"
                >
                </button>
              )}
            </section>
            <section className="carousel-items__inner">
            {notes.map((note, i) =>
              <article 
                key={note.id} 
                className={`carousel-items__item${(i === index) ? ' carousel-items__item--active' : '' }`}
              >
                {note.image && 
                  <img 
                    src={note.image} className="carousel-items__img" 
                    alt={note.title ?? ''} 
                    loading="lazy"
                  />
                }
                <section className="carousel-items__caption">
                  {note.date && <time className="carousel-items__item-date">{note.date}</time>}
                  {note.title && <h2 className="carousel-items__item-title">{note.title}</h2>}
                </section>
              </article>
            )}        
            </section>
          </section>
        </section>
      }
    </>
  )
}

export default Carousel;