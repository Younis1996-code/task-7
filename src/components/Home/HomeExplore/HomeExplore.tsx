"use client";

import { useEffect, useState } from 'react'
import ima1 from "../../../assets/Home/Explore/explore1.png"
import ima2 from "../../../assets/Home/Explore/explore2.png"
import ima3 from "../../../assets/Home/Explore/explore3.jpg"
import ima4 from "../../../assets/Home/Explore/explore4.png"
import SliderButtons from './SliderButtons'
import HomeTitle from '../HomeTitle';
import DataSlider from './DataSlider';
import { StaticImageData } from 'next/image';
import SliderCard from './SliderCard';

export interface ExploreData {
    id: number;
    img: StaticImageData;
    title: string;
    from: string;
    price: string;
    date: string;
    ppl: string;
    para: string;
}
const exploreData : ExploreData[] = [
    {
        id: 1,
        img: ima1,
        title: "Lucca Bike Tour",
        from: "from",
        price: '34 €',
        date: "EVERY DAY",
        ppl: "3-10 PP",
        para: "A tour of the city and its surroundings led by a professional guide ...",
    },
    {
        id: 2,
        img: ima2,
        title: "Wine tasting In Tuscany",
        from: "from",
        price: '34 €',
        date: "MONDAY",
        ppl: "10-30 PP",
        para: "The real magic is here where you can enjoy the best Tuscan wine and eat ...",
    },
    {
        id: 3,
        img: ima3,
        title: "Cinque Terre Tour",
        from: "from",
        price: '34 €',
        date: "TO BE DECIDED",
        ppl: "10-50 PP",
        para: "Visiting the 5 Terre is a must, and you can never go there enough ...",
    },
    {
        id: 4,
        img: ima4,
        title: "Siena and Surroundings",
        from: "from",
        price: '34 €',
        date: "TO BE DECIDED",
        ppl: "5-10 PP",
        para: "A tour of the city and its surroundings led by a professional guide ...",
    },
    {
        id: 5,
        img: ima2,
        title: "Lucca Bike Tour",
        from: "from",
        price: '34 €',
        date: "EVERY DAY",
        ppl: "3-10 PP",
        para: "A tour of the city and its surroundings led by a professional guide ...",
    },
    {
        id: 6,
        img: ima4,
        title: "Wine tasting In Tuscany",
        from: "from",
        price: '34 €',
        date: "MONDAY",
        ppl: "10-30 PP",
        para: "The real magic is here where you can enjoy the best Tuscan wine and eat ...",
    },
    {
        id: 7,
        img: ima1,
        title: "Cinque Terre Tour",
        from: "from",
        price: '34 €',
        date: "TO BE DECIDED",
        ppl: "10-50 PP",
        para: "Visiting the 5 Terre is a must, and you can never go there enough ...",
    },
    {
        id: 8,
        img: ima3,
        title: "Siena and Surroundings",
        from: "from",
        price: '34 €',
        date: "TO BE DECIDED",
        ppl: "5-10 PP",
        para: "A tour of the city and its surroundings led by a professional guide ...",
    },
   
]

const HomeExplore = () => {
    const [currentItems, setCurrentItems] = useState(0);
    const [itemsNumber, setItemsNumber] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 767) {
                setItemsNumber(1);
            } else if (window.innerWidth > 767 && window.innerWidth <= 1023) {
                setItemsNumber(2);
            } else {
                setItemsNumber(4);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [])

  return (
    <section>
      <div className='flex justify-between items-center'>
        <HomeTitle value="Explore Our Popular Destinantions" />
        <SliderButtons currentItems={currentItems} setCurrentItems={setCurrentItems} itemsNumber={itemsNumber} exploreData={exploreData} />
      </div>
      <DataSlider currentItems={currentItems} itemsNumber={itemsNumber}>
        {exploreData.map((data) => {return <SliderCard key={data.id} data={data} />})}
      </DataSlider>
    </section>
  )
}

export default HomeExplore
