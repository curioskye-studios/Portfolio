import TextSection from "./TextSection";
import ImageSectionWithViewer from "./ImageSection";

export default function Section({ data }) {
  
  switch (data.type) {
    case 'text':       
      return <TextSection data={data} />;
    case 'image':      
      return <ImageSectionWithViewer data={data} />
    default:           
      return null;
  }
}