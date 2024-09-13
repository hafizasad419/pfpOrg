import React from 'react'
import { Users, Factory, Lightbulb, Presentation, Building, Wrench, Microscope, FileStack, Truck, MapPin } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { MyButton } from '../../../utils'



const benefitsData = [
    {
        category: "For Visitors",
        benefits: [
            { text: "Meet Pakistan's foundry sector directly", icon: Users },
            { text: "Opportunity to develop imported parts locally", icon: Factory },
            { text: "Discuss casting solutions with foundry experts", icon: Lightbulb },
            { text: "Technical Sessions by local and global experts", icon: Presentation },
            { text: "Commercial Sessions by Industrial sectors", icon: Building },
            { text: "Explore new foundry technologies and innovations", icon: Microscope }

        ]
    },
    {
        category: "For Exhibitors",
        benefits: [
            { text: "Showcase their products and expertise to visitors from industrial as well as trading sectors", icon: Truck },
            { text: "Technical Guidance to improve the quality of their castings", icon: Wrench },
            { text: "Get to know latest foundry products and technologies", icon: Microscope },
            { text: "Understand casting requirements and needs to be presented by each industrial sector", icon: FileStack },
            { text: "Localized development of imported castings", icon: MapPin },
            { text: "Network with key stakeholders and industry leaders", icon: Users }

        ]
    }
]

const BenefitCard = ({ text, Icon }) => (
    <div className="flex items-start p-4 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
        <Icon className="w-8 h-8 text-orange mr-4 flex-shrink-0" />
        <p className="text-darkGray">{text}</p>
    </div>
)

function Benefits() {
    return (
        <div className="min-h-screen bg-lightGray py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-darkGray mb-12">Benefits of IFCE</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {benefitsData.map((category, index) => (
                        <div key={index} className="space-y-6">
                            <h2 className="text-2xl font-semibold text-orange mb-4">{category.category}</h2>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {category.benefits.map((benefit, benefitIndex) => (
                                    <BenefitCard key={benefitIndex} text={benefit.text} Icon={benefit.icon} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <NavLink to="/contact">
                <div className="flex justify-center my-8">
                    <MyButton
                        className="md:px-8 py-4 text-xl font-bold" type='submit' children='Book Your Stall Now' />
                </div>
            </NavLink>
        </div>
    )
}

export default Benefits;