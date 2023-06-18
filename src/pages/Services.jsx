import React, { useState } from 'react'
import servicesbg from "../utills/services/servicesbg.jpg"
import servicescrm from "../utills/services/servicescrm.jpg"
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

const Services = () => {
    const [isExpanded, setIsExpanded] = useState({
        "webdevlopment": false,
        "seo": false,
        "uiuxdesign": false,
        "productdevlopment": false,
        "softwaredevlopment": false,
        "graphicdesign": false
    });

    const toggleContent = (name) => {
        setIsExpanded((prevState) => ({
            ...prevState,
            [name]: !prevState[name],
        }));
    };

    return (
        <Box>
            <Flex
                direction="column"
                justifyContent="center"
                width="100%"
                height="70vh"
                bgImage={`linear-gradient(rgba(128, 128, 128, 0.5), rgba(128, 128, 128, 0.5)), url(${servicesbg})`}
                bgSize="cover"
                bgRepeat="no-repeat"
                bgPos="center"
                color="white"
                tabIndex={-1}
            >
                <Box width="100%" padding="15%">
                    <Heading fontSize="100px">Services</Heading>
                </Box>
            </Flex>
            <Box width={"100%"} padding={"0% 10% 0% 10%"}>
                <Box mb={"30px"} >
                    <hr style={{ borderBottom: "1px solid gray", marginBottom: "40px", marginTop: "20px" }} />
                    <Text fontSize={"16px"} color={"gray"} mb={"30px"}>All the services from our dedicated experts, willing, enthisiastic and ready to help you handle the digital work while you focus on important things that need your consideration. Here's our pallate of services that are in demand by our clients looking forward for their personal as well as business growth</Text>
                    <Image src={servicescrm} alt="servicescrm" />
                </Box>

                <Box display={"grid"} gridTemplateColumns={"repeat(1,1fr)"} rowGap={"20px"} >
                    {/* WebDevlopment Content  */}
                    <Box mb={"20px"}>
                        <Box>
                            <Box display="flex" alignItems="center" onClick={() => toggleContent('webdevlopment')} cursor="pointer" w={"100%"} justifyContent={"space-between"} borderBottom={"1px solid blue"}>
                                <Text fontWeight="bold" fontSize="30px" color={"blue"}>Web Development</Text>
                                {isExpanded.webdevlopment ? <ChevronUpIcon boxSize={"30px"} ml={2} color={"blue"} /> : <ChevronDownIcon color={"blue"} boxSize={"30px"} ml={2} />}
                            </Box>
                            {isExpanded.webdevlopment && (
                                <Flex direction={"column"} rowGap={"20px"} mt={4} color={"gray"} fontSize={"16px"} textAlign={"left"}>
                                    <Text>1. Customized Web Solutions: We specialize in developing tailored websites that align with your business objectives and brand identity. Our experienced team crafts unique designs and incorporates cutting-edge technologies to deliver a website that stands out from the competition.</Text>
                                    <Text>2. Responsive Design: We understand the importance of providing an optimal user experience across different devices and screen sizes. Our web development services prioritize responsive design, ensuring that your website looks and functions flawlessly on desktops, laptops, tablets, and mobile devices.</Text>
                                    <Text>3. User-Friendly Interface: We create intuitive and user-friendly interfaces that make navigation seamless and enhance user engagement. Our focus is on providing an intuitive flow, clear call-to-actions, and an aesthetically pleasing design to keep visitors engaged and encourage conversions.</Text>
                                    <Text>4. Scalability and Flexibility: We build websites with scalability in mind, allowing your online presence to grow as your business expands. Our websites are built on robust platforms that can accommodate increasing traffic, additional functionalities, and future integrations without compromising performance.</Text>
                                    <Text>5. SEO Optimization: We optimize websites for search engines to improve their visibility and organic rankings. Our web development strategies include implementing SEO best practices such as optimizing page titles, meta tags, URL structures, and integrating relevant keywords to enhance your website's online presence.</Text>
                                    <Text>6. Speed and Performance: We prioritize fast-loading websites that deliver a seamless user experience. Our developers optimize code, compress images, and utilize caching techniques to ensure quick loading times, reducing bounce rates and improving overall performance.</Text>
                                    <Text>7. E-commerce Solutions: If you're looking to sell products or services online, our web development services include robust e-commerce solutions. We integrate secure payment gateways, create user-friendly product catalogs, and implement inventory management systems to facilitate seamless online transactions.</Text>
                                    <Text>8. Ongoing Support and Maintenance: We offer reliable support and maintenance services to ensure your website runs smoothly at all times. Our team provides timely updates, security patches, and regular backups to safeguard your website and maintain its optimal performance.</Text>
                                    <Text>9. Collaboration and Transparency: We believe in open communication and collaboration throughout the web development process. We keep you informed at every stage, actively involving you in the decision-making process, and providing regular progress updates.</Text>
                                </Flex>
                            )}
                        </Box>
                    </Box>
                    {/* CEO Content  */}
                    <Box mb={"20px"}>
                        <Box>
                            <Box display="flex" alignItems="center" onClick={() => toggleContent("seo")} cursor="pointer" w={"100%"} justifyContent={"space-between"} borderBottom={"1px solid blue"}>
                                <Text fontWeight="bold" fontSize="30px" color={"blue"}>SEO</Text>
                                {isExpanded.seo ? <ChevronUpIcon boxSize={"30px"} ml={2} color={"blue"} /> : <ChevronDownIcon color={"blue"} boxSize={"30px"} ml={2} />}
                            </Box>
                            {isExpanded.seo && (
                                <Flex direction={"column"} rowGap={"20px"} mt={4} color={"gray"} fontSize={"16px"} textAlign={"left"}>
                                    <Text>1. Keyword Research and Analysis: We conduct comprehensive keyword research to identify the most relevant and high-converting keywords for your business. Our SEO experts analyze search volume, competition, and user intent to optimize your website's content and drive targeted organic traffic.</Text>
                                    <Text>2. On-Page Optimization: We optimize your website's on-page elements, including meta tags, headings, URL structure, and internal linking, to improve its visibility and relevancy to search engines. Our team ensures that each page is properly optimized to maximize its potential in search engine rankings.</Text>
                                    <Text>3. Content Strategy: We develop a content strategy that focuses on creating valuable and engaging content that resonates with your target audience. Our SEO specialists optimize your website's content with relevant keywords, incorporate internal and external links, and implement best practices for readability and user experience.</Text>
                                    <Text>4. Technical SEO: We perform a thorough technical analysis of your website to identify and resolve any technical issues that may impact its search engine visibility. This includes optimizing site speed, mobile responsiveness, crawlability, and indexability to ensure optimal performance.</Text>
                                    <Text>5. Local SEO: If your business operates in specific geographic locations, we optimize your website for local search. Our team optimizes your Google My Business profile, creates location-specific landing pages, and implements local citation management strategies to boost your visibility in local search results.</Text>
                                    <Text>6. Link Building: We employ effective link building strategies to increase your website's authority and credibility. Our SEO experts engage in outreach, guest blogging, and content promotion to secure high-quality backlinks from reputable sources, improving your website's search engine rankings.</Text>
                                    <Text>7. Monitoring and Reporting: We provide regular monitoring and reporting on your website's SEO performance. Our detailed reports highlight key metrics such as keyword rankings, organic traffic, and conversions, allowing you to track the effectiveness of our SEO strategies and make informed decisions.</Text>
                                    <Text>8. Competitive Analysis: We conduct thorough competitor analysis to identify their SEO strategies and uncover opportunities for improvement. Our team benchmarks your website against industry leaders and develops strategies to outrank your competitors in search engine results.</Text>
                                </Flex>
                            )}
                        </Box>
                    </Box>
                    {/* Ui/ux design content  */}
                    <Box mb={"20px"}>
                        <Box>
                            <Box display="flex" alignItems="center" onClick={() => toggleContent('uiuxdesign')} cursor="pointer" w={"100%"} justifyContent={"space-between"} borderBottom={"1px solid blue"}>
                                <Text fontWeight="bold" fontSize="30px" color={"blue"}>UI/UX Design</Text>
                                {isExpanded.uiuxdesign ? <ChevronUpIcon boxSize={"30px"} ml={2} color={"blue"} /> : <ChevronDownIcon color={"blue"} boxSize={"30px"} ml={2} />}
                            </Box>
                            {isExpanded.uiuxdesign && (
                                <Flex direction={"column"} rowGap={"20px"} mt={4} color={"gray"} fontSize={"16px"} textAlign={"left"}>
                                    <Text>1. User-Centered Design: We prioritize the needs and preferences of your target users to create intuitive and engaging user interfaces.</Text>
                                    <Text>2. Research and Analysis: We conduct thorough research to understand your target audience, industry trends, and competitors to deliver a UI/UX design that aligns with your business goals.</Text>
                                    <Text>3. Wireframing and Prototyping: We develop detailed wireframes and interactive prototypes to visualize the user flow and functionality of your digital product before development.</Text>
                                    <Text>4. Visual Design: Our talented designers create visually appealing and aesthetically pleasing interfaces that reflect your brand identity and evoke positive user experiences.</Text>
                                    <Text>5. Interaction Design: We focus on crafting seamless interactions and animations to enhance user engagement and provide smooth navigation within your application or website.</Text>
                                    <Text>6. Usability Testing: We conduct rigorous usability testing to gather user feedback and insights, enabling us to refine and improve the user experience based on real user interactions.</Text>
                                    <Text>7. Responsive Design: Our UI/UX designs are responsive and optimized for various devices, ensuring a consistent and enjoyable experience across desktop, tablet, and mobile platforms.</Text>
                                    <Text>8. Accessibility: We prioritize inclusive design practices to ensure that people with disabilities can access and navigate your digital product with ease.</Text>
                                    <Text>9. Continuous Iteration: We believe in an iterative design process, constantly gathering user feedback and making improvements to enhance the UI/UX based on evolving user needs and preferences.</Text>
                                    <Text>10. Collaboration and Communication: We maintain open lines of communication throughout the design process, collaborating closely with your team to ensure that the UI/UX design aligns with your vision and goals.</Text>
                                    <Text>11. Ongoing Support: We provide ongoing support and maintenance to ensure that your UI/UX design remains effective and up-to-date as your business evolves.</Text>
                                </Flex>
                            )}
                        </Box>
                    </Box>
                    {/* Product Devlopment  */}
                    <Box mb={"20px"}>
                        <Box>
                            <Box display="flex" alignItems="center" onClick={() => toggleContent('productdevlopment')} cursor="pointer" w={"100%"} justifyContent={"space-between"} borderBottom={"1px solid blue"}>
                                <Text fontWeight="bold" fontSize="30px" color={"blue"}>Product Development</Text>
                                {isExpanded.productdevlopment ? <ChevronUpIcon boxSize={"30px"} ml={2} color={"blue"} /> : <ChevronDownIcon color={"blue"} boxSize={"30px"} ml={2} />}
                            </Box>
                            {isExpanded.productdevlopment && (
                                <Flex direction={"column"} rowGap={"20px"} mt={4} color={"gray"} fontSize={"16px"} textAlign={"left"}>
                                    <Text>1. Expert Product Development: Our team of experts brings extensive experience and skills in product development. With diverse backgrounds and expertise, we ensure a comprehensive approach to deliver exceptional products.</Text>
                                    <Text>2. End-to-End Solutions: We provide complete end-to-end solutions for product development, starting from ideation and design to prototyping, testing, and manufacturing. Our seamless process ensures efficient and successful product launches.</Text>
                                    <Text>3. Customized Approach: We understand that every client has unique needs and goals. Our services are tailored to meet your specific requirements, regardless of the industry or product type. We adapt our strategies to ensure optimal outcomes.</Text>
                                    <Text>4. Innovation and Creativity: Our commitment to innovation and creative problem-solving sets us apart. We have a track record of developing successful products that demonstrate our ability to think outside the box and deliver cutting-edge solutions.</Text>
                                    <Text>5. User-Centric Design: We prioritize user-centric design principles, placing user experience (UX) and user interface (UI) at the forefront. By creating intuitive and engaging products, we enhance user satisfaction and drive business success.</Text>
                                    <Text>6. Agile Development Methodology: We follow agile development methodologies to deliver products in iterative cycles. This approach allows for quick feedback, adaptation, and ensures efficient project management.</Text>
                                    <Text>7. Prototyping and Testing: Our prototyping and testing capabilities include rapid prototyping, user testing, and iterative refinement. We ensure that the final product meets the highest quality standards and exceeds customer expectations.</Text>
                                    <Text>8. Quality Assurance and Compliance: We are committed to quality assurance and compliance with industry standards and regulations. Our products undergo rigorous testing to ensure they meet all necessary quality and safety requirements.</Text>
                                    <Text>9. Timely Delivery: We pride ourselves on delivering products on time and within budget. Our efficient project management processes and experienced team ensure reliable and timely delivery of your products.</Text>
                                    <Text>10. Collaboration and Communication: We believe in close collaboration and effective communication with our clients throughout the product development process. We involve you in decision-making, provide regular updates, and ensure transparency at every stage.</Text>
                                </Flex>
                            )}
                        </Box>
                    </Box>
                    {/* Software Devlopment  */}
                    <Box mb={"20px"}>
                        <Box>
                            <Box display="flex" alignItems="center" onClick={() => toggleContent('softwaredevlopment')} cursor="pointer" w={"100%"} justifyContent={"space-between"} borderBottom={"1px solid blue"}>
                                <Text fontWeight="bold" fontSize="30px" color={"blue"}>Software Development</Text>
                                {isExpanded.softwaredevlopment ? <ChevronUpIcon boxSize={"30px"} ml={2} color={"blue"} /> : <ChevronDownIcon color={"blue"} boxSize={"30px"} ml={2} />}
                            </Box>
                            {isExpanded.softwaredevlopment && (
                                <Flex direction={"column"} rowGap={"20px"} mt={4} color={"gray"} fontSize={"16px"} textAlign={"left"}>
                                    <Text>1. Custom Software Solutions: We specialize in developing custom software solutions tailored to meet the specific needs of clients. Our expertise lies in creating innovative and scalable software applications that address your unique requirements.</Text>
                                    <Text>2. Full-Cycle Development: We handle the entire software development lifecycle, from requirements gathering and design to development, testing, deployment, and ongoing maintenance and support. Our comprehensive approach ensures a seamless and efficient development process.</Text>
                                    <Text>3. Agile Development Methodology: We utilize agile development methodologies, such as Scrum or Kanban, to ensure flexibility, collaboration, and efficient project delivery. We deliver high-quality software in iterative cycles, allowing for frequent feedback and quick adaptability.</Text>
                                    <Text>4. Technology Expertise: Our team possesses proficiency in a wide range of programming languages, frameworks, and technologies. We stay up to date with the latest advancements to deliver modern and cutting-edge software solutions that meet your business needs.</Text>
                                    <Text>5. Cross-Platform Development: We excel in developing software applications that work seamlessly across multiple platforms, including web, mobile, and desktop. Our expertise in responsive design and mobile app development ensures a consistent and engaging user experience.</Text>
                                    <Text>6. User-Centric Approach: We prioritize user experience (UX) design and user interface (UI) development. Our focus is on creating intuitive and user-friendly software interfaces that enhance user engagement and satisfaction, resulting in a positive user experience.</Text>
                                    <Text>7. Quality Assurance and Testing: We are committed to rigorous quality assurance and testing processes. Our team conducts thorough testing, including functional testing, performance testing, security testing, and usability testing, to ensure the reliability and stability of the software.</Text>
                                    <Text>8. Scalability and Integration: We have extensive experience in developing software that can scale with business growth and seamlessly integrate with existing systems and third-party APIs. Our expertise lies in building robust and scalable architectures.</Text>
                                    <Text>9. Security and Compliance: We prioritize building secure software applications and adhere to data privacy and compliance regulations. Your software will be developed with the highest security standards to protect your sensitive information.</Text>
                                    <Text>10. Client Collaboration: We adopt a collaborative approach to software development, working closely with clients as partners throughout the entire development process. We value effective communication, regular updates, and client involvement to ensure project success.</Text>
                                </Flex>
                            )}
                        </Box>
                    </Box>
                    {/* Graphic Design  */}

                    <Box mb={"20px"}>
                        <Box>
                            <Box display="flex" alignItems="center" onClick={() => toggleContent('graphicdesign')} cursor="pointer" w={"100%"} justifyContent={"space-between"} borderBottom={"1px solid blue"}>
                                <Text fontWeight="bold" fontSize="30px" color={"blue"}>Graphic Design</Text>
                                {isExpanded.graphicdesign ? <ChevronUpIcon boxSize={"30px"} ml={2} color={"blue"} /> : <ChevronDownIcon color={"blue"} boxSize={"30px"} ml={2} />}
                            </Box>
                            {isExpanded.graphicdesign && (
                                <Flex direction={"column"} rowGap={"20px"} mt={4} color={"gray"} fontSize={"16px"} textAlign={"left"}>
                                    <Text>1. Professional Graphic Design: Our skilled graphic designers provide a wide range of creative graphic design services to help you visually communicate your brand message effectively.</Text>
                                    <Text>2. Brand Identity Design: We create unique and memorable brand identities that capture the essence of your business, including logo design, color palettes, typography, and brand guidelines.</Text>
                                    <Text>3. Print Design: Our expertise extends to print design, including business cards, brochures, flyers, posters, packaging design, and other marketing collateral, ensuring a cohesive and professional look for your brand.</Text>
                                    <Text>4. Digital Design: We specialize in digital design for web and social media platforms, crafting visually engaging graphics, banners, social media posts, and email newsletters that attract attention and drive engagement.</Text>
                                    <Text>5. UI/UX Design: Our UI/UX designers create intuitive and user-friendly interfaces, ensuring a seamless and enjoyable user experience across websites, mobile apps, and other digital platforms.</Text>
                                    <Text>6. Illustration and Infographics: We bring ideas to life through custom illustrations and infographics, making complex information easily understandable and visually appealing.</Text>
                                    <Text>7. Branding Collateral: We design branding collateral such as stationery, presentations, signage, and promotional materials that reflect your brand identity consistently and professionally.</Text>
                                    <Text>8. Visual Content Creation: We assist in creating visual content for your marketing campaigns, including social media graphics, ad banners, and visual assets that resonate with your target audience.</Text>
                                    <Text>9. Photo Editing and Retouching: Our graphic designers are skilled in photo editing and retouching techniques, enhancing images to perfection and ensuring a professional and polished look.</Text>
                                    <Text>10. Creative Problem Solving: We approach graphic design with a problem-solving mindset, understanding your goals and translating them into visually compelling solutions that leave a lasting impact.</Text>
                                    <Text>11. Collaboration and Communication: We believe in a collaborative approach, working closely with you to understand your vision, provide regular updates, and incorporate your feedback throughout the design process.</Text>
                                    <Text>12. Attention to Detail and Quality: We pay meticulous attention to detail, ensuring that every design element is carefully crafted, and the final deliverables meet the highest quality standards.</Text>
                                </Flex>
                            )}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Services