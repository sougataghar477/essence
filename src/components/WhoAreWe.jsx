import lady from '../lady.png';
function WhoAreWe() {
    return <div className='flex flex-wrap  gap-4 maxW-300 m-auto mt-4 whoweAre px-4'>
        <div className='maxW-200'>
            <h1>WHO ARE WE</h1>
            <p><b>Story Identity</b></p>
            <p>

                Essence SPLIT is a brand that celebrates the beauty of the small things in life, and the power of fragrance to evoke memories and emotions. Our mini bottles allow our customers to experiment with new scents and discover their signature fragrance without the commitment of a full-size bottle. With Essence SPLIT, fragrance is personal and accessible.
            </p></div>

        <img src={lady} />
    </div>
}
export default WhoAreWe;
