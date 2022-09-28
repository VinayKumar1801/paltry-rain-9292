import React from 'react'
import "../Styles/TopSection.css"
import {Grid} from "@chakra-ui/react"
const Footer = () => {
  return (
    <div>

            <Grid className='footer'>
            <div>
            <div className='product'>
                    <h2>PRODUCT</h2>
                    <p>Proposals</p>
                <p>Contracts</p>
                <p>Invoicing</p>
                <p>Client CRM</p>
                <p>Time Tracking</p>
                <p>Task Tracking</p>
                <p>Forms</p>
                <p>Accounting</p>
                <p>Bonsai Tax</p>
                <p>Bonsai Cash</p>
                <p>Pricing</p>
                <p>Bonsai Reviews</p>
                </div>
              
            </div>
            <div>
                <div className='free'>
                    <h2>FREE RESOURCES</h2>
                    <p>Freelance Resources</p>
                    <p>Freelance Blog by Bonsai</p>
                    <p>How to Write a Contract</p>
                    <p>Online Signature Maker</p>
                    <p>Self-Employed Taxes Hub</p>
                    <p>Self-Employed Tax Calculator</p>
                    <p>Self-Employed Tax Deductions</p>
                </div>
            </div>
            <div>
                <div className='bon'>
                    <h2>BONSAI</h2>
                    <p>About</p>
                    <p>Careers</p>
                    <p>Support</p>
                    <p>LinkedIn</p>
                    <p>Twitter</p>
                    <p>Privacy policy</p>
                    <p>Legal</p>
                    <p>Affiliates</p>
                    <p>Write for Us</p>
                </div>
            </div>
        </Grid>
    </div>
  )
}

export default Footer;