import SectionBanner from "../components/sectionBanner/sectionBanner";
import SectionProducts from '../components/products/sectionProducts';
import OtherProducts from "../components/otherProducts/otherProducts";
import SectionPartner from "../components/sectionPartner/sectionPartner";

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