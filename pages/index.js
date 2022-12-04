import PageLayout from "../components/PageLayout.jsx";
import PageBrijida from "../components/Home.jsx";
import axios from "axios";
import Link from "next/link.js";

export default function Home({products}) {
    return (
        <PageLayout title="NewsApp - Home">
            {/* MAIN */}
            <div>
                <PageBrijida></PageBrijida>
            </div>
        </PageLayout>
    );
}