import AllJobs from "~/components/Employer/Home/AllJobs"
import Banners from "~/components/Employer/Home/Banners"

const page = () => {
    return (
        <div className="sm:px-6">
            <Banners />
            <AllJobs />
        </div>
    )
}
export default page