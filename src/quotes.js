
const Quotes = ({quote}) => {
    return ( <div className="quote-content m-auto">
        <div id="text">{quote.text}</div>
        <div id="author">-{quote.author}</div>
    </div> );
}
 
export default Quotes;