import { ProducForm } from "../../../components/ProducForm.js";
import PageLayout from "../../../components/PageLayout.jsx";

function pageUpdate() {
  return (
    <div>
        <PageLayout title="NewsApp - Quienes Somos">
            {/* MAIN */}
            <div>
                <ProducForm/>
            </div>
        </PageLayout>
    </div>
  )
}

export default pageUpdate