import {observable} from "mobx";
import Avatar from '../assets/images/avatar.jpg';
import AWSSolutionArchitect from '../assets/images/AWS-Solution-Architect.png';
import HerokuArchitect from '../assets/images/sf_cert_heroku_arch_dsgner_rbg.png';

class ResumeStore{
    @observable info ={
        name: 'Dongcai Huang',
        email: 'dxh141130@gmail.com',
        phone: '573-450-****',
        street:"*** ****** ****",
        city: 'Dallas',
        state: 'Texas',
        zip: '75025',
        occupation: '',
        description: '',
        networks:[
            {
                name:'linkedin',
                url:'https://www.linkedin.com/in/dongcai-huang/',
                icon: 'fa fa-linkedin',
            },
            {
                name:'github',
                url:'https://github.com/dxh141130',
                icon: 'fa fa-github',
            },
            {
                name:'salesforce',
                url:'https://trailblazer.me/id/ahuang007',
                icon: 'fab fa-salesforce',
            }
        ],
        avatarImg: Avatar,
        aboutMe: '',
        resumeUrl: 'https://drive.google.com/file/d/1bW6FuyDVR92ILWBmYjUkk5gv-H06r-Zm/view?usp=sharing',
        educations: [
            {
                schoolName: 'Southeast Missouri State University',
                degree:'Bachelor Degree',
                graduated: 'Sep 2010 - May 2014',
                description: 'I acquired computer science major and mathematics minor, in the meanwhile I learned my favorite two programming languages Java/C++'
            },
            {
                schoolName: 'University of Texas At Dallas',
                degree:'Master Degree',
                graduated: 'Sep 2014 - Dec 2016',
                description: 'I got my first internship in Forward FS Group and start to my new world for web development'
            }
        ],
        jobs: [
            {
                company:'Fintech Automation',
                title: 'Software Engineer',
                years: 'Jun 2019 - Present',
                description: '',
            },
            {
                company:'Revenue Cycle Solutions',
                title: 'Software Engineer',
                years: 'Mar 2017 - Jun 2019',
                description: 'While working for Revenue Cycle Solutions, I experienced health insurance industry billing workflow system. I led team to develop scalable internal ticketing and reporting system in SpringBoot, ' +
                    'our internal employees could use the system to create ticket and assign to others, in the meanwhile manager used reporting module to review performance. After business needed extended, our system covered HIPAA Compliance to ' +
                    'secure our client information.',
            },
            {
                company:'Forward FS Group',
                title: 'Internship Database Administrator',
                years: 'Sep 2014 - Jan 2015',
                description: 'Working for Forward FS Group has given me a knowledge of web application development. Based on business needs, I optimized our database relationship and response time, ' +
                    'also collaborated with team to complete database migration and version control to solve development databases incompatible issue.',
            }
        ],
        skills:[
            {
                name: 'Javascript',
                level: '70%'
            },
            {
                name: 'React',
                level: '80%'
            },
            {
                name: 'Java',
                level: '90%'
            },
            {
                name: 'SpringBoot',
                level: '80%'
            },
            {
                name: 'Postgre',
                level: '80%'
            },
            {
                name: 'Redis',
                level: '70%'
            }
        ],
        certificates: [
            {
                name:'AWS Associate Solution Architect',
                img: AWSSolutionArchitect,
                url:'https://drive.google.com/file/d/1GELZPKbweG5M6PyhznKNJY9daHRMH1HL/view?usp=sharing',
                description: '',
            },
            {
                name: 'Heroku Architect Designer',
                img: HerokuArchitect,
                url:'https://drive.google.com/file/d/18o8PKqd6ERfWov1suCfiZ1q-8ijXkUKv/view?usp=sharing',
                description: '',
            }
        ]
    }

}

export default ResumeStore;