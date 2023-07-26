import { isDesktop, isMobile } from "react-device-detect";

//types
import { Data, Note } from '../../types/types';
import Carousel from '../carousel/Carousel';
import Card from '../card/Card';

type HomeContentProps = {
    data: Data
}

const HomeContent = ({ data }: HomeContentProps) => { 

    const { notes } = data.record;

    const filterNotesByType = (type: string) => notes.filter(note => note.type === type);
    
    const carouselNotes: Note[] = filterNotesByType('slider_grid');
    const sliderNotes: Note[] = filterNotesByType('slider_note');
    const cardNotes: Note[] = filterNotesByType('section_note');

    return (
        <section className="principal">
            <header className="header">
                <h1 className="header__title">globoplay</h1>
                {isDesktop && <a className="header__see-more">Ver Más</a>}                
            </header>
            <section className="carousels">
               <Carousel classCarousel="carousel" notes={carouselNotes} />     
               <Carousel classCarousel="carousel carousel--last" notes={sliderNotes} />  
            </section>
            {isDesktop &&
                <section className="cards">
                    <section className="cards__subtitle-container">
                        <h2 className="cards__subtitle">Tecnología & Games</h2>
                    </section>                    
                    {cardNotes && cardNotes.map(note => 
                        <Card key={note.id} note={note} />
                    )}
                </section>}
            {isMobile && 
                <section>
                    <a className="header__see-more header__see-more--mobile">Ver Más</a>
                </section>
            } 
        </section>
    )
}

export default HomeContent