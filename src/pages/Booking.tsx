import { useState } from "react";
import { Breadcrumb } from "flowbite-react";
import { HiCheckCircle } from "react-icons/hi";

import Menu from "../components/Menu";
import FooterComponent from "../components/FooterComponent";

function Booking() {
    const [bookingStatus, setBookingStatus] = useState("Dates");

    const isActive = (status: string) => bookingStatus === status ? "text-blue-600" : "text-gray-500";

    return (
        <div className="flex flex-col min-h-screen">
            <Menu />
            <div className="flex ml-4">
                <Breadcrumb aria-label="Default breadcrumb example">
                    <Breadcrumb.Item className={isActive("Dates")} onClick={() => setBookingStatus("Dates") }  icon={HiCheckCircle}>Dates</Breadcrumb.Item>
                    <Breadcrumb.Item className={isActive("Contact")} onClick={() => setBookingStatus("Contact")}>Contact</Breadcrumb.Item>
                    <Breadcrumb.Item className={isActive("Billing")} onClick={() => setBookingStatus("Billing")}>Billing</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            {/* Add the booking steps content here based on the bookingStatus */}
            <FooterComponent />
        </div>
    )
}

export default Booking;