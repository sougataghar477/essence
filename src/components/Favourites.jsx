import useLocalStorage from "use-local-storage";
function Favourites() {
    const [favourites, setFavourites] = useLocalStorage("favourites", []);
    console.log(favourites)
    return <div>

        <div className='flex flex-wrap gap-10 justify-center'>
            {favourites.length>0 ? favourites.map(b => <div className='card fs-24 mt-4' >
                <img width='276px' src={b.img} /><div className='align-center'>
                    <p>{b.brand}</p>
                    <p><b>{b.name}</b></p>
                    <p>{b.price}</p></div>
                    </div>) :<h1> Nothing in favourites</h1>}


        </div>
    </div>
}
export default Favourites;