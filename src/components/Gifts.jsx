
import { Link } from "react-router-dom";
function Gifts(){

    const gifts = [{ name: "Valentine's", link: "valentine" }, { name: "Candles", link: "candles" }, { name: "Perfume Tray", link: "perfume_tray" }, { name: "Gift Set", link: "gift_set" }];
return <div className="flex flex-wrap  gap-4 maxW-300 m-auto mt-4 whoweAre px-4">
<div ><h1>GIFTS</h1>
{gifts.map(gift => <Link to={`/gifts/${gift.link}`} className={`giftLink`}>{gift.name}</Link>)}
</div>
</div>
}
export default Gifts;