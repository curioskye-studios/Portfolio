import { Em, BrS, Li, H, A } from '../../../utils/jsxContentCreator';
import WasherImg from '../../../assets/ux-projects/quickwash/laundry-image.jpg';

export default 
{
  type: 'image',
  link: WasherImg,
  alt: "Picture of a laundry room with 3 washers",
  caption: (
    <div>
      Photo by {' '}
      {A(
        "https://unsplash.com/@tonchik?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        "Anton Savinov"
      )}
      on {' '}
      {A(
        "https://unsplash.com/photos/a-laundry-room-with-a-washing-machine-and-a-laundry-basket-S6jnHcI2Y-M?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        "Unsplash"
      )} 
    </div>
  )
}