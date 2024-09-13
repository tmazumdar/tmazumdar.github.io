var getExperience = () => {
    return {
        "FREE": {
                description: "Started Freelancing",
                drawer: {
                    title: "Freelancer",
                    time: "January 2024 - Present",
                    description: `I built a desktop app to track & plot stocks and ETFs. 
                    I used Electron, React, Typescript, DaisyUI, TailwindCSS, ChartJS & Polygon API.
                    I am also assisting my partner with logistics to startup her own bakery business 
                    in Kitchener-Waterloo/Cambridge.`
                }
        },
        "TRIP": {
                description: "Joined Trip Ninja",
                drawer: {
                    title: "Squad Lead / Software Developer",
                    time: "Feb 2025 - Present",
                    description: ``
                }
        },
        "YELP": {
            description: "Joined Yelp",
            drawer: {
                title: "Senior Software Engineer",
                time: "August 2021 - January 2024",
                description: `I was a senior enginer on the Market Fit (Growth) team at Yelp.
                The role involved leading projects, experimenting on user activity metrics
                (e.g. page views, clicks) on Yelp's website.
                I mentored junior engineers with code reviews, 1-on-1s and feedback during design &
                implementation
                I also got to work with Python micro-services which was a shift in tech stack from my prior experiences`,
                web: "www.yelp.ca"
            }
        },
        "MAK": {
            description: "Joined MAK Consulting",
            drawer: {
                title: "Programmer Analyst at MAK Consulting",
                time: "June 2016 - July 2021",
                description: `I worked at a startup developing manufacturing software
                for factories.
                We used AngularJS for frontend, and .NET/C#, Web API, EntityFramework 5,
                LINQ & SQL stored procedures for the back-end.
                I also got experience with Powershell scripting for automating CI/CD,
                and debugging PLC interfaces via OPC protocol and Kepware`,
                web: "www.makcg.com"
            }
        },
        "CDK": {
            description: "Joined CDK Global",
            drawer: {
                title: "Software Engineer at CDK Global",
                time: "June 2012 - April 2016",
                description: `My first job was at ONE-EIGHTY CORP which was later acquired by CDK.
                During my time, I led a customer data integration project with BMW.
                I gained experience building communication layer with .NET, C#, WCF and SOAP to facilitate XML
                based communication between services.`,
                web: "www.cdkglobal.com"
            }

        },
        "UW": {
            description: "Completed Bachelors",
            drawer: {
                title: "Undergraduate studies",
                time: "April 2012",
                description: `I completed my Bachelor's degree with an 80 average.
                My specializations were in Digital and Multi-variable Control Systems,
                Digital Circuits, RF and Wireless, Information Systems Analysis and Design.`,
                web: "www.uwaterloo.ca"
            }
        },
        "EE": {
            description: "Started BASc in EE",
            drawer: {
                title: "University of Waterloo",
                time: "2007 - 2012",
                description: `I started my Bachelor's program in the UW Electrical Engineering Co-op program. 
                I had some experience learning computer programming in C and C++ in high school. 
                That helped me with my programming courses at UW. However, I found the core EE courses were hard
                and it wasn't until 4th year that I started enjoying and getting good grades in them.`
            }
        },
        "CA": {
            description: "Moved to Canada",
            drawer: {
                title: "Immigration",
                time: "August 2007",
                description: `I was born and raised in Bangladesh. Before moving to Canada, 
                I was a student at North South University where I completed two semesters 
                in Electrical & Telecommunications Engineering. I decided to leave my home 
                country to pursue my education and career in North America.`
            }
        },
        "BD": {
            description: "Tutored students",
            drawer: {
                title: "Home Tutor",
                time: "2005-2007",
                description: `I was a private tutor for O-Level students 
                and helped them with their school-work. 
                I taught Physics, Mathematics, Chemistry, Biology and Economics.`
            }
        }
    }

};

export default getExperience;