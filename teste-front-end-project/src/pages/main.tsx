import SectionBanner from "../components/sectionBanner/sectionBanner";
import SectionProducts from '../components/products/sectionProducts';
import OtherProducts from "../otherProducts/otherProducts";
import SectionPartner from "../sectionPartner/sectionPartner";

export default function Main(){
    return (
        <main>
            <SectionBanner/>
            <OtherProducts/>
            <SectionProducts/>
            <SectionPartner/>
        </main>
    )
}