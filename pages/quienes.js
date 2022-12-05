import PageLayout from "../components/PageLayout.jsx";
import PageQuines from "../components/Quienes"
function Quienes() {
  return (
    <div>
        <PageLayout title="Bokato - Quienes Somos">
            {/* MAIN */}
            <div>
                <PageQuines/>
            </div>
        </PageLayout>
    </div>
  )
}

export default Quienes