import React from 'react'
import Title from '../../components/Title/Title';

function HomePage() {
  return (
    <div className='container'>
        <main>Slider</main>
        <section>
            <Title title="Пиццы" />
            {/* Карточки */}
        </section>
        <section>
            <Title position="center" title="Напитки" />
        </section>
    </div>
  )
}

export default HomePage;