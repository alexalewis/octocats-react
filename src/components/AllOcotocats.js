import React, { Component } from 'react'
import Cat from './Cat'

import cat1 from '../images/cat1.png'
import cat2 from '../images/cat2.png'
import cat3 from '../images/cat3.png'
import cat4 from '../images/cat4.png'
import cat5 from '../images/cat5.png'
import cat6 from '../images/cat6.png'
import cat7 from '../images/cat7.gif'
import cat8 from '../images/cat8.png'
import cat9 from '../images/cat9.gif'
import cat10 from '../images/cat10.png'
import cat11 from '../images/cat11.png'
import cat12 from '../images/cat12.png'

export class AllOctocats extends Component {
  render() {
    return (
      <main>
        <ul class="images">
          <Cat gray="#113" bold="Saritocat" imageUrl={cat1} alt="cat one" />
          <Cat
            gray="#97"
            bold="Mardisgrastocat"
            imageUrl={cat2}
            alt="mardi gras cat"
          />
          <Cat gray="#96" bold="Kimonotocat" imageUrl={cat3} alt="kimono cat" />
          <Cat
            gray="#88"
            bold="Spidertocat"
            imageUrl={cat4}
            alt="spiderman cat"
          />
          <Cat gray="#82" bold="Murakamicat" imageUrl={cat5} alt="cat five" />
          <Cat
            gray="#77"
            bold="Heisencat"
            imageUrl={cat6}
            alt="breaking bad cat"
          />
          <Cat
            gray="110"
            bold="Grinchtocat"
            imageUrl={cat7}
            alt="the grinch cat"
          />
          <Cat
            gray="#103"
            bold="Octoliberty"
            imageUrl={cat8}
            alt="statue of liberty cat"
          />
          <Cat
            gray="#100"
            bold="Daftpunktocat"
            imageUrl={cat9}
            alt="daft punk dj cat"
          />
          <Cat gray="#98" bold="Poptocat" imageUrl={cat10} alt="cat ten" />
          <Cat
            gray="#99"
            bold="Founding Father v2"
            imageUrl={cat12}
            alt="founding father cat"
          />
          <Cat
            gray="#91"
            bold="Skitchtocat"
            imageUrl={cat11}
            alt="cat eleven"
          />
        </ul>
      </main>
    )
  }
}

export default AllOctocats
