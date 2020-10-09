import {observable} from "mobx";


class ResumeStore{
    @observable info ={
        name: 'Dongcai Huang',
        email: 'dxh141130@gmail.com',
        phone: '573-450-****',
        street:"*** ****** Road",
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
        avatarImg: '',
        aboutMe: '',
        resumeUrl: '',
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
                description: '',
            },
            {
                company:'Forward FS Group',
                title: 'Internship Database Administrator',
                years: 'Sep 2014 - Jan 2015',
                description: '',
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
        ]
    }

}

export default ResumeStore;