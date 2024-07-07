import SectionBanner from "../components/sectionBanner/sectionBanner";
import SectionProducts from '../components/products/sectionProducts';
import OtherProducts from "../components/otherProducts/otherProducts";
import SectionPartner from "../components/sectionPartner/sectionPartner";
import SectionRelatedProducts from "../components/sectionRelatedProducts/sectionRelatedProducts";
import SectionBrands from "../components/sectionBrands/sectionBrands";

export default function Main(){
    return (
        <main>
            <SectionBanner/>
            <OtherProducts/>
            <SectionProducts/>
            <SectionPartner/>
            <SectionRelatedProducts/>
            <SectionBrands/>
        </main>
    )
}