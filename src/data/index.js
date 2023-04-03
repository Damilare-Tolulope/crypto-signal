import { path } from '../utils/paths'
import dashboard from '../assets/icons/dashboard.svg'
import graph from '../assets/icons/graph.svg'
import notification from '../assets/icons/notification.svg'
import stack from '../assets/icons/stack.svg'
import bot from '../assets/icons/bot.svg'
import signal from '../assets/icons/signal.svg'
import img from '../assets/images/img.png'
import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'
import img4 from '../assets/images/img4.png'
import img5 from '../assets/images/img5.png'

export const links = [
    {
        icon: dashboard,
        label: "Dashboard",
        route: path.DASHBOARD,
    },
    {
        icon: graph,
        label: "Analytics",
        route: path.ANALYTICS,
    },
    {
        icon: stack,
        label: "Positions",
        route: path.POSITIONS,
    },
    {
        icon: notification,
        label: "Notifications",
        route: path.NOTIFICATIONS,
    },
    {
        icon: bot,
        label: "Bots",
        route: path.BOTS,
    },
    {
        icon: signal,
        label: "Signal Groups",
        route: path.SIGNALGROUPS,
    },
]

export const walletData = [
    {
        wallet: "Binance",
        coin: "BTC",
        balance: "0.0000123",
    },
    {
        wallet: "Binance",
        coin: "USDT",
        balance: "0.0000123",
    },
    {
        wallet: "Binance",
        coin: "BUSD",
        balance: "0.0000123",
    },
]

export const groups = [
    {
        icon: img,
        name: 'ABC 15',
        type: 'Private',
        minAllocation: '100 USDT',
        maxAllocation: '1000 USDT',
        subscription: 'Free',
        monthlyRevenue: '$1000.00',
        members: 78,
        connRequest: 5,
        activeMemberEmails: [
            "johnryan@gmail.com",
            "jonathanwhite@gmail.com",
            "macryenoldsjean@gmail.com",
            "josephjacobjudah@gmail.com",
        ]
    },
    {
        icon: img1,
        name: 'The Champions',
        type: 'Public',
        minAllocation: '10 USDT',
        maxAllocation: '100 USDT',
        subscription: 'Paid',
        monthlyRevenue: '$1200.00',
        members: 18,
        connRequest: 3,
        activeMemberEmails: [
            "johnryan@gmail.com",
            "jonathanwhite@gmail.com",
            "macryenoldsjean@gmail.com",
            "josephjacobjudah@gmail.com",
        ]
    },
    {
        icon: img2,
        name: 'Bloom  Group',
        type: 'Private',
        minAllocation: '50 USDT',
        maxAllocation: '500 USDT',
        subscription: 'Paid',
        monthlyRevenue: '$1500.00',
        members: 30,
        connRequest: 35,
        activeMemberEmails: [
            "johnryan@gmail.com",
            "jonathanwhite@gmail.com",
            "macryenoldsjean@gmail.com",
            "josephjacobjudah@gmail.com",
        ]
    },
    {
        icon: img3,
        name: 'SHA 145',
        type: 'Public',
        minAllocation: '900 USDT',
        maxAllocation: '8000 USDT',
        subscription: 'Free',
        monthlyRevenue: '$9000.00',
        members: 40,
        connRequest: 12,
        activeMemberEmails: [
            "johnryan@gmail.com",
            "jonathanwhite@gmail.com",
            "macryenoldsjean@gmail.com",
            "josephjacobjudah@gmail.com",
        ]
    },
    {
        icon: img4,
        name: 'ETDA Gurus',
        type: 'Public',
        minAllocation: '150 USDT',
        maxAllocation: '1800 USDT',
        subscription: 'Paid',
        monthlyRevenue: '$6000.00',
        members: 59,
        connRequest: 25,
        activeMemberEmails: [
            "johnryan@gmail.com",
            "jonathanwhite@gmail.com",
            "macryenoldsjean@gmail.com",
            "josephjacobjudah@gmail.com",
        ]
    },
    {
        icon: img5,
        name: 'Req Group',
        type: 'Private',
        minAllocation: '300 USDT',
        maxAllocation: '7000 USDT',
        subscription: 'Free',
        monthlyRevenue: '$5000.00',
        members: 24,
        connRequest: 5,
        activeMemberEmails: [
            "johnryan@gmail.com",
            "jonathanwhite@gmail.com",
            "macryenoldsjean@gmail.com",
            "josephjacobjudah@gmail.com",
        ]
    },
]