import rose from '../unsplash_grw2DRoqLAU.png';
import candles from '../unsplash_yg-nrRoZcw0.png';
import perfume_tray from '../unsplash_jVojxJGIyFE.png';
import gift_set from '../unsplash_YS0YJLU_h2k.png';
import givenchyImg from '../Rectangle 1.png';
import givenchyImg2 from '../image 12.png';
import ChanelImg from '../unsplash_KJJ5e6zUADo.png';
import cottonCandle from '../image 18.png';
import treeCandle from '../image 18(1).png';
import bibliothequeCandle from '../image 18(2).png';
import heartIcon from '../HeartIcon.png';
import useLocalStorage from "use-local-storage";
import { notifications } from '@mantine/notifications';
import {
    useParams, Link
} from "react-router-dom";


function GiftedCategory() {
   
    const gifts = [{ name: "Valentine's", link: "valentine" }, { name: "Candles", link: "candles" }, { name: "Perfume Tray", link: "perfume_tray" }, { name: "Gift Set", link: "gift_set" }];
    const a = {
        valentine: [{ img: givenchyImg, brand: 'Givenchy', name: 'Irrestible', price: '$210',id:1 }, 
        { img: ChanelImg, brand: 'Chanel', name: 'Red lip gloss and bronzer', price: '$80' ,id:2}, 
        { img: givenchyImg2, brand: 'Givenchy', name: "L´Interdit Rouge - EDP 50 ml + lipstick", price: '$300',id:3 }, 
        { img: givenchyImg, brand: 'Givenchy', name: 'Irrestible', price: '$210',id:4 }], 
        candles: [{ img: cottonCandle, name: 'Cotton Poplin', price: "$94",id:5 }, 
        { img: treeCandle, name: 'Tree House', price: "$94",id:6 },
        {img:bibliothequeCandle,name:'Bibliotheque',price:"$94",id:7},
        { img: cottonCandle, name: 'Cotton Poplin', price: "$94",id:8 },
        { img: cottonCandle, name: 'Cotton Poplin', price: "$94",id:9 },
        { img: cottonCandle, name: 'Cotton Poplin', price: "$94",id:10 },],
        
        perfume_tray: [], gift_set: []
    }
 
    const bgImages = { valentine: rose, candles: candles, perfume_tray: perfume_tray, gift_set: gift_set }
    let { category } = useParams();
    const [favourites, setFavourites] = useLocalStorage("favourites", []);
    return <div> <img className='w-100' src={bgImages[category]} />
        <div className="flex c  gap-4 maxW-300 m-auto mt-4 whoweAre px-4">
            <div >
                <h1>GIFTS</h1>

                {gifts.map(gift => <Link to={`/gifts/${gift.link}`} className={`giftLink ${category === gift.link ? 'bold' : ''}`}>{gift.name}</Link>)}
            </div>
            <div className='flex flex-wrap gap-10 justify-center'>

                {a[category].map(b => <div className='card' ><img onClick={()=>{Notification.requestPermission().then(p=>{if(p==='granted'){new Notification("Added to Favourites")}else{alert("Added to favourites")}});setFavourites([...favourites,b])}} className='heart-icon' src={heartIcon}/><img width='276px' src={b.img} /><div className='align-center'><p>{b.brand}</p><p><b>{b.name}</b></p><p>{b.price}</p></div></div>)}
            </div>
        </div>
    </div>


}
export default GiftedCategory;