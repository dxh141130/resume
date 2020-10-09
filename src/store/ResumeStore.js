import {observable} from "mobx";


class ResumeStore{
    @observable info ={
        name: 'Dongcai Huang',
        email: 'dxh141130@gmail.com',
        phone: '573-450-0883',
        city: 'Plano',
        state: 'Texas',
        zip: '75025',
        occupation: '',
        description: '',
        networks:[
            {
                name:'linkedin',
                url:'',
                icon: 'fa fa-linkedin',
            }
        ],
        avatarImg: '',
        aboutMe: '',
        resumeUrl: '',

    }

}

export default ResumeStore;