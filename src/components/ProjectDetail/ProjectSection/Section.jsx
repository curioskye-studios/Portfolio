import TextSection from "./TextSection";
import ImageSection from "./ImageSection";
import { ImageSectionWithViewer } from "../../ImageViewer/ImageViewer";

export default function Section({ data }) {
  
  switch (data.type) {
    case 'text':       
      return <TextSection data={data} />;
    case 'image':      
      // return <ImageSection data={data} />;
      return <ImageSectionWithViewer data={data} />
    default:           
      return null;
  }
}