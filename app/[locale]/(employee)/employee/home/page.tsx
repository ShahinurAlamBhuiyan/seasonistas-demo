import AllJobs from "~/components/Employee/Home/AllJobs"
import Banners from "~/components/Employee/Home/Banners"

const page = () => {
    return (
        <div className="sm:px-6">
            <Banners />
            <AllJobs />
        </div>
    )
}
export default page