import Vue from 'vue'
import VueRouter from 'vue-router'

import homepage from "@/pages/homepage";
import service from "@/pages/services/service";
import login from "@/pages/login/login";
import SideBar from "@/components/SideBar";
import Health from "@/components/Health";
import Home from "@/components/Home";
import Mine from "@/components/Mine";
import servicelist from "@/pages/services/servicelist";
import myInformation from "@/pages/mine/myInformation";
import myContact from "@/pages/mine/myContact";
import myEntertainment from "@/pages/mine/myEntertainment";
import myMess from "@/pages/mine/myMess";
import myOld from "@/pages/mine/myOld";
import myOption from "@/pages/mine/myOption";
import myOrder from "@/pages/mine/myOrder";
import serviceNavBar from "@/components/serviceComponents/serviceNavBar";
import serviceDetails from "@/components/serviceComponents/serviceDetails";
import structDetails from "@/components/serviceComponents/structDetails";
import userComments from "@/components/serviceComponents/userComments";
import forget from "@/pages/login/forget"
import register from "@/pages/login/register";
import AllOrder from "@/components/orderCompoments/AllOrder";
import MyEntertain from "@/components/orderCompoments/MyEntertain";
import WaitForConfer from "@/components/orderCompoments/WaitForConfer";
import WaitForPay from "@/components/orderCompoments/WaitForPay";
import test from "@/pages/test";
import createOrder from "@/pages/services/createOrder";
import addOld from "@/pages/mine/addOld";
import addContact from "@/pages/mine/addContact";
import addRecord from "@/pages/health/addRecord";
import createComment from "@/components/orderCompoments/createComment";
import oldRecord from "@/pages/health/oldRecord";
import homeBeds from "@/components/createOrderComponents/homeBeds";
import homeTransform from "@/components/createOrderComponents/homeTransform";
import lifeCare from "@/components/createOrderComponents/lifeCare";
import nursingWorker from "@/components/createOrderComponents/nursingWorker";
import recoverServe from "@/components/createOrderComponents/recoverServe";
import structCare from "@/components/createOrderComponents/structCare";
import healthkeeping from "@/pages/health/healthkeeping";
import sugarCalculator from "@/pages/health/sugarCalculator";
import medicine from "@/pages/health/medicine";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {path:'/test',component: test},
    {
        path: '/homepage', component: homepage,redirect:'/sidebar'
    },
    {
        path: '/service', component: service,redirect:'/serviceNavBar'
    },
    {
        path:'/login', component: login
    },
    {
        path:'/sidebar',
        component: SideBar,
        redirect:'/home',
        children:[
            {
                path:'/health',component: Health
            },
            {
                path:'/home', component: Home
            },
            {
                path:'/mine', component: Mine
            }
        ]
    },
    {
        path:'/servicelist',component: servicelist
    },
    {
        path:'/myInformation',component: myInformation
    },
    {
        path:'/myContact',component: myContact
    },
    {
        path:'/createComment',component: createComment
    },
    {
        path:'/myEntertainment',component: myEntertainment
    },
    {
        path:'/myMess',component: myMess
    },
    {
        path:'/myOld',component: myOld
    },
    {
        path:'/addOld',component: addOld
    },
    {
        path:'/addContact',component:addContact
    },
    {
        path:'/addRecord',component:addRecord
    },
    {
        path:'/myOption',component: myOption
    },
    {
        path:'/sugarcalculator',component: sugarCalculator
    },
    {
        path:'/medicine',component: medicine
    },
    {
        path:'/myOrder',component: myOrder,redirect:'/AllOrder',
        children:[
            {
                path:'/AllOrder',component: AllOrder
            },
            {
                path:'/MyEntertain',component:MyEntertain
            },
            {
                path:'/WaitForPay',component:WaitForPay
            },
            {
                path:'/WaitForConfer',component:WaitForConfer
            }
        ]
    },
    {
      path:'/oldRecord',component:oldRecord
    },
    {
        path:'/forget',component: forget
    },
    {
        path:'/createOrder',component: createOrder,
        children:[
            {
                path:'/homebeds',component: homeBeds
            },
            {
                path:'/hometransform',component: homeTransform
            },
            {
                path:'/lifecare',component: lifeCare
            },
            {
                path:'/nursingworker',component: nursingWorker
            },
            {
                path:'/recoverserve',component: recoverServe
            },
            {
                path:'/structcare',component: structCare
            },
        ]
    },
    {
        path:'/healthkeeping',component: healthkeeping
    },
    {
        path:'/register',component: register
    },
    {
        path:'/serviceNavBar',component:serviceNavBar,redirect:'/serviceDetails',
        children:[
            {
                path:'/serviceDetails',component:serviceDetails
            },
            {
                path:'/structDetails',component: structDetails
            },
            {
                path:'/userComments',component:userComments
            }

        ]
    }

]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router