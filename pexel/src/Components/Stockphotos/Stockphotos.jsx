import React from 'react'
import './Stockphotos.css'
import img1 from '/src/Images/img1.jpg';
import img2 from '/src/Images/img2.jpg';
import img3 from '/src/Images/img3.jpg';
import img4 from '/src/Images/img4.jpg';
import img5 from '/src/Images/img5.jpg';
import img6 from '/src/Images/img6.jpg';
import img7 from '/src/Images/img7.jpg';
import img8 from '/src/Images/img8.jpg';
import img9 from '/src/Images/img9.jpg';
import img10 from '/src/Images/img10.jpg';
import img11 from '/src/Images/img11.jpg';
import img12 from '/src/Images/img12.jpg';
import img13 from '/src/Images/img13.jpg';
import img14 from '/src/Images/img14.jpg';
import img15 from '/src/Images/img15.jpg';
import img16 from '/src/Images/img16.jpg';
import img17 from '/src/Images/img17.jpg';
import img18 from '/src/Images/img18.jpg';
import img19 from '/src/Images/img19.jpg';
import img20 from '/src/Images/img20.jpg';
import img21 from '/src/Images/img21.jpg';
import img22 from '/src/Images/img22.jpg';
import img23 from '/src/Images/img23.jpg';

const Stockphotos = () => {
  return (
    <div>
        <section className='photos-section'>
        <main className='photos'>
        <div className='free-stock-photos'>Free Stock Photos</div>
            <div>
                    <div></div>
                    <select name="" id="" className='selection'>
                        <option value="">Trending</option>
                        <option value="">New</option>
                    </select>
            </div>
        </main>
        <main className='img-container'>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img src={img7} alt="" />
            <img src={img8} alt="" />
            <img src={img9} alt="" />
            <img src={img10} alt="" />
            <img src={img11} alt="" />
            <img src={img12} alt="" />
            <img src={img14} alt="" />
            <img src={img15} alt="" />
            <img src={img16} alt="" />
            <img src={img17} alt="" />
            <img src={img18} alt="" />
            <img src={img19} alt="" />
            <img src={img20} alt="" />
            <img src={img21} alt="" />
            <img src={img22} alt="" />
            <img src={img23} alt="" />
        </main>
        </section>
    </div>
  )
}

export default Stockphotos