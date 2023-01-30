const Objects = (props) => {
    return <div>
        <div className="col">
            <div className="card text-center mb-3">
                <div className="card-header">
                    <img src={props.url} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <a href="#" className="btn btn-primary">{props.button}</a>
                </div>
            </div>
        </div>
    </div>
}

const Card = () => {
    return <div className="  row row-cols-1 row-cols-md-3 g-4">
        <Objects url="https://www.gannett-cdn.com/presto/2019/10/21/USAT/3486045f-77df-4d58-a529-ca6c0e3206d0-Hat.png" title="Hats" text="Why are thousands of people obsessed with this unisex winter hat? Maybe because it's 100 percent windproof on the outside yet 100 percent fuzzy and warm on the inside. Reviewers love that it comes with a removable face mask for the days when it's really cold and that it also looks stylish enough to wear every day." button="Get on Amazon" />
        <Objects url="https://www.gannett-cdn.com/presto/2019/10/21/USAT/25be589d-2a5c-4a2a-a1d1-1c3f4f02dfd5-Spray.png?width=660&height=372&fit=crop&format=pjpg&auto=webp" title="Shoes" text="Between the salt and slush, winter is not exactly kind to your shoes. To avoid ruining your favorite pair of leather boots, spray them with this protectant. According to its rave reviews on Amazon, it works well at preventing everything from water damage to salt stains and won’t alter the color or feel of your shoes’ original fabric." button="Get on Wallmart" />
        <Objects url="https://www.gannett-cdn.com/presto/2019/09/18/USAT/752d3d9b-8542-44a2-b023-55311f0fccbd-Socks.png?width=660&height=372&fit=crop&format=pjpg&auto=webp" title="socks" text="No slippers, no problem. All you really need for toastier toes is a pair of these thick thermal socks, which use an extra-heavy lining so your feet stay warmer for longer. According to their hundreds of glowing reviews, the socks are ridiculously soft and comfortable to wear around the house. " button="Get on Pricesmart" />
    </div>


}
export default Card;