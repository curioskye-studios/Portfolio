import { Em, BrS, Li, H, A } from '../../../utils/jsxContentCreator';
import NotesImg from '../../../assets/ux-projects/lumonote/notes-image.jpg';

export default 
{
  type: 'image',
  link: NotesImg,
  alt: "Picture of the notes app icon on a phone screen",
  caption: (
    <div>
      Photo by {' '}
      {A(
        "https://unsplash.com/@brett_jordan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        "Brett Jordan"
      )}
      on {' '}
      {A(
        "https://unsplash.com/photos/white-and-blue-google-logo-aJ08i9-5k7E?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        "Unsplash"
      )} 
    </div>
  )
}