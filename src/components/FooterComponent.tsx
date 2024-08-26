"use client";

import { Footer } from "flowbite-react";

function FooterComponent() {
    return (
        <>
          <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700 "></hr>
          <Footer container className="shadow-none">
            <Footer.Copyright href="#" by="BusinessName™" year={2024} />
            <Footer.LinkGroup>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </Footer>
        </>
      );
}

export default FooterComponent;