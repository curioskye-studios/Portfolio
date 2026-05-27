import TextSection from "./TextSection";
import ImageSection from "./ImageSection";

export default function Section({ data }) {
  
  switch (data.type) {
    case 'text':       
      return <TextSection data={data} />;
    case 'image':      
      return <ImageSection data={data} />;
    default:           
      return null;
  }
}