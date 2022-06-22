import Hero from '../components/Hero';
import Text from '../components/Text';
import {Button} from '../components/Button';

const BoardPage = () => {
  return (
    <div className="mx-auto">
      <Hero title="Our Board">
        <>
          <Text size="b1" className="mt-2 mb-8">
          Our mission is to give youth the opportunity to learn technology concepts,
          and leadership skills; creating a pipeline of future-ready professionals through
          project-based learning and innovative programs. WE CODE KC is an initiative that
          serves the urban core of Kansas City, exposing youth to various programming languages,
          technology, cyber security, and computer science concepts.
          </Text>

          <Text size="b1" className='mt-2'>
          Learning the basic concept of coding develops creativity, 
          problem solving skills, builds confidence and helps to build a positive future.
          Every child, no matter their zip code or their family’s financial status, should have the opportunity to learn to code.
          </Text>
          <br />
          <Button
            className="mt-8"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdYfOQ_31AsFUE9HKPkI45diPVndUdWah8eH8eep90HiON9qA/viewform"
          >
            Join Our Team
          </Button>
        </>
      </Hero>
 
      <div className="content-container">

        <div  className='md:flex m-10 py-4 even:flex-row-reverse'>
          <div className='mx-auto md:w-[440px]  shadow-xl '>
            <img className='w-full' src="/images/tammy-buckner.jpeg"/>
          </div>
          <div className='w-16'>{ /* Used to imitate padding on flex-row-reverse best I could find to keep aligned onreverse */ }</div>
          <div className='w-full shadow-xl border-2 border-gray-100'>
            <Text className="p-4 text-black " size="h1">
              Tammy Buckner <span className='text-gray-500'>|</span> Founder & CEO
            </Text>
            <Text className="pb-4 px-4 text-gray-500" size="b1">
              Tammy Buckner is the Founder & CTO of Techquity Digital LLC, 
              a minority and women-owned technology solutions company specializing in 
              innovative software & application development, Dev/Ops & business analytics to 
              automate and improve business processes. As a successful serial entrepreneur, 
              she also co-founded WeCode KC as a means to share her considerable educational and 
              technology experience with young people in underrepresented communities. 
              Tammy maintains strong connections with educators, business owners, schools, and community centers to provide conferences, 
              community tech events, and facilitate workshops.
            </Text>
          </div>
        </div>

        <div  className='md:flex m-10 py-4 even:flex-row-reverse'>
          <div className='mx-auto md:w-[440px] shadow-xl'>
            <img className='w-full' src="/images/natalie-lewis.jpeg"/>
          </div>
          <div className='w-16'>{ /* Used to imitate padding on flex-row-reverse best I could find to keep aligned onreverse */ }</div>
          <div className='w-full shadow-xl border-2 border-gray-100'>
            <Text className="p-4 text-black " size="h1">
              Natalie Lewis <span className='text-gray-500'>|</span> Board Chair
            </Text>
            <Text className="pb-4 px-4 text-gray-500" size="b1">
              Servant Leader with rare combination of creative and analytical problem-solving skills. 
              Lead organizations and programs from conception to fully-scaled operations. 
              Interact cross-functionally with key stakeholders to bridge gaps and develop integrated solutions to complex social issues.
            </Text>
          </div>
        </div>

        <div  className='md:flex m-10 py-4 even:flex-row-reverse'>
          <div className='mx-auto md:w-[440px] shadow-xl'>
            <img className='w-full' src="/images/jan-kreamer.jpeg"/>
          </div>
          <div className='w-16'>{ /* Used to imitate padding on flex-row-reverse best I could find to keep aligned onreverse */ }</div>
          <div className='w-full shadow-xl border-2 border-gray-100'>
            <Text className="p-4 text-black " size="h1">
              Janice Kreamer <span className='text-gray-500'>|</span> Treasurer & Secretary
            </Text>
            <Text className="pb-4 px-4 text-gray-500" size="b1">
              Janice Kreamer is the former chairman of the Kauffman Foundation Board of Trustees. 
              She joined the board in December of 2006. She is the retired president and CEO of the 
              Greater Kansas City Community Foundation and Affiliated Trusts.  Jan is also known nationally for 
              her leadership of community foundations and especially for her pioneering work focused on donor intent. 
            </Text>
          </div>
        </div>

        <div  className='md:flex m-10 py-4 even:flex-row-reverse'>
          <div className='mx-auto md:w-[440px] shadow-xl'>
            <img className='w-full' src="/images/rob-rogers.jpeg"/>
          </div>
          <div className='w-16'>{ /* Used to imitate padding on flex-row-reverse best I could find to keep aligned onreverse */ }</div>
          <div className='w-full shadow-xl border-2 border-gray-100'>
            <Text className="p-4 text-black " size="h1">
              Rob Rogers <span className='text-gray-500'>|</span> Board Member
            </Text>
            <Text className="pb-4 px-4 text-gray-500" size="b1">
              Bio Coming Soon!
            </Text>
          </div>
        </div>

        <div  className='md:flex m-10 py-4 even:flex-row-reverse'>
          <div className='mx-auto md:w-[440px] shadow-xl'>
            <img className='w-full' src="/images/ryan-reed.jpeg"/>
          </div>
          <div className='w-16'>{ /* Used to imitate padding on flex-row-reverse best I could find to keep aligned onreverse */ }</div>
          <div className='w-full shadow-xl border-2 border-gray-100'>
            <Text className="p-4 text-black " size="h1">
              Ryan Reed <span className='text-gray-500'>|</span> Board Member
            </Text>
            <Text className="pb-4 px-4 text-gray-500" size="b1">
              I’ve spent my career establishing high-performing teams and delivering results. 
              I enjoy working with cross-functional teams with people from diverse backgrounds. 
              My goal is to become a trusted advisor and partner with both developers and business leaders. 
              I work towards leading the creation of tech solutions that range from innovative cloud-based web apps, 
              mobile experiences, robust open APIs, and integrations with 3rd party apps. Although my expertise is in 
              leading talented software engineers and product managers, I also have a passion for designing user experiences, 
              code architecture, and the DevOps process.
            </Text>
          </div>
        </div>

        <div  className='md:flex m-10 py-4 even:flex-row-reverse'>
          <div className='mx-auto md:w-[440px] shadow-xl'>
            <img className='w-full' src="/images/kathy-feist.jpeg"/>
          </div>
          <div className='w-16'>{ /* Used to imitate padding on flex-row-reverse best I could find to keep aligned onreverse */ }</div>
          <div className='w-full shadow-xl border-2 border-gray-100'>
            <Text className="p-4 text-black " size="h1">
              Kathy Feist <span className='text-gray-500'>|</span> Board Member
            </Text>
            <Text className="pb-4 px-4 text-gray-500" size="b1">
              Bio Coming Soon!
            </Text>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BoardPage;
