import PageLayout from "../components/PageLayout.jsx";
import PageBrijida from "../components/Home.jsx";


export default function Home() {
    return (
        <PageLayout title="Bokato - Home">
            {/* MAIN */}
            <div>
                <PageBrijida></PageBrijida>
            </div>
        </PageLayout>
    );
}