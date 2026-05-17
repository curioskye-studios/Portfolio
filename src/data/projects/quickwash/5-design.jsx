import { Em, BrS, BrM, BrL, Li, H, A, Img } from '../../../utils/jsxContentCreator';
import OldDesignImg from '../../../assets/ux-projects/quickwash/quickwash-old-designs.png';

export default 
{      
  type: 'text',
  reference: 'design',
  heading: `Revamping QuickWash's Design`,
  body: (
    <div>

      <div className="padded-left padded-top padded-right">
        When I was brought onto the team, the project had {Em("fragmented designs")} across different screens.
        This was due to how the {Em("workload was initially split")} among the team.

        {BrS()}

        {Em("Key features of the old design:")}
      </div>

      {Img(OldDesignImg, "Pictures featuring old fractured designs")}

      {BrL()}
    </div>
  )
}