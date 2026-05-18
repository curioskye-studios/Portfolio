import { Link } from 'react-router-dom';
import ImageSection from '../components/ProjectSection/ImageSection';

// Transform Text
// const emphasize = (text) => <span style={{fontWeight: "bold", color: "var(--blue)"}}> {text} </span>;
const emphasize = (text) => <span className="green-highlight"> {text} </span>;
const bolden = (text) => <span style={{fontWeight: "bold"}}> {text} </span>;

// Create Elements
const makeSmallBreak = () => <div className="separator-small"/>;
const makeMediumBreak = () => <div className="separator"/>;
const makeLargeBreak = () => <div className="separator-large"/>;

const makeLink = (link, text) => <Link to={link}> {text} </Link>;

const makeUnorderedList = (content) => <ul> {content} </ul>;
const makeListItem = (content) => <li> {content} </li>;

const makeHeading = (content) => (
  <h4 className="detail-subheading"> 
    {content} 
    <div className='green-line-adaptable' style={{marginTop: "7px", width: "90%"}} />
  </h4>
);

const makeImage = (link, alt = "", caption = "") => (
  <ImageSection 
    data = { 
      { 
        link: link, 
        alt: alt,
        caption: caption
      }
    }
    otherClasses='subcontent-img'
  />
);

// Aliases
export const Em = emphasize;
export const B = bolden;

export const BrS = makeSmallBreak;
export const BrM = makeMediumBreak;
export const BrL = makeLargeBreak;

export const A = makeLink;

export const Ul = makeUnorderedList;
export const Li = makeListItem;

export const H = makeHeading;

export const Img = makeImage;