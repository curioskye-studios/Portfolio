// Transform Text
const emphasize = (text) => <span className="green-highlight"> {text} </span>;

// Create Elements
const makeBreak = () => <div className="separator-small"/>;

const makeDiv = (content = "") => <div> {content} </div>;
const makeParagraph = (content) => <p> {content} </p>

const makeUnorderedList = (content) => <ul> {content} </ul>;
const makeListItem = (content) => <li> {content} </li>;

const makeHeading = (content) => (
  <h4 className="detail-subheading"> 
    {content} 
    <div className='green-line-adaptable' style={{marginTop: "5px", width: "90%"}} />
  </h4>
);

// Aliases
export const Em = emphasize;

export const Br = makeBreak;
export const Ul = makeUnorderedList;
export const Li = makeListItem;
export const H = makeHeading;